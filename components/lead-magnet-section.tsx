'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function LeadMagnetSection() {
  const [email, setEmail] = useState('')

  const checklist = [
    'Shift-ready prioritization checklist',
    'Documentation & handover prompts',
    'Antenatal assessment essentials',
    'Intrapartum quick-reference workflow',
    'Postnatal support & red flags guide',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section id="checklist" className="w-full py-14 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <Card className="overflow-hidden border-secondary/70 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
            {/* Left Column */}
            <div className="space-y-6 flex flex-col justify-center relative">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Free Checklist
                </h3>
                <p className="text-lg text-muted-foreground">
                  The Midwife Shift‑Ready Checklist
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Get instant access to my practical checklist designed to help midwives feel more prepared, organized, and confident on shift.
              </p>

              <div className="space-y-2">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex flex-col justify-center relative">
              <form onSubmit={handleSubmit} className="space-y-4 bg-white/70 backdrop-blur rounded-2xl border border-border/60 p-6 md:p-7 shadow-sm">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 rounded-full px-4"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full">
                  Get Free Checklist
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
