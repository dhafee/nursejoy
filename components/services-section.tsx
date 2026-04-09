'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, MessageSquare, MapPin, ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: 'Midwifery CV & Personal Brand Review',
      description: 'Refine your CV, bio, and positioning so you’re clearly seen for your strengths in midwifery.',
      price: '£79',
    },
    {
      icon: MessageSquare,
      title: 'Career Mentorship & Confidence Coaching',
      description: 'Get structured support to grow confidence, set goals, and make bold next steps in your midwifery journey.',
      price: '£99',
    },
    {
      icon: MapPin,
      title: 'Clinical Skills & Practice Support',
      description: 'Practical guidance for antenatal, intrapartum, and postnatal care—plus tools to stay organized on shift.',
      price: '£129',
    },
  ]

  return (
    <section id="services" className="w-full py-14 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Coaching Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personalized 1-on-1 coaching to elevate your midwifery career and practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card key={idx} className="p-8 flex flex-col gap-6 border-secondary/70 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-4 mt-auto pt-4 border-t border-secondary">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">{service.price}</span>
                    <span className="text-muted-foreground">per session</span>
                  </div>
                  <Button className="w-full group rounded-full">
                    Book Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
