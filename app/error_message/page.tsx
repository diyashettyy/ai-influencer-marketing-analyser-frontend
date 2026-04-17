'use client'

import { SearchX, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ErrorMessagePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-lg text-center animate-fade-in">
        {/* Icon */}
        <div className="mx-auto mb-8 w-28 h-28 rounded-full border-2 border-border bg-card shadow-[6px_6px_0px_0px_var(--border)] flex items-center justify-center">
          <SearchX className="w-12 h-12 text-primary" />
        </div>

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
          No Influencer Match Found
        </h1>

        {/* Description */}
        <div className="rounded-2xl border-2 border-border bg-card p-6 shadow-[4px_4px_0px_0px_var(--border)] mb-8">
          <p className="text-foreground/70 font-medium leading-relaxed">
            We couldn&apos;t find any influencers matching your campaign criteria.
            Try adjusting your filters or broadening your search parameters.
          </p>
        </div>

        {/* Bouncing dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="h-2.5 w-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.2s]" />
          <span className="h-2.5 w-2.5 rounded-full bg-secondary animate-bounce [animation-delay:-0.1s]" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent animate-bounce" />
        </div>

        {/* Back button */}
        <Link
          href="/campaign-setup"
          className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-foreground text-background px-6 py-3 font-bold text-sm shadow-[4px_4px_0px_0px_var(--border)] hover:shadow-[6px_6px_0px_0px_var(--border)] hover:-translate-y-0.5 transition-all active:translate-y-0.5 active:shadow-none"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Campaign Setup
        </Link>
      </div>
    </main>
  )
}
