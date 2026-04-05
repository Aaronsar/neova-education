import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} skolr.fr — 100% gratuit
          </span>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/mentions-legales" className="hover:text-gray-600 transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-gray-600 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
