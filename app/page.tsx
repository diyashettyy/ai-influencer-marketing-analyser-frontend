'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, TrendingUp, Zap, User, Brain, BarChart3 } from 'lucide-react'
import { HowItWorksCard } from '@/components/cards/HowItWorksCard'
import { InfluencerCard } from '@/components/cards/InfluencerCard'
import { AIInsightBox } from '@/components/common/AIInsightBox'
import { SAMPLE_INFLUENCERS } from '@/lib/constants'
import React from 'react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-grid-pattern">
        {/* Fun Skewed Background Shape */}
        <div className="absolute top-0 left-0 w-full h-[120%] bg-primary/5 -skew-y-6 origin-top-left -z-10" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/20 mb-8 animate-fade-in shadow-sm hover:rotate-2 transition-transform cursor-default">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">AI-Powered Influencer Intelligence</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight animate-fade-in animation-delay-200">
            AI-Powered{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-primary/20 rotate-2 scale-110 rounded-sm -z-10 blur-sm opacity-50"></span>
              <span className="relative bg-primary/20 px-4 py-1 skew-x-[-10deg] inline-block text-foreground border-2 border-border shadow-[4px_4px_0px_0px_var(--border)]">
                Influencer Analysis
              </span>
            </span>
          </h1>
          <p className="text-base sm:text-xl font-medium text-foreground/80 max-w-2xl mx-auto text-balance leading-relaxed bg-card border border-border p-3 sm:p-4 shadow-[4px_4px_0px_0px_var(--border)] rounded-xl animate-fade-in animation-delay-400">
            Analyze influencer performance with AI.
Track engagement, audience interaction, and campaign impact in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 mt-8 justify-center animate-fade-in animation-delay-600">
            <Link
              href="/campaign-setup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--border)] transition-all border-2 border-primary"
            >
              Start Analysis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Feature Pointers */}
          <div className="mb-12 animate-fade-in animation-delay-800">
            <div className="max-w-4xl mx-auto px-3 py-1.5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2.5">
                {[
                  { label: 'Real-time Analysis', icon: <BarChart3 className="w-3.5 h-3.5" />, tone: 'bg-primary/30' },
                  { label: 'AI Insights', icon: <Brain className="w-3.5 h-3.5" />, tone: 'bg-secondary/30' },
                  { label: 'Campaign Fit Score', icon: <TrendingUp className="w-3.5 h-3.5" />, tone: 'bg-accent/30' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-1.5 text-sm sm:text-base font-semibold text-foreground/85">
                    <span className={`w-5 h-5 rounded-md border border-border flex items-center justify-center text-foreground ${item.tone}`}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Section */}
          <div className="w-full bg-card rounded-3xl border-2 border-border p-4 sm:p-8 animate-fade-in animation-delay-1000 shadow-[8px_8px_0px_0px_var(--border)] dark:shadow-[8px_8px_0px_0px_rgba(156,163,175,0.4)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="bg-accent px-3 py-1 font-bold border border-border rounded-md shadow-[2px_2px_0px_0px_var(--border)]">Demo</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">See Results Instantly</h2>
                <p className="text-foreground/80 mb-6 font-medium">
                  Upload influencer data and let our AI analyze engagement patterns, audience demographics, and campaign potential.
                </p>
                <ul className="space-y-3">
                  {['Analyze up to 10 influencers', 'Get detailed metrics', 'Receive AI recommendations'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full border border-border ${i === 0 ? 'bg-primary/20' : i === 1 ? 'bg-secondary/20' : 'bg-accent/20'
                        }`} />
                      <span className="text-sm text-foreground font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sample Influencers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SAMPLE_INFLUENCERS.slice(0, 4).map((influencer) => (
                  <div key={influencer.id} className="opacity-90 hover:opacity-100 transition-opacity">
                    <InfluencerCard {...influencer} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp />, title: 'AI Ranking', desc: 'Smart influencer ranking algorithms.' },
              { icon: <Zap />, title: 'Smart Scoring', desc: 'Engagement & relevance metrics.' },
              { icon: <User />, title: 'Visual Profiles', desc: 'Clean, data-rich influencer cards.' },
              { icon: <Brain />, title: 'AI Insights', desc: 'One-line explanation for each pick.' },
            ].map((feature, i) => (
              <div key={i} className={`group p-8 rounded-2xl bg-card border-2 border-border transition-all duration-300 hover:shadow-[8px_8px_0px_0px_var(--border)] hover:-translate-y-2 cursor-default ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-foreground mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] ${i === 0 ? 'bg-primary/30' : i === 1 ? 'bg-secondary/30' : i === 2 ? 'bg-accent/30' : 'bg-primary/30'}`}>
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60 font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20 bg-background bg-grid-pattern border-t-2 border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 stagger-fade-1">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A simple three-step process to get AI-powered insights about your influencer campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stagger-fade-2">
              <HowItWorksCard
                number={1}
                title="Upload Campaign Data"
                description="Set your campaign details, choose niche and location filters, and define the influencer count to analyze."
                icon={<Zap className="w-8 h-8" />}
              />
            </div>
            <div className="stagger-fade-3">
              <HowItWorksCard
                number={2}
                title="AI Analysis"
                description="Our AI evaluates niche match, follower engagement rate, audience quality, and overall content performance."
                icon={<Brain className="w-8 h-8" />}
              />
            </div>
            <div className="stagger-fade-4">
              <HowItWorksCard
                number={3}
                title="Get Insights"
                description="View the top 3 to 10 influencer matches, each with key metrics and a short AI summary line."
                icon={<BarChart3 className="w-8 h-8" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center uppercase tracking-tight">Why Choose The Social Animal</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="stagger-fade-1">
            <AIInsightBox
              title="Accurate Predictions"
              content="Our AI model has been trained on thousands of campaigns to provide"
              highlight="99.2% accurate ROI predictions"
            />
          </div>
          <div className="stagger-fade-2">
            <AIInsightBox
              title="Real-time Analysis"
              content="Get comprehensive insights in under"
              highlight="30 seconds"
            />
          </div>
          <div className="stagger-fade-3">
            <AIInsightBox
              title="Competitive Intelligence"
              content="Compare influencers side-by-side to find the"
              highlight="best fit for your brand"
            />
          </div>
          <div className="stagger-fade-4">
            <AIInsightBox
              title="Actionable Insights"
              content="Receive specific recommendations to maximize"
              highlight="campaign ROI"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="px-6 py-24 relative overflow-hidden bg-grid-pattern border-t-2 border-b-2 border-border">
        <div className="absolute inset-0 bg-primary/20 -skew-y-3 origin-center scale-110 -z-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Ready to Analyze Your Influencers?</h2>
          <p className="text-xl text-foreground/90 mb-10 font-bold">Start your free analysis today and get instant AI-powered insights.</p>
          <Link
            href="/campaign-setup"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-xl hover:shadow-[6px_6px_0px_0px_var(--border)] transition-all border-2 border-border active:translate-y-0.5 active:shadow-none"
          >
            Get Started Now
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="text-left">
            <p className="text-sm text-foreground/70 font-medium italic">© 2026 THE SOCIAL ANIMAL. All rights reserved.</p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end" aria-label="Footer navigation">
            <Link href="/campaign-setup" className="text-sm hover:text-primary transition-colors font-medium">
              Campaign Setup
            </Link>
            <Link href="/influencer-history" className="text-sm hover:text-primary transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors font-medium">
              About
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
