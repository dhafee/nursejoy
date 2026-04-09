import type { ReactNode } from 'react'

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: ReactNode
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'stay-calm-high-pressure-shift',
    title: 'How to Stay Calm in High‑Pressure Moments on Shift',
    excerpt:
      'A practical mindset + workflow guide to help you stay grounded, prioritize quickly, and communicate clearly when the unit gets busy.',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    category: 'On‑Shift Skills',
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          High‑pressure moments don’t mean you’re failing — they mean the shift is demanding. The goal isn’t to feel nothing.
          It’s to stay grounded enough to think clearly, communicate, and act safely.
        </p>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">1) Regulate first (20 seconds)</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>
              Take 2 slow breaths — in for 4, out for 6. Your body calms before your thoughts do.
            </li>
            <li>
              Drop your shoulders and unclench your jaw. Tiny physical cues reduce panic‑spiral energy.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">2) Prioritize with a simple rule</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ask: <span className="font-medium text-foreground">“What is the most time‑sensitive risk right now?”</span> Then
            focus on one clinical priority at a time. Multitasking under pressure usually creates missed steps.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Risk to life/airway/breathing/circulation</li>
            <li>Escalation triggers per local protocol</li>
            <li>Medication safety + documentation of key decisions</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">3) Communicate like a leader (SBAR-lite)</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you update a colleague, keep it short and decisive:
          </p>
          <div className="rounded-xl border border-border/60 bg-card/60 p-4 text-muted-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-foreground">Situation</span>: what’s happening now
            </p>
            <p>
              <span className="font-semibold text-foreground">Background</span>: one relevant detail
            </p>
            <p>
              <span className="font-semibold text-foreground">Assessment</span>: what you’re seeing + concerns
            </p>
            <p>
              <span className="font-semibold text-foreground">Request</span>: what you need / next step
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">4) Safety‑netting (always)</h2>
          <p className="text-muted-foreground leading-relaxed">
            If anything feels outside your scope or you’re uncertain, escalate early and follow your local guidance. Calm doesn’t
            mean carrying it alone.
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: 'postpartum-support-what-to-watch',
    title: 'Postpartum Support: What to Watch for (and How to Respond)',
    excerpt:
      'A simple, supportive overview of common postpartum concerns—plus practical steps for reassurance, escalation, and documentation.',
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    category: 'Postnatal',
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Postpartum support is a mix of reassurance and vigilance. Your calm presence matters — and so does a consistent approach
          to red flags and escalation.
        </p>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Quick postpartum check (head‑to‑toe)</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>
              <span className="font-medium text-foreground">Bleeding</span>: amount, clots, trend — escalate heavy bleeding or
              sudden change.
            </li>
            <li>
              <span className="font-medium text-foreground">Pain</span>: location, severity, and what improves/worsens it.
            </li>
            <li>
              <span className="font-medium text-foreground">Vitals & wellbeing</span>: fever, dizziness, severe headache/visual
              change, chest pain, or shortness of breath.
            </li>
            <li>
              <span className="font-medium text-foreground">Feeding</span>: support, realistic plan, and follow‑up resources.
            </li>
            <li>
              <span className="font-medium text-foreground">Mental health</span>: mood, sleep, intrusive thoughts — gentle
              screening and signposting.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">How to respond (support + escalation)</h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Validate the concern and explain what you’re checking.</li>
            <li>Assess systematically and document key findings.</li>
            <li>Escalate early if red flags are present or symptoms are worsening.</li>
            <li>Give clear safety‑net advice: what to watch for + when to seek urgent help.</li>
          </ol>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
          <h3 className="font-semibold text-foreground mb-2">Documentation prompt</h3>
          <p className="text-muted-foreground leading-relaxed">
            Situation • Assessment • Actions • Escalation (who/when) • Plan • Safety‑net advice
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Follow your local postpartum pathways and escalation triggers. When in doubt, escalate — your clinical judgement is a
          strength.
        </p>
      </div>
    ),
  },
  {
    slug: 'midwifery-interview-prep-questions',
    title: 'Midwifery Interview Prep: Questions You Should Practice',
    excerpt:
      'A clear list of common interview themes with prompts to help you tell your story, show clinical judgement, and speak with confidence.',
    date: 'Mar 5, 2024',
    readTime: '10 min read',
    category: 'Career',
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Interviews are not just about “right answers.” They’re about how you think, communicate, and keep people safe. Use these
          prompts to practice out loud.
        </p>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Your story (60 seconds)</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Who are you as a midwife? (values + style of care)</li>
            <li>What are your strengths? (with 1 short example)</li>
            <li>What are you growing right now? (self-awareness)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Clinical judgement & escalation</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Describe a time you recognized a risk early. What did you do next?</li>
            <li>How do you escalate concerns while staying calm and clear?</li>
            <li>How do you balance guidance with following local protocols?</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Communication & teamwork</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Tell me about a difficult conversation with a family. What did you learn?</li>
            <li>How do you handle conflict on shift?</li>
            <li>How do you support a colleague who’s overwhelmed?</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
          <h3 className="font-semibold text-foreground mb-2">Practice tip</h3>
          <p className="text-muted-foreground leading-relaxed">
            Use a simple structure: Context → Action → Outcome → Reflection → What you’d do next time.
          </p>
        </div>
      </div>
    ),
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}

