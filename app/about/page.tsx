'use client'

import React from 'react'
import Link from 'next/link'
import {
    Brain,
    Target,
    User,
    Zap,
    Code,
    Layout,
    Server,
    Cloud,
    Github,
    Linkedin,
    Globe,
    ArrowRight,
    TrendingUp,
    CheckCircle2
} from 'lucide-react'

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary selection:text-white">

            {/* Section 1: Hero Hook (Mission Statement) */}
            <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 overflow-hidden bg-grid-pattern">
                <div className="absolute inset-0 bg-primary/10 -skew-y-3 origin-top-left -z-10" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/20 mb-8 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-medium text-foreground/80">Next Gen Influencer Marketing</span>
                    </div>

                    <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 sm:mb-8 tracking-tight leading-tight">
                        Smarter Influencer Discovery <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Powered by AI</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
                        {[
                            { title: 'Vision', text: 'Helping brands instantly connect with the most relevant influencers using data-driven intelligence.' },
                            { title: 'Problem', text: 'Existing influencer tools are cluttered, slow, and overwhelming for quick campaign decisions.' },
                            { title: 'Solution', text: 'A focused AI system that analyzes engagement and relevance to recommend only the top 3 best-fit influencers.' }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/20 hover:bg-card/90 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md group">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-foreground/70 leading-relaxed text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Core Features & Capabilities */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Core Capabilities</h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto">Engineered to simplify the complex landscape of influencer analytics.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <TrendingUp />, title: 'AI Ranking', desc: 'Smart influencer ranking algorithms.' },
                            { icon: <Zap />, title: 'Smart Scoring', desc: 'Engagement & relevance metrics.' },
                            { icon: <User />, title: 'Visual Profiles', desc: 'Clean, data-rich influencer cards.' },
                            { icon: <Brain />, title: 'AI Insights', desc: 'One-line explanation for each pick.' },
                        ].map((feature, i) => (
                            <div key={i} className={`group p-8 rounded-2xl bg-card border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] hover:shadow-[8px_8px_0px_0px_var(--border)] transition-all duration-300 hover:-translate-y-2 cursor-default ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0`}>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-foreground mb-6 shadow-[2px_2px_0px_0px_var(--border)] border-2 border-border transition-transform group-hover:scale-110 ${i === 0 ? 'bg-primary/30' : i === 1 ? 'bg-secondary/30' : i === 2 ? 'bg-accent/30' : 'bg-primary/30'}`}>
                                    {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                                </div>
                                <h3 className="font-serif font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                                <p className="text-sm text-foreground/70 font-medium">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Tech Stack Showcase */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern" />
                <div className="absolute inset-0 bg-background/86" />
                <div className="absolute top-0 right-0 w-56 h-56 bg-primary/8 rounded-full blur-3xl -z-0" />
                <div className="absolute bottom-0 left-12 w-64 h-64 bg-secondary/8 rounded-full blur-3xl -z-0" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">Built With Modern Tech</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Code />, name: 'Frontend', tool: 'React / Next.js' },
                            { icon: <Layout />, name: 'Styling', tool: 'Tailwind CSS' },
                            { icon: <Server />, name: 'Data', tool: 'API Integration' },
                            { icon: <Cloud />, name: 'Deploy', tool: 'Cloud Hosted' },
                        ].map((stack, i) => (
                            <div key={i} className={`flex flex-col items-center justify-center p-5 sm:p-8 bg-card rounded-2xl shadow-[4px_4px_0px_0px_var(--border)] border-2 border-border hover:border-primary transition-all group hover:-translate-y-1 ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}>
                                <div className={`p-3 rounded-full text-foreground mb-4 group-hover:rotate-12 transition-transform border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] ${i % 2 === 0 ? 'bg-primary/30' : 'bg-secondary/30'}`}>
                                    {React.cloneElement(stack.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                                </div>
                                <span className="text-xs font-bold tracking-wider text-foreground/40 uppercase mb-1">{stack.name}</span>
                                <span className="font-serif font-bold text-lg text-foreground">{stack.tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: The Journey */}
            <section className="relative py-24 px-6 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern" />
                <div className="absolute inset-0 bg-background/86" />
                <div className="absolute top-0 right-0 w-56 h-56 bg-primary/8 rounded-full blur-3xl -z-0" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/8 rounded-full blur-3xl -z-0" />
                <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">The Journey</h2>
                        <div className="space-y-8">
                            {[
                                { title: 'Challenge', desc: 'Overcoming performance bottlenecks in real-time data visualization.' },
                                { title: 'Adaptation', desc: 'Scaling UI components for a seamless experience across all devices.' },
                                { title: 'Refinement', desc: 'Iterating on data presentation to ensure immediate readability.' },
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 flex-shrink-0 aspect-square rounded-full bg-secondary text-foreground flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-border/10">
                                            {i + 1}
                                        </div>
                                        {i !== 2 && <div className="w-0.5 h-full bg-secondary/30 my-2" />}
                                    </div>
                                    <div className="pb-8">
                                        <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                                        <p className="text-foreground/70 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl border-2 border-border bg-card/90 p-10 shadow-[6px_6px_0px_0px_var(--border)]">
                        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Design Philosophy</h3>
                            <ul className="space-y-4">
                                {[
                                    'Minimal UI that reduces cognitive load',
                                    'High readability with curated typography',
                                    'Fully responsive for modern workflows',
                                    'Smooth micro-interactions for delight'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Meet the Team */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Meet the Builders</h2>
                        <p className="text-foreground text-opacity-70 max-w-2xl mx-auto">The minds behind the AI.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
                        {[
                            {
                                name: 'Ananya Achar',
                                role: 'Backend Developer',
                                theme: 'bg-primary/20',
                                desc: 'Building clean and maintainable logic for AI models that helps analyse engagement and sentiments to choose influencers.',
                                links: {
                                    github: 'https://github.com/aananyaachar',
                                    linkedin: 'https://www.linkedin.com/in/ananyaa-achar'
                                }
                            },
                            {
                                name: 'Heerali G',
                                role: 'Backend Developer',
                                theme: 'bg-secondary/20',
                                desc: 'Passionate about building seamless AI-powered web applications by integrating frontend and backend systems. Combining expertise in API integration and data handling to create efficient, scalable, and user-friendly web experiences.',
                                links: {
                                    github: 'https://github.com/Heerali-G',
                                    linkedin: 'https://www.linkedin.com/in/heerali-g-9712562b3'
                                }
                            },
                            {
                                name: 'Diya',
                                role: 'Frontend Developer',
                                theme: 'bg-accent/20',
                                desc: 'Passionate about building clean, user-friendly AI-powered web experiences. Merging technical expertise with design thinking to create impactful digital solutions.',
                                links: {
                                    github: 'https://github.com/diyashettyy',
                                    linkedin: 'https://www.linkedin.com/in/shetty-diya/',
                                    website: 'https://diya-shetty-portfolio.vercel.app/'
                                }
                            },
                            {
                                name: 'Preethi',
                                role: 'Backend Developer',
                                theme: 'bg-primary/20',
                                desc: 'Building clean, well-structured datasets and scalable databases that power AI models and smart digital solutions.',
                                links: {
                                    github: 'https://github.com/preethi27-m',
                                    linkedin: 'https://linkedin.com/in/preethi-m-043050376'
                                }
                            },
                            {
                                name: 'Inchara Y N',
                                role: 'Backend Developer',
                                theme: 'bg-secondary/20',
                                desc: 'Building clean and maintainable AI logic that analyzes sentiment using VADER and BERT to choose influencers.',
                                links: {
                                    github: 'https://github.com/incharayn',
                                    linkedin: 'https://www.linkedin.com/in/incharayn/'
                                }
                            },
                        ].map((member, i) => (
                            <div key={i} className={`p-6 rounded-2xl border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] ${member.theme} hover:-translate-y-1 transition-transform flex flex-col items-center text-center h-full`}>
                                <div className="w-20 h-20 bg-card border-2 border-border rounded-full flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_var(--border)]">
                                    <User className="w-8 h-8 text-foreground" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-foreground mb-1">{member.name}</h3>
                                <p className="text-xs font-bold text-foreground/80 uppercase tracking-wide mb-3">{member.role}</p>

                                <p className="text-foreground/90 mb-4 text-xs leading-relaxed flex-grow">
                                    {member.desc}
                                </p>

                                <div className="flex gap-2 mt-auto">
                                    {member.links?.github && (
                                        <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-card rounded-full border border-foreground hover:bg-foreground hover:text-background transition-colors" title="GitHub">
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                    {member.links?.linkedin && (
                                        <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-card rounded-full border border-foreground hover:bg-blue-600 hover:text-white hover:border-transparent transition-colors" title="LinkedIn">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    )}
                                    {member.links?.website && (
                                        <a href={member.links.website} target="_blank" rel="noopener noreferrer" className="p-2 bg-card rounded-full border border-foreground hover:bg-foreground hover:text-background transition-colors" title="Portfolio">
                                            <Globe className="w-4 h-4" />
                                        </a>
                                    )}

                                    {/* Placeholder icons for other members if needed for spacing */}
                                    {Object.keys(member.links || {}).length === 0 && (
                                        <div className="h-8"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7: Call to Action */}
            <section className="py-24 px-6 bg-background text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
                        Explore the <span className="text-primary">AI Influencer</span> Experience
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            View Dashboard
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="https://github.com/diyashettyy/ai-influencer-marketing-analyser"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-card border-2 border-foreground text-foreground rounded-full font-bold text-lg hover:bg-background transition-colors"
                        >
                            Visit GitHub Repo
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
