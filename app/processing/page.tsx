"use client";

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { ProcessingLoader } from '@/components/loaders/ProcessingLoader'
import { useProcessingStatus } from '@/hooks/useProcessingStatus'

function ProcessingContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const count = searchParams.get('count') || '3'
  const { currentMessage } = useProcessingStatus(true)
  const [progress, setProgress] = useState(0)

  const handleBackToCampaign = () => {
    router.push('/campaign-setup?restore=1')
  }

  useEffect(() => {
    const start = Date.now()

    fetch("http://127.0.0.1:5000/results")
      .then(res => res.json())
      .then(() => {
        const end = Date.now()
        const timeTaken = end - start

        console.log("API Time:", timeTaken, "ms")

        // instantly complete progress
        setProgress(80)

        // small delay for smooth UI transition
        setTimeout(() => {
          router.push(`/results?count=${count}`)
        }, 300)
      })
      .catch((err) => {
        console.error("Error fetching results:", err)
        setProgress(80)

        setTimeout(() => {
          router.push(`/results?count=${count}`)
        }, 300)
      })
  }, [router, count])

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="mb-8 flex justify-center">
            <button
              type="button"
              onClick={handleBackToCampaign}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Create Campaign
            </button>
          </div>

          <ProcessingLoader progress={progress} />

          <h2 className="font-serif text-2xl font-bold text-foreground mb-4 animate-pulse">
            {currentMessage}
          </h2>

          <div className="rounded-2xl border border-border/50 bg-card/70 px-5 py-4 shadow-sm backdrop-blur-sm">
            <p className="text-sm font-medium text-foreground/70">
              Building your shortlist and preparing the final recommendations.
            </p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.2s]" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary animate-bounce [animation-delay:-0.1s]" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function ProcessingPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="animate-pulse font-serif text-2xl text-foreground">Loading...</div>
      </main>
    }>
      <ProcessingContent />
    </Suspense>
  )
}