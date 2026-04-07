'use client'

import { Brain, Sparkles, Zap, Search } from 'lucide-react'

interface ProcessingLoaderProps {
    progress: number
}

export function ProcessingLoader({ progress }: ProcessingLoaderProps) {
    // Determine which icon to show based on progress
    const getIcon = () => {
        if (progress < 30) return <Search className="w-12 h-12 text-foreground animate-bounce" />
        if (progress < 60) return <Brain className="w-12 h-12 text-foreground animate-pulse" />
        if (progress < 90) return <Zap className="w-12 h-12 text-foreground animate-pulse" />
        return <Sparkles className="w-12 h-12 text-foreground animate-spin-slow" />
    }

    return (
        <div className="relative flex items-center justify-center w-32 h-32 mx-auto">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-4 border-foreground border-opacity-20 rounded-full animate-spin-slow" />

            {/* Inner progress ring */}
            <div
                className="absolute inset-0 border-4 border-foreground border-l-transparent border-r-transparent rounded-full animate-spin"
                style={{ opacity: 1 }}
            />

            {/* Center Icon */}
            <div className="relative z-10 bg-pastel-yellow dark:bg-card dark:border-primary/50 border-2 border-foreground p-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
                {getIcon()}
            </div>

            {/* Floating particles */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-pastel-pink dark:bg-accent/50 border border-foreground dark:border-accent/50 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-4 left-2 w-3 h-3 bg-pastel-blue dark:bg-primary/50 border border-foreground dark:border-primary/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        </div>
    )
}
