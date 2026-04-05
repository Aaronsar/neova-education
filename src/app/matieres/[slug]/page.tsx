import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BookOpen, FileText, Brain, Zap } from 'lucide-react'
import { subjectsData } from '@/lib/subjects-data'

// Generate static params for all subjects
export function generateStaticParams() {
  return subjectsData.map((subject) => ({ slug: subject.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const subject = subjectsData.find((s) => s.slug === slug)
  if (!subject) return { title: 'Matière non trouvée' }
  return {
    title: `${subject.name} - Annales Bac corrigées | Neova Education`,
    description: `Annales corrigées de ${subject.name} au Bac. Sujets classés par chapitre, quiz interactifs et correction par IA. 100% gratuit.`,
  }
}

// Example chapters data (will come from Supabase later)
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

// Example annales data
const exampleAnnales = [
  { year: 2025, session: 'Métropole', title: 'Sujet de Juin 2025', difficulty: 3 },
  { year: 2025, session: 'Centres étrangers', title: 'Sujet Mars 2025', difficulty: 2 },
  { year: 2024, session: 'Métropole', title: 'Sujet de Juin 2024', difficulty: 3 },
  { year: 2024, session: 'Amérique du Nord', title: 'Sujet Mai 2024', difficulty: 4 },
  { year: 2023, session: 'Métropole', title: 'Sujet de Juin 2023', difficulty: 3 },
  { year: 2023, session: 'Asie', title: 'Sujet Juin 2023 Asie', difficulty: 2 },
]

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const subject = subjectsData.find((s) => s.slug === slug)

  if (!subject) {
    notFound()
  }

  const chapters = exampleChapters[slug] || [
    { name: 'Chapitre 1', slug: 'chapitre-1', annalesCount: 5, quizCount: 3 },
    { name: 'Chapitre 2', slug: 'chapitre-2', annalesCount: 4, quizCount: 2 },
    { name: 'Chapitre 3', slug: 'chapitre-3', annalesCount: 3, quizCount: 2 },
  ]

  const totalAnnales = chapters.reduce((sum, c) => sum + c.annalesCount, 0)
  const totalQuiz = chapters.reduce((sum, c) => sum + c.quizCount, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/matieres" className="hover:text-primary">Matières</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{subject.name}</span>
      </nav>

      {/* Header */}
      <div className="flex items-start gap-4 mb-10">
        <span className="text-5xl">{subject.icon}</span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {subject.name}
          </h1>
          <p className="text-gray-600 mt-1">{subject.description}</p>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              {totalAnnales} annales
            </span>
            <span className="flex items-center gap-1">
              <Zap className="h-4 w-4" />
              {totalQuiz} quiz
            </span>
            <span className="flex items-center gap-1">
              <Brain className="h-4 w-4" />
              Correction IA
            </span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chapitres */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Chapitres
          </h2>
          <div className="space-y-3">
            {chapters.map((chapter, i) => (
              <Link
                key={chapter.slug}
                href={`/matieres/${slug}/${chapter.slug}`}
                className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary text-sm font-bold rounded-lg">
                    {i + 1}
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-primary">
                    {chapter.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{chapter.annalesCount} annales</span>
                  <span>{chapter.quizCount} quiz</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar - dernières annales */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Dernières annales
          </h2>
          <div className="space-y-3">
            {exampleAnnales.map((annale, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {annale.year}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div
                        key={j}
                        className={`w-1.5 h-1.5 rounded-full ${
                          j < annale.difficulty ? 'bg-primary' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 text-sm">
                  {annale.title}
                </h3>
                <p className="text-xs text-gray-500">{annale.session}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
