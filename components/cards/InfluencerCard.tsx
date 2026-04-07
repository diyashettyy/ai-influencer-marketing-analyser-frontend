import Link from 'next/link'
import { TrendingUp, Users, History } from 'lucide-react'
import { HOVER_LIFT_CLASSES } from '@/lib/animations'

interface InfluencerCardProps {
  id: number
  name: string
  handle: string
  followers: number
  engagement: number
  category: string
  description?: string
}

export function InfluencerCard({ id, name, handle, followers, engagement, category, description }: Omit<InfluencerCardProps, 'avatar'>) {
  return (
    <div className={`flex flex-col p-6 bg-card rounded-2xl border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(156,163,175,0.5)] hover:-translate-y-1 transition-all h-full`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 bg-pastel-yellow dark:bg-accent/20 dark:border-accent/40 border-2 border-foreground rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]">
            <Users className="w-5 h-5 text-foreground" />
          </div>
          <div className="min-w-0">
            <h3 className="font-serif font-bold text-foreground truncate">{name}</h3>
            <p className="text-sm text-foreground text-opacity-60 truncate">{handle}</p>
          </div>
        </div>
      </div>

      <div className="mb-4 inline-block px-3 py-1 bg-pastel-green dark:bg-emerald-400/15 dark:border-emerald-300/30 border border-foreground rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.08)]">
        <span className="text-xs font-bold text-foreground uppercase tracking-wide">{category}</span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground text-opacity-70">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Followers</span>
          </div>
          <span className="font-semibold text-foreground">{(followers / 1000).toFixed(0)}K</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground text-opacity-70">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm">AI Score</span>
          </div>
          <span className="font-semibold text-primary">{engagement.toFixed(2)}</span>
        </div>
      </div>

      {description && (
        <div className="mt-auto pt-4 border-t border-border border-opacity-50">
          <p className="text-xs text-foreground text-opacity-80 italic leading-relaxed">
            "{description}"
          </p>
        </div>
      )}

      <div className="flex gap-2 mt-4">
        <Link
          href={`/influencer-history/${id}`}
          className="flex-1 py-2 px-4 bg-foreground text-background border-2 border-foreground rounded-lg font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-all active:translate-y-0.5 active:shadow-none text-center"
        >
          View Details
        </Link>
        <Link
          href={`/influencer-history/${id}#collaborations`}
          className="flex items-center justify-center p-2 bg-card text-foreground border-2 border-foreground rounded-lg hover:bg-muted transition-colors"
          title="View History"
        >
          <History className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}
