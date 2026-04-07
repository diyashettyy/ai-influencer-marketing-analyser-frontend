'use client'

import Link from 'next/link'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, CheckCircle, TrendingUp, Users, History, Star, Zap } from 'lucide-react'
import { SAMPLE_INFLUENCERS } from '@/lib/constants'

function ResultsContent() {
  const searchParams = useSearchParams()
  const rawCount = Number(searchParams.get('count')) || 5
  const count = Math.max(3, Math.min(10, rawCount))
  const influencers = SAMPLE_INFLUENCERS.slice(0, count)
  const hero = influencers[0]
  const rest = influencers.slice(1)

  // Color palette that cycles for cards beyond #2 and #3
  const cardColors = [
    { bg: 'bg-secondary/8 dark:bg-secondary/12', border: 'border-secondary dark:border-secondary/60', badge: 'bg-secondary text-secondary-foreground dark:bg-secondary/90', avatar: 'bg-pastel-blue dark:bg-secondary/25 dark:border-secondary/45', accent: 'bg-secondary/5 border-secondary/20 dark:bg-secondary/12 dark:border-secondary/35', accentIcon: 'text-secondary' },
    { bg: 'bg-accent/8 dark:bg-background', border: 'border-accent dark:border-amber-300/35', badge: 'bg-accent text-accent-foreground dark:bg-amber-300/18 dark:text-amber-100 dark:border-amber-200/35', avatar: 'bg-pastel-yellow dark:bg-amber-300/16 dark:border-amber-200/35', initialText: 'dark:text-black', avatarShadow: 'dark:shadow-[4px_4px_0px_0px_rgba(226,232,240,0.55)]', accent: 'bg-accent/5 border-accent/20 dark:bg-amber-300/8 dark:border-amber-200/20', accentIcon: 'text-accent dark:text-amber-200' },
    { bg: 'bg-primary/8 dark:bg-primary/12', border: 'border-primary dark:border-primary/60', badge: 'bg-primary text-primary-foreground dark:bg-primary/85 dark:text-foreground', avatar: 'bg-pastel-pink dark:bg-primary/22 dark:border-primary/40', accent: 'bg-primary/5 border-primary/20 dark:bg-primary/10 dark:border-primary/35', accentIcon: 'text-primary' },
  ]

  const rankLabels = (rank: number) => {
    if (rank === 2) return 'Runner Up'
    if (rank === 3) return 'Strong Pick'
    return `Pick #${rank}`
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Header with grid pattern */}
      <section className="relative pt-10 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-3 origin-top-left -z-10" />

        <div className="max-w-6xl mx-auto text-center stagger-fade-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border-2 border-border mb-8 shadow-[4px_4px_0px_0px_var(--border)] hover:rotate-1 transition-transform">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-foreground uppercase tracking-wide">Analysis Complete</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Your{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-primary/20 rotate-1 scale-110 rounded-sm -z-10 blur-sm opacity-50" />
              <span className="relative bg-primary/20 px-4 py-1 skew-x-[-8deg] inline-block border-2 border-border shadow-[4px_4px_0px_0px_var(--border)]">
                Top {count}
              </span>
            </span>{' '}
            Influencers
          </h1>

          <p className="text-base sm:text-lg text-foreground/70 max-w-xl mx-auto mt-4 sm:mt-6 font-medium">
            Hand-picked by our AI for maximum campaign impact.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* ========== #1 — HERO CARD (horizontal on desktop) ========== */}
        <div className="mb-10 stagger-fade-1 group">
          <div className="relative bg-card rounded-3xl border-2 border-primary overflow-hidden shadow-[8px_8px_0px_0px_var(--border)] hover:shadow-[12px_12px_0px_0px_var(--border)] transition-all duration-300 hover:-translate-y-1">

            <div className="flex flex-col md:flex-row">

              {/* Left: Avatar + Rank */}
              <div className="relative flex flex-col items-center justify-center p-8 md:p-10 md:w-72 bg-primary/8 border-b-2 md:border-b-0 md:border-r-2 border-border/30">
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest border-2 border-foreground dark:border-primary/40 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.08)]">
                    #1 Top Pick
                  </span>
                </div>

                <div className="w-28 h-28 mt-6 md:mt-4 rounded-full border-3 border-foreground dark:border-primary/45 bg-pastel-pink dark:bg-primary/22 flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.08)] group-hover:rotate-3 transition-transform duration-300">
                  <span className="font-serif text-5xl font-bold text-foreground">
                    {hero.name.charAt(0)}
                  </span>
                </div>

                <div className="mt-4 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-100" />
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-200" />
                </div>
              </div>

              {/* Right: Details */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-1">{hero.name}</h2>
                      <p className="text-foreground/50 font-medium">{hero.handle}</p>
                    </div>
                    <span className="inline-block self-start px-4 py-1.5 bg-pastel-pink/50 dark:bg-primary/18 dark:border-primary/35 border-2 border-border rounded-full text-xs font-black text-foreground uppercase tracking-wide shadow-[2px_2px_0px_0px_var(--border)]">
                      {hero.category}
                    </span>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                    <div className="bg-background rounded-xl p-4 border-2 border-border shadow-[3px_3px_0px_0px_var(--border)] text-center group-hover:shadow-[4px_4px_0px_0px_var(--border)] transition-shadow">
                      <Users className="w-4 h-4 text-foreground/40 mx-auto mb-1" />
                      <p className="font-serif text-2xl font-bold text-foreground">{(hero.followers / 1000).toFixed(0)}K</p>
                      <p className="text-xs text-foreground/50 font-bold uppercase mt-1">Followers</p>
                    </div>
                    <div className="bg-background rounded-xl p-4 border-2 border-border shadow-[3px_3px_0px_0px_var(--border)] text-center group-hover:shadow-[4px_4px_0px_0px_var(--border)] transition-shadow">
                      <TrendingUp className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="font-serif text-2xl font-bold text-primary">{hero.engagement}</p>
                      <p className="text-xs text-foreground/50 font-bold uppercase mt-1">AI Score</p>
                    </div>
                    <div className="bg-background rounded-xl p-4 border-2 border-border shadow-[3px_3px_0px_0px_var(--border)] text-center group-hover:shadow-[4px_4px_0px_0px_var(--border)] transition-shadow">
                      <Star className="w-4 h-4 text-accent mx-auto mb-1" />
                      <p className="font-serif text-2xl font-bold text-foreground">92%</p>
                      <p className="text-xs text-foreground/50 font-bold uppercase mt-1">Engagement</p>
                    </div>
                  </div>

                  {/* AI quote */}
                  {hero.description && (
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 mb-6 -rotate-[0.3deg]">
                      <div className="flex gap-2 items-start">
                        <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground/80 italic leading-relaxed">
                          {hero.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    href={`/influencer-history/${hero.id}`}
                    className="flex-1 py-3 px-6 bg-foreground text-background rounded-xl font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-all active:translate-y-0.5 active:shadow-none text-center border-2 border-foreground"
                  >
                    View Full Profile
                  </Link>
                  <Link
                    href={`/influencer-history/${hero.id}#collaborations`}
                    className="flex items-center justify-center px-4 bg-card text-foreground border-2 border-foreground rounded-xl hover:bg-muted transition-colors"
                    title="View Collaborations"
                  >
                    <History className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== Remaining influencers — 2-column grid ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {rest.map((influencer, i) => {
            const rank = i + 2
            const colors = cardColors[i % cardColors.length]

            return (
              <div key={influencer.id} className={`stagger-fade-${Math.min(i + 2, 5)} group`}>
                <div className={`relative ${colors.bg} rounded-2xl border-2 ${colors.border} p-7 shadow-[6px_6px_0px_0px_var(--border)] hover:shadow-[8px_8px_0px_0px_var(--border)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full`}>

                  {/* Rank Badge */}
                  <div className={`absolute -top-3.5 left-6 ${colors.badge} px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] z-10`}>
                    #{rank} {rankLabels(rank)}
                  </div>

                  {/* Top section: avatar + info */}
                  <div className="flex items-center gap-5 mt-3 mb-5">
                    <div className={`w-16 h-16 rounded-full border-2 border-foreground ${colors.avatar} ${colors.avatarShadow ?? ''} flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 group-hover:rotate-3 transition-transform duration-300`}>
                      <span className={`font-serif text-2xl font-bold text-foreground ${colors.initialText ?? ''}`}>
                        {influencer.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-xl font-bold text-foreground truncate">{influencer.name}</h3>
                      <p className="text-sm text-foreground/50 font-medium">{influencer.handle}</p>
                      <span className="inline-block mt-1.5 px-3 py-0.5 bg-card border border-border rounded-full text-[10px] font-black text-foreground uppercase tracking-wider">
                        {influencer.category}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-card rounded-xl p-3 text-center border-2 border-border shadow-[2px_2px_0px_0px_var(--border)]">
                      <Users className="w-3.5 h-3.5 text-foreground/40 mx-auto mb-1" />
                      <p className="font-serif text-xl font-bold text-foreground">{(influencer.followers / 1000).toFixed(0)}K</p>
                      <p className="text-[10px] text-foreground/50 font-bold uppercase mt-0.5">Followers</p>
                    </div>
                    <div className="bg-card rounded-xl p-3 text-center border-2 border-border shadow-[2px_2px_0px_0px_var(--border)]">
                      <TrendingUp className="w-3.5 h-3.5 text-primary mx-auto mb-1" />
                      <p className="font-serif text-xl font-bold text-primary">{influencer.engagement}</p>
                      <p className="text-[10px] text-foreground/50 font-bold uppercase mt-0.5">AI Score</p>
                    </div>
                  </div>

                  {/* AI quote */}
                  {influencer.description && (
                    <div className={`${colors.accent} border rounded-xl p-3 mb-5 flex-grow`}>
                      <div className="flex gap-2 items-start">
                        <Zap className={`w-3.5 h-3.5 ${colors.accentIcon} mt-0.5 flex-shrink-0`} />
                        <p className="text-xs text-foreground/75 italic leading-relaxed">
                          {influencer.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    <Link
                      href={`/influencer-history/${influencer.id}`}
                      className="flex-1 py-2.5 px-4 bg-foreground text-background rounded-xl font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-all active:translate-y-0.5 active:shadow-none text-center border-2 border-foreground"
                    >
                      View Profile
                    </Link>
                    <Link
                      href={`/influencer-history/${influencer.id}#collaborations`}
                      className="flex items-center justify-center p-2.5 bg-card text-foreground border-2 border-foreground rounded-xl hover:bg-muted transition-colors"
                      title="View Collaborations"
                    >
                      <History className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ========== CTA ========== */}
        <div className="relative text-center bg-card rounded-3xl border-2 border-border p-12 shadow-[8px_8px_0px_0px_var(--border)] overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-2 origin-center scale-110 -z-10" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Launch?</h2>
          <p className="text-foreground/60 mb-8 max-w-lg mx-auto font-medium">
            Use these results to pick the right influencers and launch your next campaign.
          </p>
          <Link
            href="/campaign-setup"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)] transition-all border-2 border-border active:translate-y-0.5 active:shadow-none"
          >
            Start New Campaign
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </section>
    </main>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="animate-pulse font-serif text-2xl text-foreground">Loading results...</div>
      </main>
    }>
      <ResultsContent />
    </Suspense>
  )
}
