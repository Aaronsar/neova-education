'use client'

import Link from 'next/link'
import Image from 'next/image'
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

// Unsplash images (free, no attribution required)
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80',
  studying: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&q=80',
  parents: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&h=400&fit=crop&q=80',
  orientation: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&q=80',
}

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  const specialites = subjectsData.filter((s) => s.category === 'specialite')
  const troncCommun = subjectsData.filter((s) => s.category === 'tronc_commun')

  return (
    <>
      {/* ====== HERO — 2 colonnes avec image ====== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-12 sm:pt-20 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface rounded-full text-sm text-muted mb-6">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              100% gratuit — Aucun abonnement
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-encre">
              La plateforme de{' '}
              <span className="text-skolr-blue">réussite au Bac</span>{' '}
              préférée des lycéens
            </h1>

            <p className="mt-5 text-body max-w-lg">
              Annales corrigées, quiz interactifs et corrections détaillées.
              Toutes les matières du Bac 2026.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
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
            <div className="mt-8 flex items-center gap-2 text-sm text-muted">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="font-medium text-encre">4,8/5</span>
              <span>— Recommandé par les lycéens</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={IMAGES.hero}
                alt="Étudiants qui révisent ensemble"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-border p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-skolr-blue/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-skolr-blue" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-encre">500+ annales</div>
                  <div className="text-xs text-muted">Toutes matières</div>
                </div>
              </div>
            </div>
            {/* Floating card 2 */}
            <div className="absolute -top-3 -right-3 bg-white rounded-xl border border-border p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <div className="text-xs font-medium text-encre">100% gratuit</div>
              </div>
            </div>
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

      {/* ====== PROPOSITIONS DE VALEUR avec image ====== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="hidden lg:block rounded-2xl overflow-hidden aspect-[4/3] relative">
            <Image
              src={IMAGES.studying}
              alt="Lycéenne qui étudie"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-encre mb-2">
              Tout ce qu&apos;il te faut pour réussir
            </h2>
            <p className="text-muted mb-8">Des outils conçus pour t&apos;aider à progresser</p>
            <div className="space-y-6">
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
                <div key={item.title} className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-skolr-blue/10 text-skolr-blue flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-encre mb-0.5">{item.title}</h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              { step: '1', title: 'Choisis ta matière', description: 'Sélectionne parmi les 15 matières du Bac et accède aux annales par chapitre.' },
              { step: '2', title: 'Entraîne-toi', description: 'Fais des exercices, passe des quiz et consulte les corrections détaillées.' },
              { step: '3', title: 'Progresse', description: 'Suis ta progression, identifie tes lacunes et améliore ta note.' },
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
          <div className="text-center mt-10">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-skolr-blue text-white font-medium rounded-lg hover:bg-skolr-blue/90 transition-colors"
            >
              Commencer maintenant
              <ArrowRight className="h-4 w-4" />
            </button>
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

        <h3 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">Spécialités</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {specialites.map((subject) => (
            <Link key={subject.slug} href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-3 p-3.5 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-skolr-blue/10 text-skolr-blue">
                <SubjectIcon name={subject.icon} className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-medium text-encre group-hover:text-skolr-blue transition-colors">{subject.name}</span>
            </Link>
          ))}
        </div>

        <h3 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">Tronc commun</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {troncCommun.map((subject) => (
            <Link key={subject.slug} href={`/matieres/${subject.slug}`}
              className="group flex items-center gap-3 p-3.5 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-skolr-blue/10 text-skolr-blue">
                <SubjectIcon name={subject.icon} className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-medium text-encre group-hover:text-skolr-blue transition-colors">{subject.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ====== SECTION PARENTS avec image ====== */}
      <section className="border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-encre mb-2">
                Skolr accompagne votre enfant
              </h2>
              <p className="text-muted mb-8">Des outils pour progresser en toute autonomie</p>
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, title: 'Progresser dans chaque matière', description: 'Des annales classées par chapitre pour travailler précisément les points faibles.' },
                  { icon: Users, title: 'Gagner en autonomie', description: 'Votre enfant révise à son rythme, avec des corrections détaillées et des quiz auto-évalués.' },
                  { icon: GraduationCap, title: 'Préparer sereinement le Bac', description: 'Tous les sujets des dernières années pour s\'entraîner dans les conditions réelles.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-skolr-blue/10 text-skolr-blue flex-shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-encre mb-0.5">{item.title}</h3>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block rounded-2xl overflow-hidden aspect-[4/3] relative">
              <Image
                src={IMAGES.parents}
                alt="Parent et enfant qui étudient"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
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

      {/* ====== ORIENTATION avec image ====== */}
      <section className="border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="hidden lg:block rounded-2xl overflow-hidden aspect-[4/3] relative">
              <Image
                src={IMAGES.orientation}
                alt="Étudiants en discussion sur leur orientation"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
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
