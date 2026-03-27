'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export default function ProductsSection() {
  const products = [
    {
      title: 'The Nurse Career Upgrade Playbook',
      description: 'Practical steps to level up your nursing career with confidence, clarity, and a structured action plan.',
      price: '£29',
      badge: 'Most Popular',
      image: '/guide1.png',
    },
    {
      title: 'The Smart Nurse Survival Guide',
      description: 'A straightforward guide to help you navigate nursing challenges, avoid burnout, and stay effective on every shift.',
      price: '£19',
      badge: null,
      image: '/guide2.png',
    },
    {
      title: 'Productivity & Time Management for Nurses',
      description: 'Simple systems and routines to manage time better, stay organized, and get more done without extra stress.',
      price: '£24',
      badge: 'New',
      image: '/guide3.png',
    },
  ]

  return (
    <section id="products" className="w-full py-14 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            Shop Digital Guides
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Digital Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical, self-paced guides designed to help nurses grow faster.
          </p>
        </div>

        <div className="relative overflow-hidden ">
          <div className="marquee-track flex w-max gap-6 py-2 hover:[animation-play-state:paused]">
            {[...products, ...products].map((product, idx) => (
              <Card
                key={`${product.title}-${idx}`}
                className="w-[20rem] md:w-[22rem] p-6 flex flex-col gap-5 border-secondary/70 overflow-hidden relative bg-card/90 backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                )}

                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden ring-1 ring-border/50">
                  <Image
                    src={product.image}
                    alt={`${product.title} cover`}
                    fill
                    className="object-contain object-center"
                  />
                </div>

                <div className="space-y-3 pr-12">
                  <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <div className="space-y-4 mt-auto pt-4 border-t border-secondary">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-3xl font-bold text-foreground">{product.price}</span>
                    <span className="text-xs text-muted-foreground">One-time purchase</span>
                  </div>
                  <Button className="w-full group rounded-full">
                    <ShoppingCart className="mr-2 w-4 h-4" />
                    Get Guide
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 24s linear infinite;
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.75rem));
          }
        }
      `}</style>
    </section>
  )
}
