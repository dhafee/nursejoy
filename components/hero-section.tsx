'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 lg:px-8 py-14 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                Midwifery Mentorship
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Helping Midwives Build Confidence, Clarity, and Career Growth
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Get practical guidance, personalized coaching, and proven tools to grow in midwifery and thrive in your professional journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="group rounded-full px-7">
                Get Free Midwifery Checklist
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7"
              >
                Book a 1-on-1 Session
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Midwife • Educator • Mentor</span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative h-[22rem] sm:h-[26rem] md:h-[32rem] lg:h-[38rem] w-full max-w-md md:max-w-none bg-secondary/20 rounded-3xl overflow-hidden shadow-xl ring-1 ring-border/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
              <Image
                src="/avatar.png"
                alt="Professional midwife portrait"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
