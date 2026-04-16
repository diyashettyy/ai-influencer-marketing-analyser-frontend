'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Trash2 } from 'lucide-react'
import { HistoryCueCard } from '@/components/cards/HistoryCueCard'

const CACHE_KEY = 'gallery_influencers_cache'
const CLEARED_IDS_KEY = 'gallery_cleared_ids'

export default function InfluencerHistoryGallery() {
  const [influencers, setInfluencers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5000/results')
        const data = await res.json()

        const clearedIds: string[] = JSON.parse(localStorage.getItem(CLEARED_IDS_KEY) || '[]')

        const formatted = (data.results || [])
          .filter((campaign: any) => !clearedIds.includes(campaign._id))
          .flatMap((campaign: any) =>
            (campaign.results || [])
              .filter((inf: any) => !!inf.username)
              .map((inf: any, indexWithinCampaign: number) => ({
                id: inf.username,
                campaignId: campaign._id,
                index: indexWithinCampaign,
                name: inf.full_name || inf.username,
                handle: '@' + inf.username,
                category: inf.category || 'General',
                followers: inf.followers || 0,
                aiScore: inf.final_score || 0,
                engagement : inf.engagement_score_norm ? Number(inf.engagement_score_norm.toFixed(2)) : 0,
                collaborations: [
                  {
                    id: campaign._id,
                    brandName: campaign.brand_name || "Unknown Brand",
                    brandLogo: (campaign.brand_name || "B")[0].toUpperCase(),
                    campaignType: campaign.category || "Campaign"
                  }
                ]
              }))
          )

        sessionStorage.setItem(CACHE_KEY, JSON.stringify(formatted))
        setInfluencers(formatted)
      } catch (error) {
        console.error('Error fetching influencers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const clearData = () => {
    try {
      const currentCampaignIds = [...new Set(influencers.map(inf => inf.campaignId))]
      const existingCleared: string[] = JSON.parse(localStorage.getItem(CLEARED_IDS_KEY) || '[]')
      const updatedCleared = [...new Set([...existingCleared, ...currentCampaignIds])]

      localStorage.setItem(CLEARED_IDS_KEY, JSON.stringify(updatedCleared))
      sessionStorage.removeItem(CACHE_KEY)
      localStorage.removeItem('latest_campaign_results')
      localStorage.removeItem('latest_result_id')

      setInfluencers([])
    } catch (error) {
      console.error('Error clearing data:', error)
    }
  }

  return (
    <main className="min-h-screen bg-background bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 -skew-y-3 -z-10 scale-110" />

          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
            Influencer Collaboration Gallery
          </h1>

          <p className="text-base sm:text-xl text-foreground/80 max-w-2xl mx-auto bg-card border-2 border-border p-4 sm:p-6 rounded-2xl shadow">
            Explore our network of top-tier influencers and their brand collaboration history.
          </p>
        </div>

        <div className="flex justify-end mb-6">
          <button type="button" onClick={clearData}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-destructive/10 text-destructive border border-destructive/20 font-semibold text-sm hover:bg-destructive/20 transition-colors">
            <Trash2 className="w-4 h-4" />
            Clear Data
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <p className="font-serif text-xl text-foreground/50 animate-pulse">Loading influencers...</p>
          </div>
        ) : influencers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="font-serif text-xl text-foreground/50">No influencers yet.</p>
            <Link href="/campaign-setup" className="text-primary font-semibold hover:underline">
              Run a campaign to get started
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {influencers.map((influencer, i) => (
              <div key={`${influencer.id}-${influencer.campaignId}-${influencer.index}`} className={`stagger-fade-${(i % 4) + 1}`}>
                <HistoryCueCard
                  {...influencer}
                  campaignId={influencer.campaignId}
                  index={influencer.index}
                  collaborations={influencer.collaborations}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
} 
