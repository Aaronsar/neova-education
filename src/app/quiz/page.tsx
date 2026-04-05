'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react'
import { subjectsData } from '@/lib/subjects-data'
import { SubjectIcon } from '@/components/SubjectIcon'

const exampleQuestions: Record<string, { question: string; options: string[]; correct: number; explanation: string }[]> = {
  mathematiques: [
    {
      question: 'Quelle est la derivee de f(x) = x\u00b3 + 2x\u00b2 - 5x + 1 ?',
      options: ['3x\u00b2 + 4x - 5', '3x\u00b2 + 2x - 5', 'x\u2074 + 2x\u00b3 - 5x\u00b2', '3x\u00b2 + 4x + 5'],
      correct: 0,
      explanation: 'On applique les regles de derivation : (x\u00b3)\' = 3x\u00b2, (2x\u00b2)\' = 4x, (-5x)\' = -5, (1)\' = 0.',
    },
    {
      question: 'La suite (Un) definie par Un+1 = 2Un - 3 avec U0 = 5 est :',
      options: ['Arithmetique', 'Geometrique', 'Ni l\'un ni l\'autre', 'Constante'],
      correct: 2,
      explanation: 'Cette suite n\'est ni arithmetique (Un+1 - Un n\'est pas constant) ni geometrique (Un+1/Un n\'est pas constant).',
    },
    {
      question: 'Quelle est la limite de (2n\u00b2 + 3n) / (n\u00b2 - 1) quand n tend vers +\u221e ?',
      options: ['0', '1', '2', '+\u221e'],
      correct: 2,
      explanation: 'On divise numerateur et denominateur par n\u00b2 : (2 + 3/n) / (1 - 1/n\u00b2) \u2192 2/1 = 2.',
    },
  ],
  'physique-chimie': [
    {
      question: 'Quelle est l\'unite de la force dans le systeme international ?',
      options: ['Joule', 'Newton', 'Pascal', 'Watt'],
      correct: 1,
      explanation: 'Le Newton (N) est l\'unite de force. 1 N = 1 kg\u00b7m\u00b7s\u207b\u00b2.',
    },
    {
      question: 'La relation entre l\'energie cinetique et la vitesse est :',
      options: ['Ec = mv', 'Ec = \u00bdmv\u00b2', 'Ec = mv\u00b2', 'Ec = \u00bdmv'],
      correct: 1,
      explanation: 'L\'energie cinetique est Ec = \u00bdmv\u00b2, elle est proportionnelle au carre de la vitesse.',
    },
  ],
  ses: [
    {
      question: 'Le PIB mesure :',
      options: [
        'La richesse totale d\'un pays',
        'La production de biens et services sur un territoire pendant un an',
        'Le niveau de vie des habitants',
        'Les echanges commerciaux internationaux',
      ],
      correct: 1,
      explanation: 'Le PIB mesure la valeur ajoutee des biens et services produits sur un territoire pendant une periode donnee.',
    },
  ],
  philosophie: [
    {
      question: 'Selon Descartes, quelle est la premiere certitude ?',
      options: [
        'Dieu existe',
        'Le monde exterieur existe',
        'Je pense, donc je suis',
        'Les sens ne trompent jamais',
      ],
      correct: 2,
      explanation: 'Le cogito est la premiere certitude que Descartes etablit dans les Meditations metaphysiques.',
    },
  ],
}

export default function QuizPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const questions = selectedSubject ? (exampleQuestions[selectedSubject] || exampleQuestions.mathematiques) : []

  const handleAnswer = (index: number) => {
    if (showExplanation) return
    setSelectedAnswer(index)
    setShowExplanation(true)
    if (index === questions[currentQ].correct) setScore(score + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setFinished(true)
    }
  }

  const restart = () => {
    setCurrentQ(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setFinished(false)
  }

  if (!selectedSubject) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-2xl font-bold mb-1">Quiz</h1>
        <p className="text-gray-500 text-sm mb-8">Choisis une matiere pour commencer</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {subjectsData.map((subject) => (
            <button
              key={subject.slug}
              onClick={() => setSelectedSubject(subject.slug)}
              className="group flex items-center gap-3 p-3.5 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors text-left"
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                style={{ backgroundColor: subject.color + '15', color: subject.color }}
              >
                <SubjectIcon name={subject.icon} className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {subject.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const subject = subjectsData.find((s) => s.slug === selectedSubject)!

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-2">Quiz termine</h1>
        <p className="text-sm text-gray-500 mb-6">{subject.name}</p>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {score} / {questions.length}
        </div>
        <p className="text-sm text-gray-500 mb-8">
          {percentage >= 80
            ? 'Excellent, tu maitrises bien ce sujet.'
            : percentage >= 50
            ? 'Pas mal, continue de t\'entrainer.'
            : 'Continue de reviser, tu vas progresser.'}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          >
            <RotateCcw className="h-4 w-4" />
            Refaire
          </button>
          <button
            onClick={() => { setSelectedSubject(null); restart() }}
            className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Autre matiere
          </button>
          <Link
            href="/inscription"
            className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Sauvegarder
          </Link>
        </div>
      </div>
    )
  }

  const q = questions[currentQ]

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => { setSelectedSubject(null); restart() }}
          className="text-sm text-gray-400 hover:text-gray-600"
        >
          &larr; Matières
        </button>
        <span className="text-sm text-gray-400">{subject.name}</span>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>{currentQ + 1} / {questions.length}</span>
          <span>Score : {score}</span>
        </div>
        <div className="h-1 bg-gray-100 rounded-full">
          <div
            className="h-1 bg-gray-900 rounded-full transition-all"
            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-6">{q.question}</h2>

      <div className="space-y-2 mb-6">
        {q.options.map((option, i) => {
          let cls = 'border-gray-100 hover:border-gray-300'
          if (showExplanation) {
            if (i === q.correct) cls = 'border-green-500 bg-green-50'
            else if (i === selectedAnswer) cls = 'border-red-400 bg-red-50'
            else cls = 'border-gray-100 opacity-40'
          }
          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={showExplanation}
              className={`w-full text-left p-3.5 rounded-lg border transition-all text-sm flex items-center gap-3 ${cls}`}
            >
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 text-xs font-medium text-gray-500">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1 text-gray-700">{option}</span>
              {showExplanation && i === q.correct && <CheckCircle className="h-4 w-4 text-green-600" />}
              {showExplanation && i === selectedAnswer && i !== q.correct && <XCircle className="h-4 w-4 text-red-500" />}
            </button>
          )
        })}
      </div>

      {showExplanation && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600">{q.explanation}</p>
        </div>
      )}

      {showExplanation && (
        <button
          onClick={nextQuestion}
          className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
        >
          {currentQ < questions.length - 1 ? (
            <>Suivante <ArrowRight className="h-4 w-4" /></>
          ) : 'Resultats'}
        </button>
      )}
    </div>
  )
}
