'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Zap,
  TrendingUp,
  Star,
  GraduationCap,
  Shield,
  Compass,
  Users,
  Clock,
  CheckCircle,
} from 'lucide-react'
import { subjectsData } from '@/lib/subjects-data'
import { SubjectIcon } from '@/components/SubjectIcon'
import { LeadCaptureModal } from '@/components/LeadCaptureModal'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  const specialites = subjectsData.filter((s) => s.category === 'specialite')
  const troncCommun = subjectsData.filter((s) => s.category === 'tronc_commun')

  return (
    <>
      {/* ====== HERO ====== */}
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
            Annales corrigées, quiz interactifs et corrections détaillées.
            Toutes les matières du Bac 2026.
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

      {/* ====== CHIFFRES CLÉS ====== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '500+', label: 'Annales corrigées', icon: BookOpen },
            { value: '15', label: 'Matières couvertes', icon: GraduationCap },
            { value: '1 000+', label: 'Questions de quiz', icon: Zap },
            { value: '100%', label: 'Gratuit, pour toujours', icon: Shield },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-xl bg-white border border-border text-center">
              <stat.icon className="h-5 w-5 text-skolr-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-encre">{stat.value}</div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== PROPOSITIONS DE VALEUR ====== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-encre">
            Tout ce qu&apos;il te faut pour réussir
          </h2>
          <p className="text-muted mt-2">Des outils conçus pour t&apos;aider à progresser efficacement</p>
        </div>
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
              description: 'Teste tes connaissances avec des quiz adaptés à ton niveau. Explications à chaque réponse.',
            },
            {
              icon: TrendingUp,
              title: 'Suivi de progression',
              description: 'Identifie tes points faibles et concentre tes efforts là où ça compte vraiment.',
            },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl bg-white border border-border">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-skolr-blue/10 text-skolr-blue mb-4">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-encre mb-1">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== COMMENT ÇA MARCHE ====== */}
      <section className="border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-encre">
              Comment ça marche ?
            </h2>
            <p className="text-muted mt-2">En 3 étapes, commence à réviser</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                step: '1',
                title: 'Choisis ta matière',
                description: 'Sélectionne parmi les 15 matières du Bac et accède aux annales par chapitre.',
              },
              {
                step: '2',
                title: 'Entraîne-toi',
                description: 'Fais des exercices, passe des quiz et consulte les corrections détaillées.',
              },
              {
                step: '3',
                title: 'Progresse',
                description: 'Suis ta progression, identifie tes lacunes et améliore ta note.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-skolr-blue text-white text-lg font-bold rounded-full mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-encre mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MATIÈRES ====== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-encre">
            Toutes les matières du Bac
          </h2>
          <p className="text-muted mt-2">Spécialités et tronc commun — Première et Terminale</p>
        </div>

        <h3 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
          Spécialités
        </h3>
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

        <h3 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
          Tronc commun
        </h3>
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

      {/* ====== SECTION PARENTS ====== */}
      <section className="border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-encre">
              Skolr accompagne votre enfant
            </h2>
            <p className="text-muted mt-2">Des outils pour progresser en toute autonomie</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: TrendingUp,
                title: 'Progresser dans chaque matière',
                description:
                  'Des annales classées par chapitre pour travailler précisément les points faibles.',
              },
              {
                icon: Users,
                title: 'Gagner en autonomie',
                description:
                  'Votre enfant révise à son rythme, avec des corrections détaillées et des quiz auto-évalués.',
              },
              {
                icon: GraduationCap,
                title: 'Préparer sereinement le Bac',
                description:
                  'Tous les sujets des dernières années pour s\'entraîner dans les conditions réelles.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-creme border border-border">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-skolr-blue/10 text-skolr-blue mb-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-encre mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CRÉDIBILITÉ ====== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-muted">
          {[
            { icon: Shield, text: 'Conforme aux programmes officiels' },
            { icon: BookOpen, text: 'Sujets de l\'Éducation nationale' },
            { icon: Clock, text: 'Mis à jour chaque année' },
            { icon: CheckCircle, text: '100% gratuit, sans publicité' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm">
              <item.icon className="h-4 w-4 text-skolr-blue" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ====== ORIENTATION ====== */}
      <section className="border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-skolr-blue/10 text-skolr-blue mb-4">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-encre mb-3">
                Trouve ta voie après le Bac
              </h2>
              <p className="text-body mb-4">
                Santé, commerce, ingénieur, droit... Notre quiz d&apos;orientation
                t&apos;aide à découvrir les parcours qui te correspondent en 5 questions.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Quiz personnalisé en 2 minutes',
                  'Parcours recommandés selon ton profil',
                  'Guide d\'orientation gratuit par email',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-body">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/orientation"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-encre text-creme font-medium rounded-lg hover:bg-encre/90 transition-colors text-sm"
              >
                Faire le quiz d&apos;orientation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="hidden sm:flex items-center justify-center">
              <div className="w-full max-w-xs p-6 rounded-2xl bg-creme border border-border">
                <div className="text-xs font-medium text-skolr-blue uppercase tracking-widest mb-3">
                  Résultat du quiz
                </div>
                <h3 className="font-serif text-xl font-bold text-encre mb-2">Profil Santé</h3>
                <p className="text-sm text-muted mb-4">
                  Tu es attiré(e) par les métiers de la santé. Voici les parcours recommandés :
                </p>
                <div className="space-y-2">
                  {['PASS', 'LAS', 'IFSI', 'Kinésithérapie'].map((p) => (
                    <div key={p} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-border text-sm text-encre">
                      <CheckCircle className="h-3.5 w-3.5 text-success" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA FINAL ====== */}
      <section className="bg-encre">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-creme mb-3">
            Prêt(e) à décrocher ton Bac ?
          </h2>
          <p className="text-creme/60 max-w-md mx-auto mb-8">
            Rejoins les lycéens qui révisent gratuitement avec Skolr.
            Crée ton compte en 30 secondes.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-skolr-blue text-white font-medium rounded-lg hover:bg-skolr-blue/90 transition-colors"
          >
            Créer mon compte gratuit
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-creme/40 text-xs">
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
