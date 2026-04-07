'use client'

import Link from 'next/link'
import { ArrowRight, Menu } from 'lucide-react'
import { ModeToggle } from '@/components/ModeToggle'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  onMenuToggle?: () => void
}

export function Navbar({ onMenuToggle }: NavbarProps) {
  const pathname = usePathname()

  // Route-specific CTA logic
  let showCTA = true
  let ctaText = 'Start Analysis'
  let ctaHref = '/campaign-setup'

  if (pathname === '/campaign-setup') {
    showCTA = false
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-4 sm:px-6 py-4 bg-background/95 backdrop-blur-md border-b-2 border-foreground h-16">
      <div className="flex items-center gap-2">
        {/* Mobile hamburger menu button */}
        <button
          onClick={onMenuToggle}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border-2 border-foreground bg-card hover:bg-muted transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] active:translate-y-0.5 active:shadow-none"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>

        <Link href="/" className="flex items-center gap-2 sm:gap-3 hover-lift group">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
            {/* Side-view sheep logo */}
            <svg viewBox="0 0 150 95" className="w-full h-full text-foreground drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              {/* Body */}
              <path d="M 56 28 C 63 16, 76 16, 83 26 C 90 16, 103 17, 108 30 C 120 28, 129 37, 128 48 C 136 52, 136 63, 128 68 C 129 82, 120 90, 108 87 C 100 92, 89 91, 83 86 C 76 90, 66 90, 58 84 C 48 85, 40 80, 40 72 C 33 67, 33 56, 41 50 C 40 40, 46 31, 56 28 Z" className="fill-background" />

              {/* Neck and head */}
              <path d="M 52 41 C 47 34, 38 33, 33 38 C 28 43, 28 53, 33 59 C 38 64, 46 64, 52 57" className="fill-background" />

              {/* Top wool on head */}
              <path d="M 30 28 C 33 21, 42 20, 47 24 C 51 18, 60 20, 63 27 C 68 28, 70 35, 66 40 C 63 44, 57 45, 52 41 C 47 45, 39 44, 35 39 C 31 39, 29 33, 30 28 Z" className="fill-background" />

              {/* Ears */}
              <path d="M 31 39 L 16 34 L 31 31" className="fill-background" />
              <path d="M 60 39 L 75 34 L 60 31" className="fill-background" />

              {/* Legs */}
              <path d="M 64 72 L 73 72 L 72 95 C 72 99, 65 99, 65 95 Z" className="fill-background" />
              <path d="M 100 72 L 109 72 L 108 95 C 108 99, 101 99, 101 95 Z" className="fill-background" />
            </svg>
          </div>
          <span className="hidden sm:flex flex-row items-center whitespace-nowrap leading-none gap-1">
            <span className="font-serif font-black text-[1.2rem] tracking-[0.13em] uppercase text-foreground">THE</span>
            <span className="font-script font-bold text-[2rem] text-foreground leading-none tracking-normal">Social</span>
            <span className="font-serif font-black text-[1.2rem] tracking-[0.13em] uppercase text-foreground">ANIMAL</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ModeToggle />

        {showCTA && (
          <Link
            href={ctaHref}
            className="hidden sm:flex px-4 py-1.5 bg-foreground text-background border-2 border-foreground rounded-full font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-all active:translate-y-0.5 active:shadow-none items-center gap-1.5"
          >
            {ctaText}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </nav>
  )
}
