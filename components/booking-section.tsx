'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'

export default function BookingSection() {
  return (
    <section id="contact" className="w-full py-14 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <Card className="p-8 md:p-12 border-secondary/70 text-center space-y-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
          {/* Header */}
          <div className="space-y-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Elevate Your Midwifery Career?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a 1-on-1 consultation call. Share your goals, and let’s create a clear, personalized roadmap for your midwifery growth.
            </p>
          </div>

          {/* Calendar Placeholder */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-10 md:p-12 min-h-80 flex items-center justify-center border border-border/60 relative">
            <div className="text-center space-y-4">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">Calendar integration placeholder</p>
              <p className="text-sm text-muted-foreground">Connect your calendar tool (e.g., Calendly, Acuity) here</p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4 pt-2 relative">
            <Button size="lg" className="w-full rounded-full">
              Schedule Your Free Consultation
            </Button>
            <p className="text-xs text-muted-foreground">
              30 minutes • Free • No credit card required
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
