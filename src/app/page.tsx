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
      {/* Hero — minimal */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-gray-400 mb-4">
            100% gratuit — Aucun abonnement
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Les annales du Bac,
            <br />
            <span className="text-gray-400">corrigées et classées.</span>
          </h1>
          <p className="mt-5 text-lg text-gray-500 max-w-lg">
            Toutes les matières, tous les sujets. Quiz, corrections détaillées et suivi de progression.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Commencer
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/matieres"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Voir les matières
            </Link>
          </div>
        </div>
      </section>

      {/* Matières */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Spécialités
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {specialites.map((subject) => (
            <Link
              key={subject.slug}
              href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-3 p-3.5 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors"
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{ backgroundColor: subject.color + '15', color: subject.color }}
              >
                <SubjectIcon name={subject.icon} className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {subject.name}
              </span>
            </Link>
          ))}
        </div>

        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Tronc commun
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {troncCommun.map((subject) => (
            <Link
              key={subject.slug}
              href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-3 p-3.5 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors"
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{ backgroundColor: subject.color + '15', color: subject.color }}
              >
                <SubjectIcon name={subject.icon} className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {subject.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA — simple */}
      <section className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold tracking-tight">
              Crée ton compte gratuit
            </h2>
            <p className="mt-2 text-gray-500 text-sm">
              Sauvegarde ta progression, accède aux corrections et reçois un planning de révision personnalisé.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
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
