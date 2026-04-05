import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted">
            &copy; {new Date().getFullYear()} skolr.fr — 100% gratuit
          </span>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/mentions-legales" className="hover:text-encre transition-colors">
              Mentions legales
            </Link>
            <Link href="/confidentialite" className="hover:text-encre transition-colors">
              Confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
