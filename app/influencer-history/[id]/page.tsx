'use client'

import { use } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Users, TrendingUp, ArrowUpRight, Sparkles } from 'lucide-react'
import { INFLUENCER_HISTORY_DATA } from '@/lib/constants'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function InfluencerHistoryPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const id = parseInt(resolvedParams.id)
    const influencer = INFLUENCER_HISTORY_DATA[id as keyof typeof INFLUENCER_HISTORY_DATA]

    if (!influencer) {
        return (
            <main className="min-h-screen bg-background">
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Influencer Not Found</h1>
                    <Link href="/results" className="text-primary hover:underline">Return to Results</Link>
                </div>
            </main>
        )
    }

    const collaborations = [...(influencer.collaborations || [])].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return (
        <main className="min-h-screen bg-background pb-12">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

                {/* 1. Header Section */}
                <div className="mb-12 stagger-fade-1">
                    <Link href="/results" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-foreground mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Analysis
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Influencer Profile Overview</h1>
                            <p className="text-lg text-foreground/70 max-w-2xl">
                                Historical performance insights and brand collaborations for <span className="font-semibold text-foreground">{influencer.name}</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Influencer Overview Card */}
                <div className="bg-card rounded-2xl border-2 border-foreground p-5 sm:p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] stagger-fade-2">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        {/* Profile Image / Placeholder */}
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-foreground bg-pastel-yellow flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(226,232,240,0.55)] flex-shrink-0">
                            <span className="font-serif text-4xl font-bold text-foreground dark:text-black">{influencer.name.charAt(0)}</span>
                        </div>

                        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 w-full">
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-foreground mb-1">{influencer.name}</h2>
                                <p className="text-foreground/60 font-medium mb-3">{influencer.handle}</p>
                                <div className="inline-block px-3 py-1 bg-emerald-200 border border-emerald-700 dark:bg-emerald-400/20 dark:border-emerald-300/40 rounded-full">
                                    <span className="text-xs font-bold text-emerald-950 dark:text-emerald-100 uppercase tracking-wide">{influencer.category}</span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                                    <Users className="w-4 h-4" />
                                    Total Followers
                                </div>
                                <p className="font-serif text-2xl font-bold text-foreground">{(influencer.followers / 1000).toFixed(0)}K</p>
                                <span className="text-xs text-green-600 dark:text-green-400 font-bold flex items-center gap-1">
                                </span>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                                    <Sparkles className="w-4 h-4" />
                                    AI Score
                                </div>
                                <p className="font-serif text-2xl font-bold text-foreground">{influencer.engagement}</p>
                                <span className="text-xs text-foreground/50">Top 5% in category</span>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                                    <MapPin className="w-4 h-4" />
                                    Location
                                </div>
                                <p className="font-bold text-foreground">{influencer.location || 'Global'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Performance Trend Graph Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 stagger-fade-3">
                    {/* Follower Growth Chart */}
                    <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-serif text-xl font-bold text-foreground">Follower Growth</h3>
                            <div className="px-3 py-1 bg-pastel-blue/30 rounded-full border border-border text-xs font-bold">Last 6 Months</div>
                        </div>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={influencer.growthHistory || []}>
                                    <CartesianGrid strokeDasharray="3 3" className="[&_line]:stroke-border" />
                                    <XAxis dataKey="month" className="[&_text]:fill-foreground" style={{ fontSize: '12px', fontWeight: 'bold' }} />
                                    <YAxis className="[&_text]:fill-foreground" style={{ fontSize: '12px', fontWeight: 'bold' }} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'hsl(var(--card))',
                                            border: '2px solid hsl(var(--border))',
                                            borderRadius: '12px',
                                            boxShadow: '4px 4px 0px 0px hsl(var(--border))',
                                            color: 'hsl(var(--foreground))'
                                        }}
                                        itemStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="followers"
                                        className="stroke-primary"
                                        strokeWidth={3}
                                        dot={{ fill: 'hsl(var(--pastel-blue))', stroke: 'hsl(var(--foreground))', strokeWidth: 2, r: 6 }}
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Campaign Engagement Chart (Reusing Component or Custom) */}
                    <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-serif text-xl font-bold text-foreground">Campaign Engagement</h3>
                            <div className="px-3 py-1 bg-pastel-pink/30 rounded-full border border-border text-xs font-bold">Recent Campaigns</div>
                        </div>
                        {influencer.engagementHistory ? (
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={influencer.engagementHistory}>
                                        <CartesianGrid strokeDasharray="3 3" className="[&_line]:stroke-border" />
                                        <XAxis dataKey="campaign" className="[&_text]:fill-foreground" style={{ fontSize: '12px', fontWeight: 'bold' }} />
                                        <YAxis className="[&_text]:fill-foreground" style={{ fontSize: '12px', fontWeight: 'bold' }} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: 'hsl(var(--card))',
                                                border: '2px solid hsl(var(--border))',
                                                borderRadius: '12px',
                                                boxShadow: '4px 4px 0px 0px hsl(var(--border))',
                                                color: 'hsl(var(--foreground))'
                                            }}
                                            itemStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                                        />
                                        <Line
                                            type="step"
                                            dataKey="rate"
                                            stroke="#FFC4D6"
                                            strokeWidth={4}
                                            dot={{ fill: '#2D2D2D', r: 4 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <p>No engagement data available.</p>
                        )}
                    </div>
                </div>

                {/* 4. Brand Collaboration Section */}
                <div id="collaborations" className="stagger-fade-4">
                    <div className="mb-6">
                        <h2 className="font-serif text-3xl font-bold text-foreground">Brand Collaborations</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(collaborations && collaborations.length > 0) ? collaborations.map((collab: any) => (
                            <div key={collab.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                                <div className="p-6 flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary-foreground border border-secondary/30 flex-shrink-0">
                                                {collab.brandLogo}
                                            </div>
                                            <h4 className="font-bold text-foreground">{collab.brandName}</h4>
                                        </div>
                                        <span className="text-xs font-bold bg-muted px-2 py-1 rounded-md">{collab.campaignType}</span>
                                    </div>

                                    <div>
                                        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-green-400 rounded-full" style={{ width: `${collab.sentiment}%` }}></div>
                                        </div>
                                        <p className="text-xs text-right mt-1 font-bold text-green-600 dark:text-green-400">{collab.sentiment}% Sentiment</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 px-6 py-3 border-t border-border bg-muted/20">
                                    <div className="text-center">
                                        <p className="text-xs text-foreground/60 mb-1">Reach</p>
                                        <p className="font-bold text-foreground text-sm">{collab.reach}</p>
                                    </div>
                                    <div className="text-center border-l border-border/50">
                                        <p className="text-xs text-foreground/60 mb-1">Engagement</p>
                                        <p className="font-bold text-foreground text-sm">{collab.engagement}%</p>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-span-full py-12 text-center text-foreground/50 bg-muted/10 rounded-xl border border-dashed border-border">
                                <p>No collaborations found matching filters.</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </main>
    )
}
