import Link from 'next/link'
import { FileText } from 'lucide-react'
import { subjectsData } from '@/lib/subjects-data'

export const metadata = {
  title: 'Toutes les annales du Bac corrigées - Neova Education',
  description:
    'Annales corrigées du Bac 2023, 2024, 2025 pour toutes les matières. Sujets de Métropole, centres étrangers et outre-mer. 100% gratuit.',
}

// Example annales grouped by year
const annalesByYear = [
  {
    year: 2025,
    subjects: [
      { name: 'Mathématiques', slug: 'mathematiques', icon: '📐', count: 6 },
      { name: 'Physique-Chimie', slug: 'physique-chimie', icon: '⚗️', count: 5 },
      { name: 'SVT', slug: 'svt', icon: '🧬', count: 4 },
      { name: 'SES', slug: 'ses', icon: '📊', count: 4 },
      { name: 'Philosophie', slug: 'philosophie', icon: '🤔', count: 3 },
      { name: 'Français', slug: 'francais', icon: '✍️', count: 4 },
      { name: 'HGGSP', slug: 'hggsp', icon: '🌍', count: 3 },
    ],
  },
  {
    year: 2024,
    subjects: [
      { name: 'Mathématiques', slug: 'mathematiques', icon: '📐', count: 8 },
      { name: 'Physique-Chimie', slug: 'physique-chimie', icon: '⚗️', count: 6 },
      { name: 'SVT', slug: 'svt', icon: '🧬', count: 5 },
      { name: 'SES', slug: 'ses', icon: '📊', count: 5 },
      { name: 'Philosophie', slug: 'philosophie', icon: '🤔', count: 4 },
      { name: 'Français', slug: 'francais', icon: '✍️', count: 5 },
      { name: 'HGGSP', slug: 'hggsp', icon: '🌍', count: 4 },
      { name: 'NSI', slug: 'nsi', icon: '💻', count: 3 },
    ],
  },
  {
    year: 2023,
    subjects: [
      { name: 'Mathématiques', slug: 'mathematiques', icon: '📐', count: 7 },
      { name: 'Physique-Chimie', slug: 'physique-chimie', icon: '⚗️', count: 6 },
      { name: 'SVT', slug: 'svt', icon: '🧬', count: 5 },
      { name: 'SES', slug: 'ses', icon: '📊', count: 4 },
      { name: 'Philosophie', slug: 'philosophie', icon: '🤔', count: 4 },
      { name: 'Français', slug: 'francais', icon: '✍️', count: 5 },
    ],
  },
]

export default function AnnalesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">Annales</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Annales du Bac corrigées
        </h1>
        <p className="text-gray-600 text-lg">
          Tous les sujets du Bac des dernières années, classés par matière et par session
        </p>
      </div>

      {/* Quick access by subject */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Accès rapide par matière
        </h2>
        <div className="flex flex-wrap gap-2">
          {subjectsData.map((subject) => (
            <Link
              key={subject.slug}
              href={`/matieres/${subject.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
            >
              <span>{subject.icon}</span>
              {subject.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Annales by year */}
      {annalesByYear.map((yearGroup) => (
        <section key={yearGroup.year} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Bac {yearGroup.year}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {yearGroup.subjects.map((subject) => (
              <Link
                key={subject.slug}
                href={`/matieres/${subject.slug}`}
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-sm transition-all"
              >
                <span className="text-2xl">{subject.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary text-sm">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {subject.count} sujets corrigés
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
