'use client'

import { useEffect, useState } from 'react'
import { PROCESSING_MESSAGES } from '@/lib/constants'

export function useProcessingStatus(isProcessing: boolean) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    if (!isProcessing) return

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % PROCESSING_MESSAGES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isProcessing])

  return {
    currentMessage: PROCESSING_MESSAGES[currentMessageIndex],
    messageIndex: currentMessageIndex,
    totalMessages: PROCESSING_MESSAGES.length,
  }
}
