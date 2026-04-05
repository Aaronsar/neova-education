'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted mb-4 tracking-wide">
            100% gratuit — Aucun abonnement
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-encre">
            Les annales du Bac,
            <br />
            <span className="text-muted">corrigees et classees.</span>
          </h1>
          <p className="mt-5 text-body max-w-lg">
            Toutes les matieres, tous les sujets. Quiz, corrections detaillees et suivi de progression.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-encre text-creme text-sm font-medium rounded-lg hover:bg-encre/90 transition-colors"
            >
              Commencer
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/matieres"
              className="text-sm font-medium text-muted hover:text-encre transition-colors"
            >
              Voir les matieres
            </Link>
          </div>
        </div>
      </section>

      {/* Matieres */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
          Specialites
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {specialites.map((subject) => (
            <Link
              key={subject.slug}
              href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-3 p-3.5 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors"
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{ backgroundColor: subject.color + '15', color: subject.color }}
              >
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
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{ backgroundColor: subject.color + '15', color: subject.color }}
              >
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
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-md">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-encre">
              Cree ton compte gratuit
            </h2>
            <p className="mt-2 text-muted text-sm">
              Sauvegarde ta progression, accede aux corrections et recois un planning de revision personnalise.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-skolr-blue text-white text-sm font-medium rounded-lg hover:bg-skolr-blue/90 transition-colors"
            >
              S&apos;inscrire gratuitement
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
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
