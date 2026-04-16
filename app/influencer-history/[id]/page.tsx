'use client'

import { use, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MapPin, Users, Sparkles } from 'lucide-react'

export default function InfluencerHistoryPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const campaignId = resolvedParams.id
    const searchParams = useSearchParams()
    const index = searchParams.get('index') || '0'

    const [influencer, setInfluencer] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchInfluencer = async () => {
            try {
                const res = await fetch(`http://127.0.0.1:5000/influencer/${campaignId}?index=${index}`)
                const data = await res.json()

                if (!res.ok || !data.influencer) {
                    setInfluencer(null)
                    return
                }

                const inf = data.influencer

                // Fixed: use engagement_score_norm — engagement_rate does not exist in the data model
                const engagementPct = Number(
                    ((inf.engagement_score_norm ?? inf.engagement_rate ?? 0) ).toFixed(2)
                )

                const collaborations = (data.campaigns || []).map((c: any, i: number) => ({
                    id           : i,
                    brandName    : c.brand_name || 'Unknown',
                    brandLogo    : (c.brand_name || 'B')[0].toUpperCase(),
                    campaignType : c.category
                        ? c.category.charAt(0).toUpperCase() + c.category.slice(1)
                        : 'Campaign',
                    sentiment  : Math.round((inf.sentiment_score ?? 0.5) * 100),
                    reach      : new Intl.NumberFormat().format(inf.followers || 0),
                    engagement : engagementPct,
                    date       : c.created_at,
                }))

                setInfluencer({
                    id            : inf.username,
                    name          : inf.full_name || inf.username,
                    handle        : '@' + inf.username,
                    category      : inf.category || 'General',
                    followers     : inf.followers || 0,
                    aiScore       : Number(inf.final_score || 0).toFixed(2),
                    location      : inf.country || 'Global',
                    collaborations,
                })

            } catch (error) {
                console.error('Error fetching influencer:', error)
                setInfluencer(null)
            } finally {
                setLoading(false)
            }
        }

        fetchInfluencer()
    }, [campaignId, index])

    if (loading) {
        return (
            <main className="min-h-screen bg-background">
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Loading...</h1>
                </div>
            </main>
        )
    }

    if (!influencer) {
 
        return (
            <main className="min-h-screen bg-background">
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Influencer Not Found</h1>
                    <Link href="/influencer-history" className="text-primary hover:underline">Return to Gallery</Link>
                </div>
            </main>
        )
    }

    const collaborations = [...(influencer.collaborations || [])].sort(
        (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
const formatLocation = (loc: string) => {
  return loc
    .toLowerCase()
    .split(' ')
    .map((word: string) =>
      word.length <= 3
        ? word.toUpperCase()
        : word
            .split("'")
            .map((part: string) =>
              part.charAt(0).toUpperCase() + part.slice(1)
            )
            .join("'")
    )
    .join(' ')
}
    return (
        <main className="min-h-screen bg-background pb-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

                {/* Header */}
                <div className="mb-12 stagger-fade-1">
                    <Link href="/influencer-history" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-foreground mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Gallery
                    </Link>
                    <div>
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Influencer Profile Overview
                        </h1>
                        <p className="text-lg text-foreground/70 max-w-2xl">
                            Historical performance insights and brand collaborations for{' '}
                            <span className="font-semibold text-foreground">{influencer.name}</span>.
                        </p>
                    </div>
                </div>

                {/* Overview Card */}
                <div className="bg-card rounded-2xl border-2 border-foreground p-5 sm:p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] stagger-fade-2">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">

                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-foreground bg-pastel-yellow flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(226,232,240,0.55)] flex-shrink-0">
                            <span className="font-serif text-4xl font-bold text-foreground dark:text-black">
                                {influencer.name.charAt(0)}
                            </span>
                        </div>

                        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 w-full">
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-foreground mb-1">{influencer.name}</h2>
                                <p className="text-foreground/60 font-medium mb-3">{influencer.handle}</p>
                                <div className="inline-block px-3 py-1 bg-emerald-200 border border-emerald-700 dark:bg-emerald-400/20 dark:border-emerald-300/40 rounded-full">
                                    <span className="text-xs font-bold text-emerald-950 dark:text-emerald-100 uppercase tracking-wide">
                                        {influencer.category}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                                    <Users className="w-4 h-4" />
                                    Total Followers
                                </div>
                                <p className="font-serif text-2xl font-bold text-foreground">
                                    {(influencer.followers / 1000).toFixed(0)}K
                                </p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                                    <Sparkles className="w-4 h-4" />
                                    AI Score
                                </div>
                                <p className="font-serif text-2xl font-bold text-foreground">{influencer.aiScore}</p>
                                <span className="text-xs text-foreground/50">Top 5% in category</span>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                                    <MapPin className="w-4 h-4" />
                                    Location
                                </div>
                                <p className="font-bold">{influencer.location ? formatLocation(influencer.location) : 'Global'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Collaborations */}
                <div id="collaborations" className="stagger-fade-4">
                    <div className="mb-6">
                        <h2 className="font-serif text-3xl font-bold text-foreground">Brand Collaborations</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {collaborations.length > 0 ? collaborations.map((collab: any) => (
                            <div key={collab.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                                <div className="p-6 flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary-foreground border border-secondary/30 flex-shrink-0">
                                                {collab.brandLogo}
                                            </div>
                                            <h4 className="font-bold text-foreground">{collab.brandName}</h4>
                                        </div>
                                        <span className="text-xs font-bold bg-muted px-2 py-1 rounded-md">
                                            {collab.campaignType}
                                        </span>
                                    </div>

                                    <div>
                                        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-green-400 rounded-full" style={{ width: `${collab.sentiment}%` }} />
                                        </div>
                                        <p className="text-xs text-right mt-1 font-bold text-green-600 dark:text-green-400">
                                            {collab.sentiment}% Sentiment
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 px-6 py-3 border-t border-border bg-muted/20">
                                    <div className="text-center">
                                        <p className="text-xs text-foreground/60 mb-1">Reach</p>
                                        <p className="font-bold text-foreground text-sm">{collab.reach}</p>
                                    </div>
                                    <div className="text-center border-l border-border/50">
                                        <p className="text-xs text-foreground/60 mb-1">Engagement</p>
                                        <p className="font-bold text-foreground text-sm">{collab.engagement}</p>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-span-full py-12 text-center text-foreground/50 bg-muted/10 rounded-xl border border-dashed border-border">
                                <p>No collaborations found.</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </main>
    )
}
