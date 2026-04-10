'use client'

import Link from 'next/link'
import { ArrowLeft, Trash2 } from 'lucide-react'
import { HistoryCueCard } from '@/components/cards/HistoryCueCard'
import { INFLUENCER_HISTORY_DATA } from '@/lib/constants'

export default function InfluencerHistoryGallery() {
    const influencers = Object.values(INFLUENCER_HISTORY_DATA)

    return (
        <main className="min-h-screen bg-background bg-grid-pattern">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Header */}
                <div className="text-center mb-16 stagger-fade-1 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 -skew-y-3 -z-10 scale-110" />
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-primary mb-6 transition-all hover:-translate-x-1">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6 drop-shadow-sm">
                        Influencer Collaboration Gallery
                    </h1>
                    <p className="text-base sm:text-xl text-foreground/80 max-w-2xl mx-auto text-balance bg-card border-2 border-border p-4 sm:p-6 rounded-2xl shadow-[8px_8px_0px_0px_var(--border)] rotate-1 hover:rotate-0 transition-transform">
                        Explore our network of top-tier influencers and their brand collaboration history.
                    </p>
                </div>

                {/* Clear Data Button */}
                <div className="flex justify-end mb-6">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-destructive/10 text-destructive border border-destructive/20 font-semibold text-sm hover:bg-destructive/20 transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                        Clear Data
                    </button>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                    {influencers.map((influencer, index) => (
                        <div key={influencer.id} className={`stagger-fade-${(index % 4) + 1}`}>
                            <HistoryCueCard {...influencer} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
