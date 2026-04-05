'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap, CheckCircle, Sparkles } from 'lucide-react'

export default function InscriptionPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    level: '',
    specialites: [] as string[],
    consentMarketing: false,
    consentSms: false,
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const specialiteOptions = [
    'Mathématiques', 'Physique-Chimie', 'SVT', 'SES', 'HGGSP',
    'NSI', 'LLCE Anglais', 'HLP', 'Sciences de l\'Ingénieur', 'Arts',
  ]

  const toggleSpecialite = (s: string) => {
    setFormData((prev) => ({
      ...prev,
      specialites: prev.specialites.includes(s)
        ? prev.specialites.filter((x) => x !== s)
        : [...prev.specialites, s],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone || null,
          level: formData.level || null,
          specialites: formData.specialites,
          consent_marketing: formData.consentMarketing,
          consent_sms: formData.consentSms,
          source: 'inscription_page',
        }),
      })
      if (res.ok) {
        setSuccess(true)
        localStorage.setItem('neova_lead', formData.email)
      }
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Bienvenue sur Neova Education !
        </h1>
        <p className="text-gray-600 mb-8">
          Ton compte est créé. Tu as maintenant accès à toutes les annales, quiz et corrections IA gratuitement.
        </p>
        <Link
          href="/matieres"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          Commencer à réviser
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
          <GraduationCap className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Crée ton compte gratuit
        </h1>
        <p className="text-gray-600">
          Accède à toutes les annales corrigées, quiz et corrections IA
        </p>
      </div>

      {/* Avantages */}
      <div className="bg-primary/5 rounded-xl p-4 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Ton compte inclut :</span>
        </div>
        <ul className="space-y-2">
          {[
            'Annales corrigées de toutes les matières',
            'Correction personnalisée par IA',
            'Quiz interactifs illimités',
            'Suivi de ta progression',
            'Planning de révision personnalisé',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  placeholder="Prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  placeholder="Nom"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                placeholder="ton.email@exemple.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone <span className="text-gray-400">(pour recevoir des rappels)</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                placeholder="06 12 34 56 78"
              />
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!formData.email || !formData.firstName}
              className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuer
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tu es en... *
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['seconde', 'premiere', 'terminale'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setFormData({ ...formData, level: lvl })}
                    className={`py-2.5 px-4 rounded-lg border font-medium transition-colors ${
                      formData.level === lvl
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                    }`}
                  >
                    {lvl === 'premiere'
                      ? 'Première'
                      : lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tes spécialités (choisis 2 ou 3)
              </label>
              <div className="flex flex-wrap gap-2">
                {specialiteOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleSpecialite(s)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      formData.specialites.includes(s)
                        ? 'bg-primary text-white border-primary'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-primary'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consentMarketing}
                  onChange={(e) => setFormData({ ...formData, consentMarketing: e.target.checked })}
                  className="mt-1"
                />
                <span className="text-xs text-gray-600">
                  J&apos;accepte de recevoir des emails de conseils de révision et d&apos;orientation post-bac
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consentSms}
                  onChange={(e) => setFormData({ ...formData, consentSms: e.target.checked })}
                  className="mt-1"
                />
                <span className="text-xs text-gray-600">
                  J&apos;accepte de recevoir des SMS de rappels (dates d&apos;examen, conseils)
                </span>
              </label>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 text-gray-600 font-medium rounded-lg border border-gray-300 hover:bg-gray-50"
              >
                Retour
              </button>
              <button
                type="submit"
                disabled={loading || !formData.level}
                className="flex-1 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {loading ? 'Création...' : 'Créer mon compte gratuit'}
              </button>
            </div>
          </>
        )}
      </form>

      <p className="text-center text-xs text-gray-400 mt-6">
        En créant un compte, tu acceptes nos{' '}
        <Link href="/mentions-legales" className="underline">conditions d&apos;utilisation</Link>{' '}
        et notre{' '}
        <Link href="/confidentialite" className="underline">politique de confidentialité</Link>.
      </p>
    </div>
  )
}
