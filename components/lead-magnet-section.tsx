'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function LeadMagnetSection() {
  const [email, setEmail] = useState('')

  const checklist = [
    'Step-by-step visa application guide',
    'NMC registration timeline and requirements',
    'OSCE exam preparation checklist',
    'NHS job search strategy',
    'Salary benchmarks and cost of living',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <Card className="overflow-hidden border-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left Column */}
            <div className="space-y-6 flex flex-col justify-center">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Free Checklist
                </h3>
                <p className="text-lg text-muted-foreground">
                  How to Move to the UK as a Nurse
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Get instant access to my proven checklist that covers everything you need to know before making the move. Join 3,000+ nurses who've already downloaded it.
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
            <div className="flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="h-11"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
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
