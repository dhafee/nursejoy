'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'

export default function BlogPreviewSection() {
  const articles = [
    {
      title: 'How to Pass OSCE First Try',
      excerpt: 'Master the practical examination with proven strategies, station-by-station breakdown, and insider tips from someone who passed first time.',
      date: 'Mar 15, 2024',
      readTime: '8 min read',
      category: 'OSCE Exam',
    },
    {
      title: 'Cost of Moving to the UK as a Nurse',
      excerpt: 'A detailed breakdown of all expenses: visa, accommodation, exams, travel. Plus budgeting tips and ways to reduce costs.',
      date: 'Mar 10, 2024',
      readTime: '6 min read',
      category: 'Relocation',
    },
    {
      title: 'How to Get an NHS Job Fast',
      excerpt: 'Inside secrets to landing NHS positions quickly. From application strategy to interview preparation and salary negotiation.',
      date: 'Mar 5, 2024',
      readTime: '10 min read',
      category: 'Job Search',
    },
  ]

  return (
    <section id="blog" className="w-full py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Free Resources & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read my latest articles on nursing relocation, exams, and career development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <Card key={idx} className="p-6 border-secondary hover:shadow-md transition-shadow flex flex-col gap-4 group">
              {/* Category Badge */}
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Meta */}
              <div className="space-y-3 pt-4 border-t border-secondary">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
