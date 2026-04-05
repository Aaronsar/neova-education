export interface Subject {
  id: string
  name: string
  slug: string
  category: 'tronc_commun' | 'specialite'
  icon: string
  color: string
  description: string
  level: 'premiere' | 'terminale' | 'both'
  sort_order: number
}

export interface Chapter {
  id: string
  subject_id: string
  name: string
  slug: string
  sort_order: number
}

export interface Annale {
  id: string
  subject_id: string
  chapter_id: string | null
  title: string
  slug: string
  year: number
  session: string
  level: 'premiere' | 'terminale'
  difficulty: number
  subject_pdf_url: string | null
  correction_pdf_url: string | null
  subject_text: string | null
  correction_text: string | null
  duration_minutes: number | null
  points: number | null
  tags: string[]
  view_count: number
}

export interface QuizQuestion {
  id: string
  subject_id: string
  chapter_id: string | null
  question: string
  options: string[]
  correct_answer: number
  explanation: string | null
  difficulty: number
}

export interface Lead {
  id: string
  email: string
  phone: string | null
  first_name: string | null
  last_name: string | null
  level: 'seconde' | 'premiere' | 'terminale' | null
  specialites: string[]
  orientation_interest: string[]
  source: string
  consent_marketing: boolean
  consent_sms: boolean
  score: number
}
