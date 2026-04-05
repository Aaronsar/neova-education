import Link from 'next/link'
import { subjectsData } from '@/lib/subjects-data'
import { SubjectIcon } from '@/components/SubjectIcon'

export const metadata = {
  title: 'Matieres - Skolr',
  description: 'Annales corrigees et quiz pour toutes les matieres du Bac. 100% gratuit.',
}

export default function MatieresPage() {
  const specialites = subjectsData.filter((s) => s.category === 'specialite')
  const troncCommun = subjectsData.filter((s) => s.category === 'tronc_commun')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-muted mb-8">
        <Link href="/" className="hover:text-encre">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-encre">Matieres</span>
      </nav>

      <h1 className="font-serif text-2xl font-bold text-encre mb-1">Matieres</h1>
      <p className="text-sm text-muted mb-10">Annales corrigees et quiz pour chaque matiere du Bac</p>

      <section className="mb-10">
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">Specialites</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {specialites.map((subject) => (
            <Link
              key={subject.slug}
              href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                style={{ backgroundColor: subject.color + '15', color: subject.color }}
              >
                <SubjectIcon name={subject.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-encre group-hover:text-skolr-blue transition-colors">
                  {subject.name}
                </h3>
                <p className="text-xs text-muted mt-0.5">{subject.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">Tronc commun</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {troncCommun.map((subject) => (
            <Link
              key={subject.slug}
              href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                style={{ backgroundColor: subject.color + '15', color: subject.color }}
              >
                <SubjectIcon name={subject.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-encre group-hover:text-skolr-blue transition-colors">
                  {subject.name}
                </h3>
                <p className="text-xs text-muted mt-0.5">{subject.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
