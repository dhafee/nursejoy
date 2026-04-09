'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

export interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

interface ChatContextType {
  messages: ChatMessage[]
  isOpen: boolean
  isLoading: boolean
  addMessage: (text: string) => void
  setIsOpen: (open: boolean) => void
  clearMessages: () => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: `Hello! I'm Midwife Joy. I'm here to help you with antenatal care, labor support, postnatal care, documentation, time management, and career growth. What can I help you with today?`,
      sender: 'assistant',
      timestamp: new Date(),
    },
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const addMessage = useCallback((text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    ;(async () => {
      try {
        const res = await fetch('/api/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((m) => ({
              role: m.sender,
              content: m.text,
            })),
          }),
        })

        const data = (await res.json()) as { text?: string; error?: string }
        const reply = res.ok ? (data.text ?? '') : (data.error ?? 'Something went wrong.')

        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: reply || 'I could not generate a response right now. Please try again.',
          sender: 'assistant',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
      } catch {
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: 'I could not reach the assistant right now. Please try again.',
          sender: 'assistant',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
      } finally {
        setIsLoading(false)
      }
    })()
  }, [messages])

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: '1',
        text: `Hello! I'm Midwife Joy. I'm here to help you with antenatal care, labor support, postnatal care, documentation, time management, and career growth. What can I help you with today?`,
        sender: 'assistant',
        timestamp: new Date(),
      },
    ])
  }, [])

  return (
    <ChatContext.Provider value={{ messages, isOpen, isLoading, addMessage, setIsOpen, clearMessages }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}
