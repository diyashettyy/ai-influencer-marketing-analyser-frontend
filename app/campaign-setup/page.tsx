'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight, ChevronDown, Search, X } from 'lucide-react'
import { CAMPAIGN_SETUP_DRAFT_STORAGE_KEY } from '@/lib/constants'

type CampaignDraft = {
  brandName: string
  campaignName: string
  campaignBudget: string
  ageGroup: string
  location: string
  niche: string
  influencerCount: number
  description: string
}

const ALL_LOCATIONS = [
  'Afghanistan','Africa','Alaska','Albania','Algeria','Angola','Argentina',
  'Arizona','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahrain',
  'Bangladesh','Barbados','Belgium','Belize','Benin','Bolivia',
  'Bosnia and Herzegovina','Brazil','Brunei','Bulgaria','Burkina Faso',
  'Cambodia','Cameroon','Canada','Chile','China','Colombia','Comoros',
  'Congo','Costa Rica',"Côte d'Ivoire",'Croatia','Cuba','Cyprus',
  'Czech Republic','Denmark','Dominica','Dominican Republic','Ecuador',
  'Egypt','El Salvador','Estonia','Ethiopia','Fiji','Finland','France',
  'Gambia','Georgia','Germany','Ghana','Greece','Greenland','Guatemala',
  'Guinea','Guyana','Haiti','Holland','Honduras','Hong Kong','Hungary',
  'Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy',
  'Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kosovo','Kuwait','Laos',
  'Latvia','Lebanon','Lesotho','Liberia','Libya','Lithuania','Macedonia',
  'Malawi','Malaysia','Maldives','Mali','Malta','Mauritius','Mexico',
  'Miami','Midlands','Moldova','Monaco','Mongolia','Montenegro','Morocco',
  'Mozambique','Myanmar','Nepal','Netherlands','New Zealand','Nicaragua',
  'North Macedonia','Norway','Oman','Pakistan','Palestine','Panama',
  'Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico','Qatar',
  'Romania','Russia','Rwanda','Samoa','Saudi Arabia','Scotland','Senegal',
  'Serbia','Sierra Leone','Singapore','Slovakia','Slovenia','Somalia',
  'South Africa','South Korea','South Sudan','Spain','Sri Lanka','St Lucia', 
  'Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tanzania',
  'Thailand','Tibet','Tonga','Traid','Trinidad','Trinidad and Tobago','Tunisia',
  'Turkey','UAE','Uganda','UK','Ukraine','Uruguay','USA','Uzbekistan',
  'Vanuatu','Vietnam','Wales','Yemen','Zambia','Zimbabwe',
]

// ── stored with regular hyphen so split('-') works correctly ─────────────────
const ALL_AGE_GROUPS = [
  '18-30','18-34','18-35','18-40','20-40','22-35','24-40','25-40','28-40',
]

const ALL_NICHES = [
  'Beauty','Family','Fashion','Fitness','Food','Interior','Pet','Travel',
]

