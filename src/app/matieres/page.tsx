import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { subjectsData } from '@/lib/subjects-data'

export const metadata = {
  title: 'Toutes les matières du Bac - Neova Education',
  description:
    'Annales corrigées et quiz pour toutes les matières du Bac : Maths, Physique-Chimie, SVT, SES, HGGSP, Philosophie, Français et plus.',
}

export default function MatieresPage() {
  const specialites = subjectsData.filter((s) => s.category === 'specialite')
  const troncCommun = subjectsData.filter((s) => s.category === 'tronc_commun')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">Matières</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Toutes les matières du Bac
        </h1>
        <p className="text-gray-600 text-lg">
          Annales corrigées, quiz et correction IA pour chaque matière
        </p>
      </div>

      {/* Spécialités */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Spécialités
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialites.map((subject) => (
            <Link
              key={subject.slug}
              href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all"
            >
              <span className="text-3xl flex-shrink-0">{subject.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary">
                  {subject.name}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  {subject.description}
                </p>
                <span className="inline-block mt-2 text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                  {subject.level === 'premiere'
                    ? 'Première'
                    : subject.level === 'terminale'
                    ? 'Terminale'
                    : '1re & Tle'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tronc commun */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-secondary" />
          Tronc commun
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {troncCommun.map((subject) => (
            <Link
              key={subject.slug}
              href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-secondary hover:shadow-md transition-all"
            >
              <span className="text-3xl flex-shrink-0">{subject.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-secondary">
                  {subject.name}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  {subject.description}
                </p>
                <span className="inline-block mt-2 text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                  {subject.level === 'premiere'
                    ? 'Première'
                    : subject.level === 'terminale'
                    ? 'Terminale'
                    : '1re & Tle'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
