'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail, MessageSquare, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your real backend/integration (Formspree, Resend, etc.)
    console.log('Contact form:', { name, email, topic, message })
    setSubmitted(true)
    setName('')
    setEmail('')
    setTopic('')
    setMessage('')
  }

  return (
    <main className="w-full">
      <section className="w-full py-14 md:py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">Contact</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Let’s talk</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Whether you want coaching, resources, or support in your midwifery journey—send a message and I’ll get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <Card className="lg:col-span-2 p-6 border-secondary/70 bg-card/90 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Quick options</h2>
              <div className="space-y-3">
                <a
                  href="mailto:hello@midwifejoy.com"
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-white/60 p-4 hover:bg-white/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center ring-1 ring-border/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@midwifejoy.com</p>
                  </div>
                </a>

                <Link
                  href="/chat"
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-white/60 p-4 hover:bg-white/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center ring-1 ring-border/60">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ask the AI assistant</p>
                    <p className="text-sm text-muted-foreground">Get quick guidance 24/7</p>
                  </div>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-border/60">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For urgent concerns, follow your local protocols and seek immediate clinical support.
                </p>
              </div>
            </Card>

            <Card className="lg:col-span-3 p-6 md:p-8 border-secondary/70 shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
              <div className="relative">
                <h2 className="text-xl font-semibold text-foreground">Send a message</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Share a little context and I’ll reply as soon as I can.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2" htmlFor="name">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="h-11 rounded-full px-4 bg-white/70"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2" htmlFor="email">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="h-11 rounded-full px-4 bg-white/70"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2" htmlFor="topic">
                      Topic (optional)
                    </label>
                    <Input
                      id="topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="Coaching, resources, interview prep, documentation…"
                      className="h-11 rounded-full px-4 bg-white/70"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2" htmlFor="message">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me what you need help with…"
                      className="min-h-36 rounded-2xl bg-white/70"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button type="submit" size="lg" className="rounded-full px-7">
                      Send message
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    {submitted && (
                      <p className="text-sm text-muted-foreground flex items-center">
                        Thanks — your message was sent (demo).
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

