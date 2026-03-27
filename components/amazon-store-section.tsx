'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function AmazonStoreSection() {
  const essentials = [
    {
      name: 'Stethoscopes',
      description: 'Reliable options for accurate assessments during clinical practice.',
      link: 'https://a.co/d/0ff36BBN',
      image: '/Stethoscopes.jpg',
    },
    {
      name: 'Compression Socks',
      description: 'Comfort-focused picks to reduce leg fatigue on long shifts.',
      link: 'https://a.co/d/0gHA8Tes',
      image: '/socks.jpg',
    },
    {
      name: 'Scrubs',
      description: 'Durable, breathable workwear for busy ward and clinic days.',
      link: 'https://a.co/d/07Ty7vuY',
      image: '/scrubs.jpg',
    },
    {
      name: 'Nurse Watches',
      description: 'Easy-to-read watches designed for pulse checks and daily use.',
      link: 'https://a.co/d/05Ocalkg',
      image: '/watch.jpg',
    },
    {
      name: 'Penlights',
      description: 'Compact lighting tools for quick pupil and throat assessments.',
      link: 'https://a.co/d/01P6tnNC',
      image: '/penlight.jpg',
    },
    {
      name: 'Medical Scissors',
      description: 'Practical, sturdy scissors for routine nursing and emergency needs.',
      link: 'https://a.co/d/0drzmF5e',
      image: '/scissors.jpg',
    },
  ]

  return (
    <section id="store" className="w-full py-14 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            Amazon Essentials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nurse Store Picks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recommended nursing essentials to support your daily work and training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentials.map((item) => (
            <Card key={item.name} className="p-6 flex flex-col gap-4 border-secondary/70 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="relative h-52 sm:h-56 w-full rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain object-center"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer noopener" className="mt-auto">
                <Button variant="outline" className="w-full group rounded-full">
                  View on Amazon
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
