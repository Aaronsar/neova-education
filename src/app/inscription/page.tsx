'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function InscriptionPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '', firstName: '', lastName: '', phone: '', level: '',
    specialites: [] as string[], consentMarketing: false, consentSms: false,
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const specialiteOptions = [
    'Mathematiques', 'Physique-Chimie', 'SVT', 'SES', 'HGGSP',
    'NSI', 'LLCE Anglais', 'HLP', 'Sciences de l\'Ingenieur', 'Arts',
  ]

  const toggleSpecialite = (s: string) => {
    setFormData((prev) => ({
      ...prev,
      specialites: prev.specialites.includes(s) ? prev.specialites.filter((x) => x !== s) : [...prev.specialites, s],
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
          email: formData.email, first_name: formData.firstName, last_name: formData.lastName,
          phone: formData.phone || null, level: formData.level || null, specialites: formData.specialites,
          consent_marketing: formData.consentMarketing, consent_sms: formData.consentSms, source: 'inscription_page',
        }),
      })
      if (res.ok) { setSuccess(true); localStorage.setItem('skolr_lead', formData.email) }
    } catch { /* silent */ } finally { setLoading(false) }
  }

  if (success) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Bienvenue sur Skolr</h1>
        <p className="text-sm text-gray-500 mb-6">Ton compte est créé. Toutes les fonctionnalités sont disponibles.</p>
        <Link href="/matieres" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800">
          Commencer
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-1">Créer un compte</h1>
      <p className="text-sm text-gray-500 mb-8">Gratuit, pour toujours.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                <input type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:border-gray-400 outline-none text-sm" placeholder="Prénom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:border-gray-400 outline-none text-sm" placeholder="Nom" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:border-gray-400 outline-none text-sm" placeholder="ton.email@exemple.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone <span className="text-gray-400">(optionnel)</span></label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:border-gray-400 outline-none text-sm" placeholder="06 12 34 56 78" />
            </div>
            <button type="button" onClick={() => setStep(2)} disabled={!formData.email || !formData.firstName}
              className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50">
              Continuer
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Niveau *</label>
              <div className="grid grid-cols-3 gap-2">
                {['seconde', 'premiere', 'terminale'].map((lvl) => (
                  <button key={lvl} type="button" onClick={() => setFormData({ ...formData, level: lvl })}
                    className={`py-2 rounded-lg border text-sm font-medium ${formData.level === lvl ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'}`}>
                    {lvl === 'premiere' ? 'Première' : lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Spécialités</label>
              <div className="flex flex-wrap gap-1.5">
                {specialiteOptions.map((s) => (
                  <button key={s} type="button" onClick={() => toggleSpecialite(s)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${formData.specialites.includes(s) ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.consentMarketing} onChange={(e) => setFormData({ ...formData, consentMarketing: e.target.checked })} className="mt-0.5" />
                <span className="text-xs text-gray-500">J&apos;accepte de recevoir des emails de conseils et d&apos;orientation</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.consentSms} onChange={(e) => setFormData({ ...formData, consentSms: e.target.checked })} className="mt-0.5" />
                <span className="text-xs text-gray-500">J&apos;accepte de recevoir des SMS de rappels</span>
              </label>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => setStep(1)} className="px-4 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">Retour</button>
              <button type="submit" disabled={loading || !formData.level} className="flex-1 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50">
                {loading ? 'Inscription...' : 'Créer mon compte'}
              </button>
            </div>
          </>
        )}
      </form>
      <p className="text-center text-xs text-gray-400 mt-6">
        En créant un compte, tu acceptes nos <Link href="/mentions-legales" className="underline">conditions</Link> et notre <Link href="/confidentialite" className="underline">politique de confidentialité</Link>.
      </p>
    </div>
  )
}
