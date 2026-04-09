'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function BlogPreviewSection() {
  const articles = [
    {
      slug: 'stay-calm-high-pressure-shift',
      title: 'How to Stay Calm in High‑Pressure Moments on Shift',
      excerpt: 'A practical mindset + workflow guide to help you stay grounded, prioritize quickly, and communicate clearly when the unit gets busy.',
      date: 'Mar 15, 2024',
      readTime: '8 min read',
      category: 'On‑Shift Skills',
    },
    {
      slug: 'postpartum-support-what-to-watch',
      title: 'Postpartum Support: What to Watch for (and How to Respond)',
      excerpt: 'A simple, supportive overview of common postpartum concerns—plus practical steps for reassurance, escalation, and documentation.',
      date: 'Mar 10, 2024',
      readTime: '6 min read',
      category: 'Postnatal',
    },
    {
      slug: 'midwifery-interview-prep-questions',
      title: 'Midwifery Interview Prep: Questions You Should Practice',
      excerpt: 'A clear list of common interview themes with prompts to help you tell your story, show clinical judgement, and speak with confidence.',
      date: 'Mar 5, 2024',
      readTime: '10 min read',
      category: 'Career',
    },
  ]

  return (
    <section id="blog" className="w-full py-14 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Free Resources & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read my latest articles on midwifery practice, confidence, and career growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <Card
              key={idx}
              className="p-6 border-secondary/70 flex flex-col gap-4 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-card/90 backdrop-blur-sm"
            >
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
                <Button asChild variant="ghost" size="sm" className="group/btn p-0 h-auto">
                  <Link href={`/blog/${article.slug}`} className="inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="rounded-full px-7">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
