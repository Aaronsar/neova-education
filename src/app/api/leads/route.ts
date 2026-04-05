import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { email, first_name, phone, level, specialites, consent_marketing, consent_sms, source } = body

    if (!email) {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 })
    }

    // Upsert lead (update if email exists)
    const { data, error } = await supabase
      .from('leads')
      .upsert(
        {
          email,
          first_name: first_name || null,
          phone: phone || null,
          level: level || null,
          specialites: specialites || [],
          consent_marketing: consent_marketing || false,
          consent_sms: consent_sms || false,
          source: source || 'website',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'email' }
      )
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Erreur lors de l\'inscription' }, { status: 500 })
    }

    return NextResponse.json({ success: true, lead: { id: data.id } })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
