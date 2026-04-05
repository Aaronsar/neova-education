'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, BookOpen, Zap, TrendingUp, Star } from 'lucide-react'
import { subjectsData } from '@/lib/subjects-data'
import { SubjectIcon } from '@/components/SubjectIcon'
import { LeadCaptureModal } from '@/components/LeadCaptureModal'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  const specialites = subjectsData.filter((s) => s.category === 'specialite')
  const troncCommun = subjectsData.filter((s) => s.category === 'tronc_commun')

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 sm:pt-24 sm:pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface rounded-full text-sm text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            100% gratuit — Aucun abonnement
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-encre">
            La plateforme de
            <br />
            <span className="text-skolr-blue">réussite au Bac</span> préférée
            <br />
            des lycéens
          </h1>

          <p className="mt-6 text-lg text-body max-w-xl mx-auto">
            Annales corrigées, quiz interactifs et corrections détaillées. Toutes les matières du Bac 2026.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-skolr-blue text-white font-medium rounded-lg hover:bg-skolr-blue/90 transition-colors"
            >
              Commencer gratuitement
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/matieres"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border text-encre font-medium rounded-lg hover:border-skolr-blue/30 transition-colors"
            >
              Voir les matières
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="font-medium text-encre">4,8/5</span>
            <span>— Recommandé par les lycéens</span>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: BookOpen,
              title: 'Toutes les annales',
              description: '15 matières, sujets classés par chapitre et année. Corrections détaillées pas à pas.',
            },
            {
              icon: Zap,
              title: 'Quiz interactifs',
              description: 'Teste tes connaissances avec des quiz adaptés. Explications à chaque réponse.',
            },
            {
              icon: TrendingUp,
              title: 'Suivi de progression',
              description: 'Identifie tes points faibles et concentre tes efforts là où ça compte.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-white border border-border"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-skolr-blue/10 text-skolr-blue mb-4">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-encre mb-1">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Matières */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
          Spécialités
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {specialites.map((subject) => (
            <Link
              key={subject.slug}
              href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-3 p-3.5 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-skolr-blue/10 text-skolr-blue">
                <SubjectIcon name={subject.icon} className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-medium text-encre group-hover:text-skolr-blue transition-colors">
                {subject.name}
              </span>
            </Link>
          ))}
        </div>

        <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
          Tronc commun
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {troncCommun.map((subject) => (
            <Link
              key={subject.slug}
              href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-3 p-3.5 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-skolr-blue/10 text-skolr-blue">
                <SubjectIcon name={subject.icon} className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-medium text-encre group-hover:text-skolr-blue transition-colors">
                {subject.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-encre mb-3">
            Prêt(e) à décrocher ton Bac ?
          </h2>
          <p className="text-muted max-w-md mx-auto mb-6">
            Rejoins les lycéens qui révisent gratuitement avec Skolr. Crée ton compte en 30 secondes.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-encre text-creme font-medium rounded-lg hover:bg-encre/90 transition-colors"
          >
            Créer mon compte gratuit
            <ArrowRight className="h-4 w-4" />
          </button>
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
