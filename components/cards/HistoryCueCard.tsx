'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react'

interface Collaboration {
    id: number
    brandName: string
    brandLogo: string
    year: number
    campaignType?: string
}

interface HistoryCueCardProps {
    id: number
    name: string
    handle: string
    category: string
    followers: number
    engagement: number
    collaborations: Collaboration[]
}

export function HistoryCueCard({ id, name, handle, category, followers, engagement, collaborations }: HistoryCueCardProps) {
    const [isFlipped, setIsFlipped] = useState(false)

    // Responsive name sizing based on character count
    const nameClass = name.length > 18
        ? 'font-serif text-lg font-bold text-foreground mb-1 leading-tight'
        : name.length > 12
            ? 'font-serif text-xl font-bold text-foreground mb-1 leading-tight'
            : 'font-serif text-2xl font-bold text-foreground mb-1'

    return (
        <div
            className="group perspective-1000 w-full h-[400px] cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

                {/* Front of Card */}
                <div className="absolute w-full h-full backface-hidden bg-card rounded-2xl border-2 border-border shadow-[8px_8px_0px_0px_var(--border)] overflow-hidden flex flex-col">
                    <div className="h-1/2 bg-primary flex items-center justify-center border-b-2 border-border relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        <div className="w-32 h-32 rounded-full border-2 border-border bg-card shadow-[4px_4px_0px_0px_var(--border)] flex items-center justify-center z-10">
                            <span className="font-serif text-5xl font-bold text-foreground">{name.charAt(0)}</span>
                        </div>
                    </div>

                    <div className="h-1/2 p-6 flex flex-col items-center text-center justify-between bg-card relative">
                        <div>
                            <h3 className={nameClass}>{name}</h3>
                            <p className="text-foreground/60 font-medium text-sm mb-3">{handle}</p>
                            <span className="inline-block px-3 py-1 mb-4 bg-secondary/20 border border-border/50 rounded-full text-xs font-bold text-foreground uppercase tracking-wide">
                                {category}
                            </span>
                        </div>

                        <div className="flex w-full justify-between items-center px-4 pt-4 pb-6 border-t border-border/50">
                            <div className="flex flex-col items-center">
                                <span className="text-xs text-foreground/60 font-bold uppercase">Followers</span>
                                <span className="font-bold text-lg">{(followers / 1000).toFixed(0)}K</span>
                            </div>
                            <div className="h-8 w-px bg-foreground/20"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs text-foreground/60 font-bold uppercase">AI Score</span>
                                <span className="font-bold text-lg text-primary">{engagement}</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Back of Card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-card text-foreground rounded-2xl border-2 border-border shadow-[8px_8px_0px_0px_var(--border)] p-6 flex flex-col">
                    <h3 className="font-serif text-xl font-bold text-primary mb-4 text-center border-b-2 border-primary/20 pb-2">
                        Collaboration History
                    </h3>

                    <div className="flex-grow overflow-y-auto min-h-0 pr-1 card-scrollbar">
                        {collaborations.length > 0 ? (
                            <div className="flex flex-col gap-2">
                                {collaborations.map((collab) => (
                                    <div key={collab.id} className="w-full bg-secondary/5 p-3 rounded-lg border border-border/20 flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-[10px] border border-border/30 flex-shrink-0">
                                            {collab.brandLogo}
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <p className="font-bold text-sm text-foreground truncate">{collab.brandName}</p>
                                            {collab.campaignType && <p className="text-xs text-foreground/60 mt-0.5 truncate">{collab.campaignType}</p>}
                                        </div>
                                        <Star className="w-3.5 h-3.5 text-accent fill-accent flex-shrink-0" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full bg-secondary/5 p-4 rounded-lg border border-border/20 min-h-[88px] flex items-center justify-center text-sm text-foreground/60">
                                No collaboration history available.
                            </div>
                        )}
                    </div>

                    <div className="mt-3 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <p className="text-xs text-foreground/80 italic leading-tight">
                            Selected for {category} category with strong engagement metrics and audience alignment.
                        </p>
                    </div>

                    <div className="mt-4 pt-4 border-t-2 border-border/10">
                        <Link
                            href={`/influencer-history/${id}`}
                            className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-accent-foreground rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-[4px_4px_0px_0px_var(--border)] border-2 border-border"
                        >
                            View Full Profile
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
