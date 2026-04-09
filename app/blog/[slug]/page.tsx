import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getPostBySlug } from '@/lib/blog'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowLeft } from 'lucide-react'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>
}) {
  const resolvedParams = await Promise.resolve(params)
  const post = getPostBySlug(resolvedParams.slug)
  if (!post) return notFound()

  return (
    <main className="w-full">
      <section className="w-full py-10 md:py-14 bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <Button asChild variant="ghost" className="p-0 h-auto mb-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </Button>

          <div className="space-y-4 mb-8">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{post.title}</h1>
            <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <article className="prose prose-neutral max-w-none prose-headings:font-semibold prose-a:text-primary">
            {post.content}
          </article>
        </div>
      </section>
    </main>
  )
}

