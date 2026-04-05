'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-creme/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-serif text-xl font-bold tracking-tight text-encre">
            Skol<span className="text-skolr-blue">r</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/matieres" className="text-muted hover:text-encre transition-colors">
              Matieres
            </Link>
            <Link href="/annales" className="text-muted hover:text-encre transition-colors">
              Annales
            </Link>
            <Link href="/quiz" className="text-muted hover:text-encre transition-colors">
              Quiz
            </Link>
            <Link href="/orientation" className="text-muted hover:text-encre transition-colors">
              Orientation
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/inscription"
              className="text-sm font-medium px-4 py-2 bg-encre text-creme rounded-lg hover:bg-encre/90 transition-colors"
            >
              S&apos;inscrire
            </Link>
          </div>

          <button
            className="md:hidden p-1.5 text-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-creme">
          <div className="px-4 py-3 space-y-1">
            {['Matieres', 'Annales', 'Quiz', 'Orientation'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block py-2 text-sm text-body"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/inscription"
              className="block mt-2 text-center py-2 text-sm font-medium bg-encre text-creme rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
