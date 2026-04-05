'use client'

import { useState } from 'react'
import { Compass, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'

const questions = [
  {
    id: 'matiere_preferee',
    question: 'Quelle matière te passionne le plus ?',
    options: [
      { label: 'Sciences (Maths, Physique, SVT)', value: 'sciences' },
      { label: 'Économie et société (SES, HGGSP)', value: 'eco_social' },
      { label: 'Lettres et langues (Français, LLCE, HLP)', value: 'lettres' },
      { label: 'Informatique et technologie (NSI, SI)', value: 'tech' },
    ],
  },
  {
    id: 'metier_reve',
    question: 'Quel domaine t\'attire le plus ?',
    options: [
      { label: 'Santé (médecin, kiné, pharmacien, infirmier...)', value: 'sante' },
      { label: 'Commerce et management', value: 'commerce' },
      { label: 'Ingénierie et sciences', value: 'ingenieur' },
      { label: 'Droit et sciences politiques', value: 'droit' },
      { label: 'Art, design et communication', value: 'art' },
      { label: 'Je ne sais pas encore', value: 'indecis' },
    ],
  },
  {
    id: 'duree_etudes',
    question: 'Combien de temps veux-tu étudier après le bac ?',
    options: [
      { label: '2-3 ans (BTS, BUT, Licence)', value: 'court' },
      { label: '5 ans (Master, École)', value: 'moyen' },
      { label: '8 ans et plus (Médecine, Doctorat)', value: 'long' },
      { label: 'Je ne sais pas', value: 'indecis' },
    ],
  },
  {
    id: 'style_apprentissage',
    question: 'Comment préfères-tu apprendre ?',
    options: [
      { label: 'Cours magistraux + beaucoup de travail perso', value: 'autonome' },
      { label: 'Encadrement strict, petits groupes', value: 'encadre' },
      { label: 'Alternance théorie et pratique', value: 'pratique' },
      { label: 'Projets et travaux de groupe', value: 'collaboratif' },
    ],
  },
  {
    id: 'importance',
    question: 'Qu\'est-ce qui est le plus important pour toi ?',
    options: [
      { label: 'Un bon salaire à la sortie', value: 'salaire' },
      { label: 'Un métier qui a du sens', value: 'sens' },
      { label: 'La sécurité de l\'emploi', value: 'securite' },
      { label: 'La créativité et la liberté', value: 'liberte' },
    ],
  },
]

interface ProfileResult {
  title: string
  description: string
  parcours: string[]
  tags: string[]
}

function computeProfile(responses: Record<string, string>): ProfileResult {
  const metier = responses.metier_reve

  if (metier === 'sante') {
    return {
      title: 'Profil Santé',
      description: 'Tu es attiré(e) par les métiers de la santé. C\'est un parcours exigeant mais très gratifiant !',
      parcours: [
        'PASS (Parcours Accès Santé Spécifique)',
        'LAS (Licence Accès Santé)',
        'IFSI (École d\'infirmier)',
        'École de kinésithérapie',
      ],
      tags: ['sante'],
    }
  }

  if (metier === 'commerce') {
    return {
      title: 'Profil Commerce & Management',
      description: 'Tu as le profil pour les écoles de commerce et le management. De nombreuses portes s\'ouvrent à toi !',
      parcours: [
        'Prépa commerce (ECG)',
        'École de commerce post-bac',
        'Licence Économie-Gestion',
        'BUT GEA / TC',
      ],
      tags: ['commerce'],
    }
  }

  if (metier === 'ingenieur') {
    return {
      title: 'Profil Ingénieur & Sciences',
      description: 'Passionné(e) par les sciences et la tech ? Le parcours ingénieur est fait pour toi.',
      parcours: [
        'Prépa scientifique (MPSI, PCSI, PTSI)',
        'École d\'ingénieur post-bac',
        'Licence Maths / Physique / Info',
        'BUT Informatique / GEII',
      ],
      tags: ['ingenieur'],
    }
  }

  if (metier === 'droit') {
    return {
      title: 'Profil Droit & Sciences Politiques',
      description: 'Le droit et la politique te passionnent ? Excellent choix avec de multiples débouchés.',
      parcours: [
        'Licence de Droit',
        'Sciences Po (IEP)',
        'Double licence Droit-Éco / Droit-Langues',
        'Prépa D1 / D2',
      ],
      tags: ['droit'],
    }
  }

  return {
    title: 'Profil Polyvalent',
    description: 'Tu as un profil ouvert avec de multiples possibilités. Prends le temps d\'explorer !',
    parcours: [
      'Licence universitaire (large choix)',
      'BTS / BUT selon tes centres d\'intérêt',
      'Classe prépa',
      'Année de césure exploratoire',
    ],
    tags: ['autre'],
  }
}

export default function OrientationPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [leadSaved, setLeadSaved] = useState(false)

  const handleAnswer = (value: string) => {
    const newResponses = { ...responses, [questions[currentQuestion].id]: value }
    setResponses(newResponses)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleSaveLead = async () => {
    if (!email) return
    try {
      const profile = computeProfile(responses)
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          phone: phone || null,
          orientation_interest: profile.tags,
          consent_marketing: true,
          source: 'orientation_quiz',
        }),
      })
      localStorage.setItem('neova_lead', email)
      setLeadSaved(true)
    } catch {
      // silent
    }
  }

  const profile = showResult ? computeProfile(responses) : null

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
          <Compass className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Quiz d&apos;orientation
        </h1>
        <p className="text-gray-600">
          Découvre les parcours post-bac qui te correspondent en 5 questions
        </p>
      </div>

      {!showResult ? (
        <>
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>Question {currentQuestion + 1} / {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-primary rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all font-medium text-gray-700 hover:text-primary"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {currentQuestion > 0 && (
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="flex items-center gap-1 text-gray-500 hover:text-primary text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Question précédente
            </button>
          )}
        </>
      ) : (
        /* Results */
        <div>
          <div className="bg-gradient-to-br from-primary/10 to-indigo-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {profile!.title}
            </h2>
            <p className="text-gray-700 mb-6">{profile!.description}</p>

            <h3 className="font-semibold text-gray-900 mb-3">
              Parcours recommandés :
            </h3>
            <ul className="space-y-2">
              {profile!.parcours.map((p) => (
                <li key={p} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Lead capture pour recevoir plus d'infos */}
          {!showLeadForm && !leadSaved && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">
                Reçois un guide personnalisé
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                On t&apos;envoie un guide détaillé sur ton profil avec des conseils pour Parcoursup, les dates clés et les pièges à éviter.
              </p>
              <button
                onClick={() => setShowLeadForm(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Recevoir mon guide gratuit
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {showLeadForm && !leadSaved && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Reçois ton guide orientation
              </h3>
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ton email *"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ton téléphone (optionnel)"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                />
                <button
                  onClick={handleSaveLead}
                  disabled={!email}
                  className="w-full py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  Envoyer mon guide
                </button>
              </div>
            </div>
          )}

          {leadSaved && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Guide envoyé !</h3>
              <p className="text-sm text-gray-600">
                Consulte ta boîte mail pour recevoir ton guide d&apos;orientation personnalisé.
              </p>
            </div>
          )}

          {/* Restart */}
          <div className="text-center mt-6">
            <button
              onClick={() => {
                setCurrentQuestion(0)
                setResponses({})
                setShowResult(false)
                setShowLeadForm(false)
                setLeadSaved(false)
              }}
              className="text-sm text-gray-500 hover:text-primary underline"
            >
              Refaire le quiz
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
