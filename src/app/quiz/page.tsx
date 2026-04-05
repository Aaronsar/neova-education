'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react'
import { subjectsData } from '@/lib/subjects-data'

// Example quiz questions (will come from Supabase later)
const exampleQuestions: Record<string, { question: string; options: string[]; correct: number; explanation: string }[]> = {
  mathematiques: [
    {
      question: 'Quelle est la dérivée de f(x) = x³ + 2x² - 5x + 1 ?',
      options: ['3x² + 4x - 5', '3x² + 2x - 5', 'x⁴ + 2x³ - 5x²', '3x² + 4x + 5'],
      correct: 0,
      explanation: 'On applique les règles de dérivation : (x³)\' = 3x², (2x²)\' = 4x, (-5x)\' = -5, (1)\' = 0.',
    },
    {
      question: 'La suite (Un) définie par Un+1 = 2Un - 3 avec U0 = 5 est :',
      options: ['Arithmétique', 'Géométrique', 'Ni l\'un ni l\'autre', 'Constante'],
      correct: 2,
      explanation: 'Cette suite n\'est ni arithmétique (Un+1 - Un n\'est pas constant) ni géométrique (Un+1/Un n\'est pas constant).',
    },
    {
      question: 'Quelle est la limite de (2n² + 3n) / (n² - 1) quand n tend vers +∞ ?',
      options: ['0', '1', '2', '+∞'],
      correct: 2,
      explanation: 'On divise numérateur et dénominateur par n² : (2 + 3/n) / (1 - 1/n²) → 2/1 = 2.',
    },
  ],
  'physique-chimie': [
    {
      question: 'Quelle est l\'unité de la force dans le système international ?',
      options: ['Joule', 'Newton', 'Pascal', 'Watt'],
      correct: 1,
      explanation: 'Le Newton (N) est l\'unité de force. 1 N = 1 kg·m·s⁻².',
    },
    {
      question: 'La relation entre l\'énergie cinétique et la vitesse est :',
      options: ['Ec = mv', 'Ec = ½mv²', 'Ec = mv²', 'Ec = ½mv'],
      correct: 1,
      explanation: 'L\'énergie cinétique est Ec = ½mv², elle est proportionnelle au carré de la vitesse.',
    },
  ],
  ses: [
    {
      question: 'Le PIB mesure :',
      options: [
        'La richesse totale d\'un pays',
        'La production de biens et services sur un territoire pendant un an',
        'Le niveau de vie des habitants',
        'Les échanges commerciaux internationaux',
      ],
      correct: 1,
      explanation: 'Le PIB mesure la valeur ajoutée des biens et services produits sur un territoire pendant une période donnée.',
    },
  ],
  philosophie: [
    {
      question: 'Selon Descartes, quelle est la première certitude ?',
      options: [
        'Dieu existe',
        'Le monde extérieur existe',
        'Je pense, donc je suis',
        'Les sens ne trompent jamais',
      ],
      correct: 2,
      explanation: 'Le cogito (« Je pense, donc je suis ») est la première certitude que Descartes établit dans les Méditations métaphysiques.',
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
    if (index === questions[currentQ].correct) {
      setScore(score + 1)
    }
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

  // Subject selection
  if (!selectedSubject) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
            <Zap className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Quiz interactifs
          </h1>
          <p className="text-gray-600">
            Teste tes connaissances et identifie tes points faibles
          </p>
        </div>

        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Choisis une matière
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjectsData.map((subject) => (
            <button
              key={subject.slug}
              onClick={() => setSelectedSubject(subject.slug)}
              className="group flex flex-col items-center p-5 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <span className="text-3xl mb-3">{subject.icon}</span>
              <span className="font-semibold text-gray-900 group-hover:text-primary text-center text-sm">
                {subject.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const subject = subjectsData.find((s) => s.slug === selectedSubject)!

  // Quiz finished
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-6">
          {percentage >= 80 ? '🎉' : percentage >= 50 ? '💪' : '📚'}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Quiz terminé !
        </h1>
        <p className="text-xl text-gray-700 mb-2">
          {subject.icon} {subject.name}
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-2xl font-bold text-primary my-6">
          {score} / {questions.length}
        </div>
        <p className="text-gray-600 mb-8">
          {percentage >= 80
            ? 'Excellent ! Tu maîtrises bien ce sujet.'
            : percentage >= 50
            ? 'Pas mal ! Continue de t\'entraîner pour progresser.'
            : 'Continue de réviser, tu vas progresser rapidement !'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Refaire le quiz
          </button>
          <button
            onClick={() => {
              setSelectedSubject(null)
              restart()
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Changer de matière
          </button>
          <Link
            href="/inscription"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-secondary text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
          >
            Sauvegarder mes résultats
          </Link>
        </div>
      </div>
    )
  }

  // Quiz in progress
  const q = questions[currentQ]

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => {
            setSelectedSubject(null)
            restart()
          }}
          className="text-sm text-gray-500 hover:text-primary"
        >
          ← Changer de matière
        </button>
        <span className="text-sm text-gray-500">
          {subject.icon} {subject.name}
        </span>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentQ + 1} / {questions.length}</span>
          <span>Score : {score}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-primary rounded-full transition-all"
            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl font-bold text-gray-900 mb-6">{q.question}</h2>

      <div className="space-y-3 mb-6">
        {q.options.map((option, i) => {
          let style = 'border-gray-200 hover:border-primary hover:bg-primary/5'
          if (showExplanation) {
            if (i === q.correct) {
              style = 'border-green-500 bg-green-50'
            } else if (i === selectedAnswer && i !== q.correct) {
              style = 'border-red-500 bg-red-50'
            } else {
              style = 'border-gray-200 opacity-50'
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={showExplanation}
              className={`w-full text-left p-4 rounded-xl border transition-all font-medium text-gray-700 flex items-center gap-3 ${style}`}
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-sm font-bold">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{option}</span>
              {showExplanation && i === q.correct && (
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              )}
              {showExplanation && i === selectedAnswer && i !== q.correct && (
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
              )}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-1">Explication</h3>
          <p className="text-sm text-blue-800">{q.explanation}</p>
        </div>
      )}

      {showExplanation && (
        <button
          onClick={nextQuestion}
          className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
        >
          {currentQ < questions.length - 1 ? (
            <>
              Question suivante
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            'Voir mes résultats'
          )}
        </button>
      )}
    </div>
  )
}
