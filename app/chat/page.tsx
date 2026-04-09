'use client'

import { ChatPanel } from '@/components/chat-panel'

export default function ChatPage() {
  return (
    <main className="w-full">
      <section className="w-full py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">AI Midwifery Chat</h1>
            <p className="text-muted-foreground mt-2">
              Ask about antenatal care, labor support, postnatal care, documentation, and career growth.
            </p>
          </div>

          <ChatPanel />
        </div>
      </section>
    </main>
  )
}

