import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FileText } from 'lucide-react'
import { subjectsData } from '@/lib/subjects-data'
import { SubjectIcon } from '@/components/SubjectIcon'

export function generateStaticParams() {
  return subjectsData.map((subject) => ({ slug: subject.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const subject = subjectsData.find((s) => s.slug === slug)
  if (!subject) return { title: 'Matière non trouvée' }
  return {
    title: `${subject.name} - Annales Bac | Skolr`,
    description: `Annales corrigées de ${subject.name} au Bac. 100% gratuit.`,
  }
}

const exampleChapters: Record<string, { name: string; slug: string; annalesCount: number; quizCount: number }[]> = {
  mathematiques: [
    { name: 'Suites numériques', slug: 'suites', annalesCount: 12, quizCount: 8 },
    { name: 'Fonctions', slug: 'fonctions', annalesCount: 15, quizCount: 10 },
    { name: 'Probabilités', slug: 'probabilites', annalesCount: 10, quizCount: 7 },
    { name: 'Géométrie dans l\'espace', slug: 'geometrie-espace', annalesCount: 8, quizCount: 5 },
    { name: 'Logarithme et exponentielle', slug: 'log-exp', annalesCount: 11, quizCount: 6 },
    { name: 'Intégration', slug: 'integration', annalesCount: 9, quizCount: 5 },
  ],
  'physique-chimie': [
    { name: 'Constitution et transformation de la matière', slug: 'matiere', annalesCount: 10, quizCount: 6 },
    { name: 'Mouvement et interactions', slug: 'mouvement', annalesCount: 8, quizCount: 5 },
    { name: 'Ondes et signaux', slug: 'ondes', annalesCount: 7, quizCount: 4 },
    { name: 'L\'énergie : conversions et transferts', slug: 'energie', annalesCount: 6, quizCount: 4 },
  ],
  svt: [
    { name: 'Génétique et évolution', slug: 'genetique', annalesCount: 8, quizCount: 6 },
    { name: 'La Terre, la vie et l\'organisation du vivant', slug: 'terre-vie', annalesCount: 7, quizCount: 5 },
    { name: 'Corps humain et santé', slug: 'corps-humain', annalesCount: 6, quizCount: 4 },
    { name: 'Enjeux planétaires contemporains', slug: 'enjeux-planete', annalesCount: 5, quizCount: 3 },
  ],
  ses: [
    { name: 'Science économique', slug: 'economie', annalesCount: 10, quizCount: 7 },
    { name: 'Sociologie et science politique', slug: 'sociologie', annalesCount: 8, quizCount: 6 },
    { name: 'Regards croisés', slug: 'regards-croises', annalesCount: 5, quizCount: 3 },
  ],
  philosophie: [
    { name: 'La conscience', slug: 'conscience', annalesCount: 6, quizCount: 4 },
    { name: 'La liberté', slug: 'liberte', annalesCount: 7, quizCount: 5 },
    { name: 'Le bonheur', slug: 'bonheur', annalesCount: 5, quizCount: 3 },
    { name: 'La vérité', slug: 'verite', annalesCount: 6, quizCount: 4 },
    { name: 'La justice', slug: 'justice', annalesCount: 5, quizCount: 3 },
    { name: 'L\'État', slug: 'etat', annalesCount: 4, quizCount: 3 },
  ],
}

const exampleAnnales = [
  { year: 2025, session: 'Métropole', title: 'Sujet de Juin 2025' },
  { year: 2025, session: 'Centres étrangers', title: 'Sujet Mars 2025' },
  { year: 2024, session: 'Métropole', title: 'Sujet de Juin 2024' },
  { year: 2024, session: 'Amérique du Nord', title: 'Sujet Mai 2024' },
  { year: 2023, session: 'Métropole', title: 'Sujet de Juin 2023' },
]

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const subject = subjectsData.find((s) => s.slug === slug)

  if (!subject) notFound()

  const chapters = exampleChapters[slug] || [
    { name: 'Chapitre 1', slug: 'chapitre-1', annalesCount: 5, quizCount: 3 },
    { name: 'Chapitre 2', slug: 'chapitre-2', annalesCount: 4, quizCount: 2 },
    { name: 'Chapitre 3', slug: 'chapitre-3', annalesCount: 3, quizCount: 2 },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-muted mb-8">
        <Link href="/" className="hover:text-encre">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/matieres" className="hover:text-encre">Matières</Link>
        <span className="mx-2">/</span>
        <span className="text-encre">{subject.name}</span>
      </nav>

      <div className="flex items-center gap-3 mb-10">
        <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-skolr-blue/10 text-skolr-blue">
          <SubjectIcon name={subject.icon} className="h-5 w-5" />
        </div>
        <div>
          <h1 className="font-serif text-2xl font-bold text-encre">{subject.name}</h1>
          <p className="text-sm text-muted">{subject.description}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
            Chapitres
          </h2>
          <div className="space-y-2">
            {chapters.map((chapter, i) => (
              <Link
                key={chapter.slug}
                href={`/matieres/${slug}/${chapter.slug}`}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted w-5 text-right">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-encre group-hover:text-skolr-blue transition-colors">
                    {chapter.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span>{chapter.annalesCount} annales</span>
                  <span>{chapter.quizCount} quiz</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
            Dernières annales
          </h2>
          <div className="space-y-2">
            {exampleAnnales.map((annale, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="h-3.5 w-3.5 text-skolr-blue" />
                  <span className="text-xs font-medium text-skolr-blue">{annale.year}</span>
                </div>
                <h3 className="text-sm font-medium text-encre">{annale.title}</h3>
                <p className="text-xs text-muted">{annale.session}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
