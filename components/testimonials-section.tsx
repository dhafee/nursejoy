'use client'

import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ade Okafor',
      role: 'RN, NHS Trust',
      location: 'London',
      content: 'Working with her was a game-changer. She helped me pass OSCE on my first try and land a role at a top NHS hospital. Her insights are invaluable.',
      initials: 'AO',
    },
    {
      name: 'Chioma Adeyemi',
      role: 'RN, NHS Trust',
      location: 'Manchester',
      content: 'The interview coaching session transformed my confidence. I went from nervous and unprepared to walking into interviews knowing exactly what to expect.',
      initials: 'CA',
    },
    {
      name: 'Blessing Okoro',
      role: 'RN, NHS Trust',
      location: 'Birmingham',
      content: 'Her relocation guidance saved me months of confusion and thousands of pounds. Every step was clearly mapped out. Highly recommended!',
      initials: 'BO',
    },
    {
      name: 'Zainab Hassan',
      role: 'RN, NHS Trust',
      location: 'Leeds',
      content: 'The CV review completely transformed how I presented my experience. I got interviews within weeks of updating it with her feedback.',
      initials: 'ZH',
    },
    {
      name: 'Tunde Adeleke',
      role: 'RN, NHS Trust',
      location: 'Bristol',
      content: 'As someone from Nigeria, I was skeptical about making the move. Her personal story and practical guidance gave me the confidence to proceed.',
      initials: 'TA',
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from nurses who've successfully relocated and thrived in the NHS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6 border-secondary hover:shadow-md transition-shadow flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed flex-1">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-secondary">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
