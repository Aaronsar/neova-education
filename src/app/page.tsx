'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  BookOpen,
  Brain,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  Zap,
} from 'lucide-react'
import { subjectsData } from '@/lib/subjects-data'
import { LeadCaptureModal } from '@/components/LeadCaptureModal'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  const specialites = subjectsData.filter((s) => s.category === 'specialite')
  const troncCommun = subjectsData.filter((s) => s.category === 'tronc_commun')

  const stats = [
    { icon: BookOpen, label: 'Annales corrigées', value: '500+' },
    { icon: Users, label: 'Matières couvertes', value: '15' },
    { icon: Brain, label: 'Corrections IA', value: 'Illimité' },
    { icon: Target, label: 'Quiz interactifs', value: '1 000+' },
  ]

  const features = [
    {
      icon: BookOpen,
      title: 'Annales complètes',
      description:
        'Tous les sujets du Bac classés par matière, chapitre et année. Corrections détaillées pas à pas.',
    },
    {
      icon: Brain,
      title: 'Correction par IA',
      description:
        'Soumets ta copie et reçois une correction personnalisée instantanée avec des conseils pour progresser.',
    },
    {
      icon: Zap,
      title: 'Quiz intelligents',
      description:
        'Des quiz qui s\'adaptent à ton niveau. Plus tu t\'entraînes, plus les questions sont ciblées.',
    },
    {
      icon: TrendingUp,
      title: 'Suivi de progression',
      description:
        'Visualise tes progrès par matière et par chapitre. Identifie tes points faibles en un coup d\'oeil.',
    },
    {
      icon: Clock,
      title: 'Simulateur d\'examen',
      description:
        'Entraîne-toi dans les conditions réelles : même durée, même format, même notation.',
    },
    {
      icon: Target,
      title: 'Orientation post-bac',
      description:
        'Découvre les parcours qui te correspondent avec notre quiz d\'orientation personnalisé.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              100% gratuit — Aucun abonnement
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Décroche ton Bac{' '}
              <span className="text-primary">sans stresser</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              +500 annales corrigées, quiz personnalisés et correction instantanée.
              La méthode utilisée par les lycéens qui réussissent.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 text-lg"
              >
                Commencer à réviser
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                href="/matieres"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-all text-lg"
              >
                Voir les matières
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matières - Spécialités */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Toutes les matières du Bac
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              Choisis ta matière et commence à t&apos;entraîner
            </p>
          </div>

          {/* Spécialités */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Spécialités
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10">
            {specialites.map((subject) => (
              <Link
                key={subject.slug}
                href={`/matieres/${subject.slug}`}
                className="group flex flex-col items-center p-5 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <span className="text-3xl mb-3">{subject.icon}</span>
                <span className="font-semibold text-gray-900 group-hover:text-primary text-center text-sm">
                  {subject.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Tronc commun */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Tronc commun
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {troncCommun.map((subject) => (
              <Link
                key={subject.slug}
                href={`/matieres/${subject.slug}`}
                className="group flex flex-col items-center p-5 bg-white rounded-xl border border-gray-200 hover:border-secondary hover:shadow-lg transition-all"
              >
                <span className="text-3xl mb-3">{subject.icon}</span>
                <span className="font-semibold text-gray-900 group-hover:text-secondary text-center text-sm">
                  {subject.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Tout ce qu&apos;il te faut pour le Bac
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              Des outils pensés pour t&apos;aider à progresser efficacement
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Choisis ta matière',
                description:
                  'Sélectionne parmi les 15 matières du Bac et accède aux annales classées par chapitre.',
              },
              {
                step: '2',
                title: 'Entraîne-toi',
                description:
                  'Fais des exercices, passe des quiz et soumets tes réponses pour une correction IA.',
              },
              {
                step: '3',
                title: 'Progresse',
                description:
                  'Suis ta progression, identifie tes lacunes et concentre tes efforts là où ça compte.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-white text-2xl font-bold rounded-full mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-indigo-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ne laisse rien au hasard
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Rejoins les lycéens qui prennent de l&apos;avance. Annales, quiz, corrections — tout est prêt pour toi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all text-lg shadow-lg"
            >
              <CheckCircle className="h-5 w-5" />
              Créer mon compte gratuit
            </button>
          </div>
          <p className="mt-4 text-indigo-200 text-sm">
            Aucune carte bancaire requise. 100% gratuit, pour toujours.
          </p>
        </div>
      </section>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trigger="homepage_cta"
      />
    </>
  )
}
