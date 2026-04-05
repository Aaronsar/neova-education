'use client'

import { useState } from 'react'
import { X, CheckCircle } from 'lucide-react'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  trigger?: string
}

export function LeadCaptureModal({ isOpen, onClose, trigger }: LeadCaptureModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    phone: '',
    level: '',
    specialites: [] as string[],
    consentMarketing: false,
    consentSms: false,
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  if (!isOpen) return null

  const specialiteOptions = [
    'Mathematiques', 'Physique-Chimie', 'SVT', 'SES', 'HGGSP',
    'NSI', 'LLCE Anglais', 'HLP', 'Sciences de l\'Ingenieur', 'Arts',
  ]

  const toggleSpecialite = (s: string) => {
    setFormData((prev) => ({
      ...prev,
      specialites: prev.specialites.includes(s)
        ? prev.specialites.filter((x) => x !== s)
        : [...prev.specialites, s],
    }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          first_name: formData.firstName,
          phone: formData.phone || null,
          level: formData.level || null,
          specialites: formData.specialites,
          consent_marketing: formData.consentMarketing,
          consent_sms: formData.consentSms,
          source: trigger || 'modal',
        }),
      })
      if (res.ok) {
        setSuccess(true)
        localStorage.setItem('skolr_lead', formData.email)
      }
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">
            {success ? 'Bienvenue' : 'Créer un compte'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        {success ? (
          <div className="p-6 text-center">
            <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Compte créé</h3>
            <p className="text-sm text-gray-500 mb-6">
              Tu as maintenant accès à toutes les fonctionnalités.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800"
            >
              Commencer
            </button>
          </div>
        ) : (
          <div className="p-5">
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Inscris-toi pour sauvegarder ta progression et accéder aux corrections.
                </p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:border-gray-400 outline-none text-sm"
                    placeholder="Ton prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:border-gray-400 outline-none text-sm"
                    placeholder="ton.email@exemple.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone <span className="text-gray-400">(optionnel)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:border-gray-400 outline-none text-sm"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.email}
                  className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50"
                >
                  Continuer
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Niveau</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['seconde', 'premiere', 'terminale'].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setFormData({ ...formData, level: lvl })}
                        className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                          formData.level === lvl
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {lvl === 'premiere' ? 'Première' : lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Spécialités</label>
                  <div className="flex flex-wrap gap-1.5">
                    {specialiteOptions.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleSpecialite(s)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
                          formData.specialites.includes(s)
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentMarketing}
                      onChange={(e) => setFormData({ ...formData, consentMarketing: e.target.checked })}
                      className="mt-0.5"
                    />
                    <span className="text-xs text-gray-500">
                      J&apos;accepte de recevoir des emails de conseils et d&apos;orientation
                    </span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentSms}
                      onChange={(e) => setFormData({ ...formData, consentSms: e.target.checked })}
                      className="mt-0.5"
                    />
                    <span className="text-xs text-gray-500">
                      J&apos;accepte de recevoir des SMS de rappels
                    </span>
                  </label>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    Retour
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex-1 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50"
                  >
                    {loading ? 'Inscription...' : 'Créer mon compte'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