function SearchableDropdown({
  value,
  onChange,
  items,
  placeholder = 'Select...',
  displayFormatter,
}: {
  value: string
  onChange: (v: string) => void
  items: string[]
  placeholder?: string
  displayFormatter?: (v: string) => string
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const normalizedQuery = query.trim().toLowerCase()
  const filtered = normalizedQuery
    ? items.filter((item) => item.toLowerCase().startsWith(normalizedQuery))
    : items

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (item: string) => {
    onChange(item)
    setOpen(false)
    setQuery('')
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange('')
    setQuery('')
  }

  const handleOpen = () => {
    setOpen(true)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const searchLabel = placeholder.toLowerCase().replace('select ', '')
  const fmt = displayFormatter ?? ((v: string) => v)

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={handleOpen}
        className={`w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background font-sans text-left flex items-center justify-between gap-2 transition-all ${
          value ? 'text-foreground' : 'text-foreground/50'
        }`}
      >
        <span className="truncate">{value ? fmt(value) : placeholder}</span>
        <span className="flex items-center gap-1 shrink-0">
          {value && (
            <X
              className="w-3.5 h-3.5 text-foreground/40 hover:text-foreground transition-colors"
              onClick={handleClear}
            />
          )}
          <ChevronDown
            className={`w-4 h-4 text-foreground/50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-card border border-border/60 rounded-xl shadow-xl overflow-hidden">
          <div className="px-3 pt-3 pb-2 border-b border-border/30">
            <div className="flex items-center gap-2 px-3 py-2 bg-background rounded-lg border border-border/40">
              <Search className="w-3.5 h-3.5 text-foreground/40 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onWheel={(e)=>e.currentTarget.blur()}
                placeholder={`Search ${searchLabel}...`}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/30 focus:outline-none"
              />
              {query && (
                <button type="button" onClick={() => setQuery('')}>
                  <X className="w-3 h-3 text-foreground/40 hover:text-foreground" />
                </button>
              )}
            </div>
          </div>
          <ul className="max-h-52 overflow-y-auto py-1">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left px-4 py-2 text-sm font-sans transition-colors hover:bg-primary/10 hover:text-primary ${
                      item === value ? 'bg-primary/15 text-primary font-semibold' : 'text-foreground'
                    }`}
                  >
                    {fmt(item)}
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-sm text-foreground/40 text-center">
                No results for &ldquo;{query}&rdquo;
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function CampaignSetupPage() {
  const router = useRouter()
  const [brandName, setBrandName] = useState('')
  const [campaignName, setCampaignName] = useState('')
  const [campaignBudget, setCampaignBudget] = useState('')
  const [budgetError, setBudgetError] = useState(false)
  const [ageGroup, setAgeGroup] = useState('')
  const [location, setLocation] = useState('')
  const [niche, setNiche] = useState('')
  const [influencerCount, setInfluencerCount] = useState(3)
  const [description, setDescription] = useState('')

  const descriptionWordCount = description.trim().split(/\s+/).filter(Boolean).length
  const descriptionValid = description.trim().length >= 20 && descriptionWordCount >= 4

  const canProceed =
    brandName.trim() &&
    campaignName.trim() &&
    campaignBudget.trim() &&
    descriptionValid &&
    ageGroup.trim() &&
    location.trim() &&
    niche.trim()

  const handleStartAnalysis = async () => {
    try {
      // ── age parsing: values are stored as "18-40" (hyphen) ───────────
      let age_min = 18
      let age_max = 40

      if (ageGroup.includes('-')) {
        const parts = ageGroup.split('-')
        age_min = Number(parts[0])
        age_max = Number(parts[1])
      }

      const formData = {
        brand_name    : brandName,
        campaign_name : campaignName,
        description   : description,
        category      : niche.toLowerCase(),
        location      : location,
        age_min       : Number(age_min),
        age_max       : Number(age_max),
        budget        : campaignBudget ? Number(campaignBudget) : null,
        top_n         : Number(influencerCount),
      }

      // ── fixed: always 127.0.0.1 not localhost ─────────────────────────
      const res = await fetch('http://127.0.0.1:5000/rank', {
        method  : 'POST',
        headers : { 'Content-Type': 'application/json' },
        body    : JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.error || data.errors?.join('\n'))
        return
      }

      // ── store results from POST so results page never needs to re-fetch ─
      localStorage.setItem('latest_campaign_results', JSON.stringify(data.results))
      localStorage.setItem('latest_result_id', data.result_id)

      window.location.href = `/processing?count=${influencerCount}`

    } catch (error) {
      console.error(error)
      alert('Something went wrong')
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-sm">
            <span className="text-foreground/60">Setup Campaign</span>
            <ChevronRight className="w-4 h-4 text-foreground/40" />
            <span className="text-foreground font-semibold">Step 1 of 3</span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Create Campaign</h1>
          <p className="text-lg text-foreground/70">
            Select influencers and set up your campaign for AI analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border/20 p-8 mb-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Campaign Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Brand Name</label>
                  <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} placeholder="e.g., Nike"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-foreground/30" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Campaign Name</label>
                  <input type="text" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} placeholder="e.g., Summer Product Launch"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-foreground/30" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Targeted Age Group</label>
                    <SearchableDropdown
                      value={ageGroup}
                      onChange={setAgeGroup}
                      items={ALL_AGE_GROUPS}
                      placeholder="Select Age Group"
                      displayFormatter={(v) => v.replace('-', '–')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Geographical Location</label>
                    <SearchableDropdown value={location} onChange={setLocation} items={ALL_LOCATIONS} placeholder="Select Location" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Influencer Niche</label>
                  <SearchableDropdown value={niche} onChange={setNiche} items={ALL_NICHES} placeholder="Select Niche" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Number of Influencers to Display</label>
                  <div className="flex items-center gap-4">
                    <input type="range" min={3} max={10} value={influencerCount}
                      onChange={(e) => setInfluencerCount(Number(e.target.value))}
                      className="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-primary bg-foreground/10" />
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-lg border-2 border-border shadow-[2px_2px_0px_0px_var(--border)]">
                      {influencerCount}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/50 mt-1.5">Choose between 3 and 10 influencers</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="block text-sm font-semibold text-foreground">Campaign Description</label>
                    <span className={`text-xs font-medium ${descriptionValid ? 'text-green-500' : 'text-foreground/50'}`}>
                      {description.trim().length} chars · {descriptionWordCount} word{descriptionWordCount !== 1 ? 's' : ''}
                      {description.trim().length > 0 && !descriptionValid && ' · min 20 chars & 4 words'}
                    </span>
                  </div>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your campaign goals, deliverables, and key messaging..."
                    rows={4} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-foreground/30 resize-none" />
                  {description.trim().length > 0 && !descriptionValid && (
                    <p className="text-xs text-red-400 mt-1.5">Please enter at least 20 characters and 4 words.</p>
                  )}
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="block text-sm font-semibold text-foreground">Campaign Budget (USD)</label>
                    <span className="text-xs text-foreground/50 font-medium">max $5,000,000</span>
                  </div>
                  <input type="number" value={campaignBudget} min={0} max={5000000} required
                    onChange={(e) => {
                      const raw = e.target.value
                      const num = parseFloat(raw)
                      if (raw === '' || isNaN(num)) { setBudgetError(false); setCampaignBudget('') }
                      else if (num > 5000000) { setBudgetError(true); setCampaignBudget('5000000') }
                      else { setBudgetError(false); setCampaignBudget(raw) }
                    }}
                    placeholder="e.g., 5000"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-foreground/30 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${budgetError ? 'border-amber-400' : 'border-border'}`} />
                  {budgetError && <p className="text-xs text-amber-500 mt-1.5">Budget capped at $5,000,000. Value has been adjusted.</p>}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl border border-border/20 p-8 sticky top-20 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">Campaign Summary</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Brand Name</p>
                  <p className="font-semibold text-foreground">{brandName || 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Campaign Name</p>
                  <p className="font-semibold text-foreground">{campaignName || 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Budget</p>
                  <p className="font-semibold text-foreground">{campaignBudget ? `$${parseInt(campaignBudget).toLocaleString()}` : 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Targeting</p>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground text-sm"><span className="opacity-70">Age: </span>{ageGroup ? ageGroup.replace('-', '–') : '-'}</p>
                    <p className="font-medium text-foreground text-sm"><span className="opacity-70">Loc: </span>{location || '-'}</p>
                    <p className="font-medium text-foreground text-sm"><span className="opacity-70">Niche: </span>{niche || '-'}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Influencers</p>
                  <p className="font-semibold text-foreground">{influencerCount}</p>
                </div>
                <button type="button" onClick={handleStartAnalysis} disabled={!canProceed}
                  className={`w-full py-3 px-2 rounded-lg font-bold text-center transition-all text-sm sm:text-base flex items-center justify-center ${canProceed
                    ? 'bg-primary text-primary-foreground hover-lift active:scale-95 cursor-pointer shadow-md'
                    : 'bg-muted text-muted-foreground cursor-not-allowed border border-border/10'}`}>
                  Start Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
