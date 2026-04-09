import { NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Missing GEMINI_API_KEY' },
      { status: 500 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { messages } = (body ?? {}) as { messages?: ChatMessage[] }
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: 'Missing messages' }, { status: 400 })
  }

  const userHistory = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-20)

  const lastUser = [...userHistory].reverse().find((m) => m.role === 'user')?.content?.trim()
  if (!lastUser) {
    return NextResponse.json({ error: 'Missing user message' }, { status: 400 })
  }

  const systemPrompt =
    "You are Midwife Joy — a warm, practical, evidence-aware midwifery mentor. " +
    "Help with antenatal, intrapartum, and postnatal care, documentation, communication, and career growth. " +
    "Be supportive and concise. When giving clinical guidance, include safety-netting and encourage following local protocols. " +
    "Do not mention being an AI unless asked."

  const ai = new GoogleGenAI({ apiKey })
  const model = 'gemini-2.5-flash'

  const contents = [
    { role: 'user' as const, parts: [{ text: systemPrompt }] },
    ...userHistory.map((m) => ({
      role: m.role === 'assistant' ? ('model' as const) : ('user' as const),
      parts: [{ text: m.content }],
    })),
  ] as const

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

  try {
    // Retry transient upstream errors (e.g. 503)
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const result = await ai.models.generateContent({
          model,
          contents,
        })
        const text = result.text
        return NextResponse.json({ text })
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err)
        const isRetryable = msg.includes('503') || msg.toLowerCase().includes('unavailable')
        if (!isRetryable || attempt === 2) throw err
        await sleep(250 * Math.pow(2, attempt))
      }
    }
    return NextResponse.json({ error: 'Gemini request failed' }, { status: 500 })
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e)
    return NextResponse.json(
      { error: 'Gemini request failed', details: message },
      { status: 500 }
    )
  }
}

