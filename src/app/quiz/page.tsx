'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { SubjectIcon } from '@/components/SubjectIcon'
import { subjectsData } from '@/lib/subjects-data'

interface QuizQ {
  id: string
  question: string
  options: string[]
  correct_answer: number
  explanation: string | null
  difficulty: number
  chapter_name?: string
}

interface Chapter {
  id: string
  name: string
  slug: string
}

export default function QuizPage() {
  const [step, setStep] = useState<'subject' | 'chapter' | 'quiz' | 'result'>('subject')
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [questions, setQuestions] = useState<QuizQ[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(false)

  // Load chapters when subject is selected
  useEffect(() => {
    if (!selectedSubject) return
    const loadChapters = async () => {
      const { data } = await supabase
        .from('chapters')
        .select('id, name, slug')
        .eq('subject_id', selectedSubject)
        .order('sort_order')
      if (data) setChapters(data)
    }
    loadChapters()
  }, [selectedSubject])

  // Load questions
  const loadQuestions = useCallback(async (chapterId: string | null) => {
    setLoading(true)
    let query = supabase
      .from('quiz_questions')
      .select('id, question, options, correct_answer, explanation, difficulty')
      .eq('subject_id', selectedSubject!)

    if (chapterId) {
      query = query.eq('chapter_id', chapterId)
    }

    const { data } = await query.order('difficulty').limit(15)
    if (data) {
      // Shuffle questions
      const shuffled = data.sort(() => Math.random() - 0.5)
      setQuestions(shuffled.map(q => ({
        ...q,
        options: q.options as string[],
      })))
    }
    setLoading(false)
    setStep('quiz')
  }, [selectedSubject])

  const handleAnswer = (index: number) => {
    if (showExplanation) return
    setSelectedAnswer(index)
    setShowExplanation(true)
    if (index === questions[currentQ].correct_answer) setScore(score + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setStep('result')
    }
  }

  const restart = () => {
    setCurrentQ(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setStep('subject')
    setSelectedSubject(null)
    setSelectedChapter(null)
    setQuestions([])
    setChapters([])
  }

  // Step 1: Choose subject
  if (step === 'subject') {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-serif text-2xl font-bold text-encre mb-1">Quiz</h1>
        <p className="text-sm text-muted mb-8">Choisis une matière pour commencer</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {subjectsData.map((subject) => (
            <button
              key={subject.slug}
              onClick={async () => {
                // Get the subject ID from Supabase
                const { data } = await supabase
                  .from('subjects')
                  .select('id')
                  .eq('slug', subject.slug)
                  .single()
                if (data) {
                  setSelectedSubject(data.id)
                  setStep('chapter')
                }
              }}
              className="group flex items-center gap-3 p-3.5 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors text-left"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-skolr-blue/10 text-skolr-blue flex-shrink-0">
                <SubjectIcon name={subject.icon} className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-encre group-hover:text-skolr-blue transition-colors">
                {subject.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Step 2: Choose chapter
  if (step === 'chapter') {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <button onClick={restart} className="text-sm text-muted hover:text-encre mb-6 block">
          &larr; Retour aux matières
        </button>
        <h1 className="font-serif text-2xl font-bold text-encre mb-1">Choisis un chapitre</h1>
        <p className="text-sm text-muted mb-6">Ou lance un quiz sur tous les chapitres</p>

        <button
          onClick={() => loadQuestions(null)}
          className="w-full mb-4 p-4 rounded-xl bg-skolr-blue text-white font-medium text-sm hover:bg-skolr-blue/90 transition-colors"
        >
          Tous les chapitres (quiz complet)
        </button>

        {chapters.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted text-sm">Aucun chapitre disponible pour cette matière pour le moment.</p>
            <button onClick={restart} className="mt-4 text-sm text-skolr-blue hover:underline">
              Choisir une autre matière
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => {
                  setSelectedChapter(chapter.id)
                  loadQuestions(chapter.id)
                }}
                className="w-full text-left p-3.5 rounded-xl bg-white border border-border hover:border-skolr-blue/30 transition-colors text-sm font-medium text-encre hover:text-skolr-blue"
              >
                {chapter.name}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Loading
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 text-skolr-blue animate-spin" />
      </div>
    )
  }

  // No questions found
  if (step === 'quiz' && questions.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-xl font-bold text-encre mb-2">Pas encore de questions</h2>
        <p className="text-sm text-muted mb-6">Ce chapitre n&apos;a pas encore de quiz disponible.</p>
        <button onClick={restart} className="px-4 py-2 text-sm font-medium bg-encre text-creme rounded-lg hover:bg-encre/90">
          Retour
        </button>
      </div>
    )
  }

  // Step 4: Results
  if (step === 'result') {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-2xl font-bold text-encre mb-2">Quiz terminé</h1>
        <div className="text-4xl font-bold text-encre my-4">
          {score} / {questions.length}
        </div>
        <p className="text-sm text-muted mb-8">
          {percentage >= 80
            ? 'Excellent, tu maîtrises bien ce sujet !'
            : percentage >= 50
            ? 'Pas mal, continue de t\'entraîner.'
            : 'Continue de réviser, tu vas progresser.'}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => {
              setCurrentQ(0)
              setSelectedAnswer(null)
              setShowExplanation(false)
              setScore(0)
              // Reshuffle
              setQuestions(q => [...q].sort(() => Math.random() - 0.5))
              setStep('quiz')
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-skolr-blue text-white rounded-lg hover:bg-skolr-blue/90"
          >
            <RotateCcw className="h-4 w-4" />
            Refaire
          </button>
          <button
            onClick={restart}
            className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-surface"
          >
            Autre matière
          </button>
          <Link
            href="/inscription"
            className="px-4 py-2 text-sm font-medium text-muted hover:text-encre"
          >
            Sauvegarder
          </Link>
        </div>
      </div>
    )
  }

  // Step 3: Quiz in progress
  const q = questions[currentQ]

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <button onClick={restart} className="text-sm text-muted hover:text-encre">
          &larr; Quitter
        </button>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-muted mb-2">
          <span>{currentQ + 1} / {questions.length}</span>
          <span>Score : {score}</span>
        </div>
        <div className="h-1 bg-surface rounded-full">
          <div
            className="h-1 bg-skolr-blue rounded-full transition-all"
            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="font-serif text-lg font-semibold text-encre mb-6">{q.question}</h2>

      <div className="space-y-2 mb-6">
        {q.options.map((option, i) => {
          let cls = 'border-border hover:border-skolr-blue/30 bg-white'
          if (showExplanation) {
            if (i === q.correct_answer) cls = 'border-success bg-success/5'
            else if (i === selectedAnswer) cls = 'border-alert bg-alert/5'
            else cls = 'border-border opacity-40 bg-white'
          }
          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={showExplanation}
              className={`w-full text-left p-3.5 rounded-xl border transition-all text-sm flex items-center gap-3 ${cls}`}
            >
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-surface text-xs font-medium text-muted">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1 text-encre">{option}</span>
              {showExplanation && i === q.correct_answer && <CheckCircle className="h-4 w-4 text-success" />}
              {showExplanation && i === selectedAnswer && i !== q.correct_answer && <XCircle className="h-4 w-4 text-alert" />}
            </button>
          )
        })}
      </div>

      {showExplanation && q.explanation && (
        <div className="bg-surface rounded-xl p-4 mb-6">
          <p className="text-sm text-body">{q.explanation}</p>
        </div>
      )}

      {showExplanation && (
        <button
          onClick={nextQuestion}
          className="w-full py-2.5 bg-encre text-creme text-sm font-medium rounded-lg hover:bg-encre/90 flex items-center justify-center gap-2"
        >
          {currentQ < questions.length - 1 ? (
            <>Suivante <ArrowRight className="h-4 w-4" /></>
          ) : 'Voir les résultats'}
        </button>
      )}
    </div>
  )
}
