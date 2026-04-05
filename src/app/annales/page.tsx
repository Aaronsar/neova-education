import Link from 'next/link'
import { subjectsData } from '@/lib/subjects-data'
import { SubjectIcon } from '@/components/SubjectIcon'

export const metadata = {
  title: 'Annales du Bac corrigées - Skolr',
  description:
    'Annales corrigées du Bac pour toutes les matières. 100% gratuit.',
}

const years = [2025, 2024, 2023]

const subjectsBySlug = Object.fromEntries(subjectsData.map((s) => [s.slug, s]))

const annalesByYear: Record<number, { slug: string; count: number }[]> = {
  2025: [
    { slug: 'mathematiques', count: 6 }, { slug: 'physique-chimie', count: 5 },
    { slug: 'svt', count: 4 }, { slug: 'ses', count: 4 },
    { slug: 'philosophie', count: 3 }, { slug: 'francais', count: 4 },
    { slug: 'hggsp', count: 3 },
  ],
  2024: [
    { slug: 'mathematiques', count: 8 }, { slug: 'physique-chimie', count: 6 },
    { slug: 'svt', count: 5 }, { slug: 'ses', count: 5 },
    { slug: 'philosophie', count: 4 }, { slug: 'francais', count: 5 },
    { slug: 'hggsp', count: 4 }, { slug: 'nsi', count: 3 },
  ],
  2023: [
    { slug: 'mathematiques', count: 7 }, { slug: 'physique-chimie', count: 6 },
    { slug: 'svt', count: 5 }, { slug: 'ses', count: 4 },
    { slug: 'philosophie', count: 4 }, { slug: 'francais', count: 5 },
  ],
}

export default function AnnalesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Annales</span>
      </nav>

      <h1 className="text-2xl font-bold mb-1">Annales du Bac</h1>
      <p className="text-gray-500 text-sm mb-10">
        Tous les sujets corrigés, classés par année et par matière
      </p>

      {years.map((year) => (
        <section key={year} className="mb-10">
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            Bac {year}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {annalesByYear[year].map((item) => {
              const subject = subjectsBySlug[item.slug]
              if (!subject) return null
              return (
                <Link
                  key={item.slug}
                  href={`/matieres/${item.slug}`}
                  className="group flex items-center gap-3 p-3.5 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors"
                >
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: subject.color + '15', color: subject.color }}
                  >
                    <SubjectIcon name={subject.icon} className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {subject.name}
                    </span>
                    <p className="text-xs text-gray-400">{item.count} sujets</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
