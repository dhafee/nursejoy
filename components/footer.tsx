'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Youtube, Twitter, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  const sections = [
    {
      title: 'Main',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Products', href: '#products' },
        { label: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Free Checklist', href: '#checklist' },
        { label: 'OSCE Guide', href: '#osce' },
        { label: 'NHS CV Template', href: '#cv' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Refund Policy', href: '/refund' },
      ],
    },
  ]

  const socials = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center">
                <span className="text-background font-bold text-sm">UN</span>
              </div>
              <span className="font-semibold text-background">Nurse Joy</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Helping international nurses achieve their dreams in the UK healthcare system.
            </p>

            {/* Newsletter Signup */}
            <form onSubmit={handleSubmit} className="space-y-2 pt-4">
              <p className="text-sm font-semibold text-background">Newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 text-sm bg-background/10 border-background/20 text-background placeholder:text-background/60"
                  required
                />
                <Button
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>

          {/* Link Sections */}
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-semibold text-background text-sm uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-background/70">
            &copy; 2026 Nurse Joy
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social, idx) => {
              const Icon = social.icon
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4 text-background" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
