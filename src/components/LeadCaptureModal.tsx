'use client'

import { useState } from 'react'
import { X, Sparkles } from 'lucide-react'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  trigger?: string // what triggered the modal
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
    'Mathématiques',
    'Physique-Chimie',
    'SVT',
    'SES',
    'HGGSP',
    'NSI',
    'LLCE Anglais',
    'HLP',
    'Sciences de l\'Ingénieur',
    'Arts',
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
        // Store in localStorage so we don't ask again
        localStorage.setItem('neova_lead', formData.email)
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-gray-900">
              {success ? 'Bienvenue !' : 'Crée ton compte gratuit'}
            </h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        {success ? (
          <div className="p-6 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ton compte est créé !
            </h3>
            <p className="text-gray-600 mb-6">
              Tu as maintenant accès à toutes les corrections IA et quiz personnalisés.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Commencer à réviser
            </button>
          </div>
        ) : (
          <div className="p-5">
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Inscris-toi pour accéder aux corrections IA, sauvegarder ta progression et recevoir un planning de révision personnalisé.
                </p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    placeholder="Ton prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
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
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.email}
                  className="w-full py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuer
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tu es en...
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['seconde', 'premiere', 'terminale'].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setFormData({ ...formData, level: lvl })}
                        className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
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
                    Tes spécialités
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {specialiteOptions.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleSpecialite(s)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
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

                <div className="space-y-2 pt-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentMarketing}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          consentMarketing: e.target.checked,
                        })
                      }
                      className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-xs text-gray-600">
                      J&apos;accepte de recevoir des emails de conseils et d&apos;orientation
                    </span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentSms}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          consentSms: e.target.checked,
                        })
                      }
                      className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-xs text-gray-600">
                      J&apos;accepte de recevoir des SMS (rappels d&apos;examen, conseils)
                    </span>
                  </label>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 text-gray-600 font-medium rounded-lg border border-gray-300 hover:bg-gray-50"
                  >
                    Retour
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex-1 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Inscription...' : 'Créer mon compte gratuit'}
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
