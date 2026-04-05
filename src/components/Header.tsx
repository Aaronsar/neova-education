'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">
              Neova <span className="text-primary">Education</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/matieres"
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              Matières
            </Link>
            <Link
              href="/annales"
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              Annales
            </Link>
            <Link
              href="/quiz"
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              Quiz
            </Link>
            <Link
              href="/orientation"
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              Orientation
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/inscription"
              className="inline-flex items-center px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
            >
              S&apos;inscrire gratuitement
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/matieres"
              className="block text-gray-700 font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              Matières
            </Link>
            <Link
              href="/annales"
              className="block text-gray-700 font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              Annales
            </Link>
            <Link
              href="/quiz"
              className="block text-gray-700 font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              Quiz
            </Link>
            <Link
              href="/orientation"
              className="block text-gray-700 font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              Orientation
            </Link>
            <Link
              href="/inscription"
              className="block w-full text-center px-5 py-2.5 bg-primary text-white font-semibold rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              S&apos;inscrire gratuitement
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
