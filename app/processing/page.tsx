"use client";

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ProcessingLoader } from '@/components/loaders/ProcessingLoader'
import { useProcessingStatus } from '@/hooks/useProcessingStatus'

function ProcessingContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const count = searchParams.get('count') || '5'
  const { currentMessage } = useProcessingStatus(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate progress over time
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 100) // 10 seconds total

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        router.push(`/results?count=${count}`)
      }, 500)
    }
  }, [progress, router, count])

  return (
    <main className="min-h-screen bg-background flex flex-col">

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <ProcessingLoader progress={progress} />

          <h2 className="font-serif text-2xl font-bold text-foreground mb-4 animate-pulse">
            {currentMessage}
          </h2>

          <div className="w-full bg-foreground/10 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out shadow-[0_0_10px_rgba(var(--primary),0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-foreground/60 text-sm font-medium">
            {progress}% Complete
          </p>
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
