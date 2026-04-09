'use client'

import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ade Okafor',
      role: 'Midwife',
      location: 'London',
      content: 'Working with her was a game-changer. I became more confident on shift and learned simple systems that made documentation and prioritization so much easier.',
      initials: 'AO',
    },
    {
      name: 'Chioma Adeyemi',
      role: 'Midwife',
      location: 'Manchester',
      content: 'The coaching sessions transformed my confidence. I went from overwhelmed to walking into interviews knowing how to communicate my strengths clearly.',
      initials: 'CA',
    },
    {
      name: 'Blessing Okoro',
      role: 'Midwife',
      location: 'Birmingham',
      content: 'Her guidance helped me feel more grounded in clinical decision-making. I’m calmer during busy moments and more confident escalating when needed.',
      initials: 'BO',
    },
    {
      name: 'Zainab Hassan',
      role: 'Midwife',
      location: 'Leeds',
      content: 'The CV and personal brand review completely transformed how I presented my experience. I started getting interviews within weeks.',
      initials: 'ZH',
    },
    {
      name: 'Tunde Adeleke',
      role: 'Student Midwife',
      location: 'Bristol',
      content: 'As a student, I needed practical structure. The checklists and mentorship gave me clarity on what to focus on and how to grow faster.',
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
            Hear from midwives who’ve grown in confidence and practice
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
