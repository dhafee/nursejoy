'use client'

import { useChat } from '@/context/chat-context'
import { Button } from '@/components/ui/button'

export default function AIAssistantSection() {
  const { setIsOpen } = useChat()

  const quickTopics = [
    {
      title: 'Antenatal Care',
      description: 'Assessments & communication',
      emoji: '📋',
      query: 'Share practical tips for antenatal assessment and patient communication.',
    },
    {
      title: 'Labor Support',
      description: 'Intrapartum priorities',
      emoji: '🏥',
      query: 'How do I prioritize and stay calm during active labor support on shift?',
    },
    {
      title: 'Postnatal Care',
      description: 'Support & red flags',
      emoji: '✅',
      query: 'What are key postnatal red flags to watch for and how should I respond?',
    },
    {
      title: 'Career Growth',
      description: 'Interviews & confidence',
      emoji: '🔍',
      query: 'Help me prepare for a midwifery interview and talk about my strengths confidently.',
    },
    {
      title: 'Documentation',
      description: 'Notes & handover',
      emoji: '🚀',
      query: 'Give me a simple checklist for midwifery documentation and handover.',
    },
    {
      title: 'Time Management',
      description: 'Shift organization',
      emoji: '💰',
      query: 'How can I manage time better on shift without feeling overwhelmed?',
    },
  ]

  const handleQuickTopic = (query: string) => {
    setIsOpen(true)
    // The chat widget will handle the message addition through context
    setTimeout(() => {
      const event = new CustomEvent('quickTopicSelected', { detail: { query } })
      window.dispatchEvent(event)
    }, 100)
  }

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background via-blue-50/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Meet Midwife Joy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Your AI-powered midwifery guide available 24/7. Get instant answers about antenatal care, labor support, postnatal care, documentation, and career growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left: Assistant Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 border border-border shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                  👩‍⚕️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Joy Gabriel</h3>
                  <p className="text-sm text-accent font-medium">Midwife & AI Guide</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-foreground">
                  Joy is an intelligent midwifery assistant designed to help midwives strengthen skills, build confidence, and grow their careers. Joy provides guidance on:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">✓</span>
                    <span className="text-foreground">Antenatal assessments and patient communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">✓</span>
                    <span className="text-foreground">Labor support priorities and shift decision-making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">✓</span>
                    <span className="text-foreground">Postnatal support, red flags, and escalation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">✓</span>
                    <span className="text-foreground">Documentation workflows and handover prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">✓</span>
                    <span className="text-foreground">Career mentorship, confidence, and interviews</span>
                  </li>
                </ul>

                <Button
                  onClick={() => setIsOpen(true)}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white mt-6"
                >
                  Chat with Joy Now
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Quick Topics */}
          <div className="space-y-4">
            <p className="font-semibold text-foreground text-sm uppercase tracking-wide">Popular Topics</p>
            <div className="grid grid-cols-2 gap-3">
              {quickTopics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsOpen(true)
                    // Delay to let chat widget open
                    setTimeout(() => {
                      const messageEvent = new CustomEvent('sendMessage', { 
                        detail: { message: topic.query } 
                      })
                      window.dispatchEvent(messageEvent)
                    }, 300)
                  }}
                  className="bg-white border border-border rounded-lg p-4 text-left hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{topic.emoji}</div>
                  <h4 className="font-semibold text-foreground text-sm">{topic.title}</h4>
                  <p className="text-xs text-muted-foreground">{topic.description}</p>
                </button>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
              <p className="text-sm text-foreground">
                <span className="font-semibold text-accent">Available 24/7</span> - Get instant nursing guidance anytime, anywhere. Perfect for quick questions or detailed career planning.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 text-center border border-border">
          <h3 className="text-xl font-bold text-foreground mb-3">Ready to Elevate Your Midwifery Career?</h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            Start with Joy’s instant guidance, then book a personalized coaching session for deeper support.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              Chat with Joy
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Book Coaching Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
