import Link from 'next/link'
import { blogPosts } from '@/lib/blog'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'

export default function BlogIndexPage() {
  return (
    <main className="w-full">
      <section className="w-full py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Free Resources & Insights</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Articles on midwifery practice, confidence, documentation, and career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="p-6 border-secondary/70 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-card/90 backdrop-blur-sm"
              >
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  <h2 className="text-xl font-bold text-foreground">{post.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-secondary">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
                    <Link href={`/blog/${post.slug}`} className="group inline-flex items-center">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

