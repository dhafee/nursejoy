'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { useAIResponses } from '@/hooks/use-ai-responses'

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
      text: `Hello! I'm nurse Joy, your NHS Nursing Guide. I'm here to help you with OSCE preparation, NHS information, credentials, job hunting, relocation planning, and cost guidance. What can I help you with today?`,
      sender: 'assistant',
      timestamp: new Date(),
    },
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { getResponse } = useAIResponses()

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

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = getResponse(text)
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'assistant',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 500)
  }, [getResponse])

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: '1',
        text: `Hello! I'm nurse Joy, your NHS Nursing Guide. I'm here to help you with OSCE preparation, NHS information, credentials, job hunting, relocation planning, and cost guidance. What can I help you with today?`,
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
