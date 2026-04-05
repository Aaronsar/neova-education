import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-7 w-7 text-primary" />
              <span className="text-lg font-bold text-white">
                Neova Education
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Révise le Bac gratuitement avec des annales corrigées et une correction par IA.
            </p>
          </div>

          {/* Matières */}
          <div>
            <h3 className="text-white font-semibold mb-3">Spécialités</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/matieres/mathematiques" className="hover:text-white transition-colors">Mathématiques</Link></li>
              <li><Link href="/matieres/physique-chimie" className="hover:text-white transition-colors">Physique-Chimie</Link></li>
              <li><Link href="/matieres/svt" className="hover:text-white transition-colors">SVT</Link></li>
              <li><Link href="/matieres/ses" className="hover:text-white transition-colors">SES</Link></li>
              <li><Link href="/matieres/hggsp" className="hover:text-white transition-colors">HGGSP</Link></li>
              <li><Link href="/matieres/nsi" className="hover:text-white transition-colors">NSI</Link></li>
            </ul>
          </div>

          {/* Tronc commun */}
          <div>
            <h3 className="text-white font-semibold mb-3">Tronc commun</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/matieres/francais" className="hover:text-white transition-colors">Français</Link></li>
              <li><Link href="/matieres/philosophie" className="hover:text-white transition-colors">Philosophie</Link></li>
              <li><Link href="/matieres/histoire-geographie" className="hover:text-white transition-colors">Histoire-Géo</Link></li>
              <li><Link href="/matieres/grand-oral" className="hover:text-white transition-colors">Grand Oral</Link></li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-white font-semibold mb-3">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/annales" className="hover:text-white transition-colors">Toutes les annales</Link></li>
              <li><Link href="/quiz" className="hover:text-white transition-colors">Quiz interactifs</Link></li>
              <li><Link href="/orientation" className="hover:text-white transition-colors">Quiz d&apos;orientation</Link></li>
              <li><Link href="/inscription" className="hover:text-white transition-colors">Créer un compte</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Neova Education. 100% gratuit. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/mentions-legales" className="hover:text-gray-300">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-gray-300">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
