'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@/context/chat-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function renderInlineMarkdown(input: string): React.ReactNode[] {
  // Very small markdown subset: **bold**, *italic*, `code`
  const nodes: React.ReactNode[] = []
  let rest = input
  let key = 0

  const pushText = (t: string) => {
    if (t) nodes.push(<span key={`t-${key++}`}>{t}</span>)
  }

  while (rest.length) {
    const match = rest.match(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/)
    if (!match || match.index === undefined) {
      pushText(rest)
      break
    }

    const before = rest.slice(0, match.index)
    pushText(before)

    const token = match[0]
    if (token.startsWith('**')) {
      nodes.push(<strong key={`b-${key++}`}>{token.slice(2, -2)}</strong>)
    } else if (token.startsWith('*')) {
      nodes.push(<em key={`i-${key++}`}>{token.slice(1, -1)}</em>)
    } else if (token.startsWith('`')) {
      nodes.push(
        <code
          key={`c-${key++}`}
          className="px-1 py-0.5 rounded bg-secondary/60 text-[0.875em] font-mono"
        >
          {token.slice(1, -1)}
        </code>
      )
    }

    rest = rest.slice(match.index + token.length)
  }

  return nodes
}

function MessageContent({ text }: { text: string }) {
  const lines = text.replace(/\r\n/g, '\n').split('\n')
  const blocks: Array<
    | { type: 'p'; text: string }
    | { type: 'h'; text: string }
    | { type: 'ul'; items: string[] }
    | { type: 'ol'; items: string[] }
  > = []

  const flushList = (kind: 'ul' | 'ol', items: string[]) => {
    if (items.length) blocks.push({ type: kind, items })
  }

  let ul: string[] = []
  let ol: string[] = []

  for (const raw of lines) {
    const line = raw.trimEnd()
    const trimmed = line.trim()

    const isHeading = /^#{1,6}\s+/.test(trimmed) || /^\*\*[^*]+\*\*$/.test(trimmed)
    const isUl = /^[-•*]\s+/.test(trimmed)
    const isOl = /^\d+\.\s+/.test(trimmed)

    if (isHeading) {
      flushList('ul', ul)
      flushList('ol', ol)
      ul = []
      ol = []
      const headingText = trimmed
        .replace(/^#{1,6}\s+/, '')
        .replace(/^\*\*/, '')
        .replace(/\*\*$/, '')
        .trim()
      blocks.push({ type: 'h', text: headingText })
      continue
    }

    if (isUl) {
      flushList('ol', ol)
      ol = []
      ul.push(trimmed.replace(/^[-•*]\s+/, ''))
      continue
    }
    if (isOl) {
      flushList('ul', ul)
      ul = []
      ol.push(trimmed.replace(/^\d+\.\s+/, ''))
      continue
    }

    flushList('ul', ul)
    flushList('ol', ol)
    ul = []
    ol = []

    if (trimmed.length === 0) {
      blocks.push({ type: 'p', text: '' })
      continue
    }

    blocks.push({ type: 'p', text: line })
  }

  flushList('ul', ul)
  flushList('ol', ol)

  return (
    <div className="space-y-2">
      {blocks.map((b, idx) => {
        if (b.type === 'h') {
          return (
            <p key={idx} className="font-semibold text-foreground leading-snug">
              {renderInlineMarkdown(b.text)}
            </p>
          )
        }
        if (b.type === 'ul') {
          return (
            <ul key={idx} className="list-disc pl-5 space-y-1">
              {b.items.map((it, i) => (
                <li key={i} className="leading-relaxed">
                  {renderInlineMarkdown(it)}
                </li>
              ))}
            </ul>
          )
        }
        if (b.type === 'ol') {
          return (
            <ol key={idx} className="list-decimal pl-5 space-y-1">
              {b.items.map((it, i) => (
                <li key={i} className="leading-relaxed">
                  {renderInlineMarkdown(it)}
                </li>
              ))}
            </ol>
          )
        }

        // paragraph (including blank line as spacing)
        return b.text ? (
          <p key={idx} className="leading-relaxed whitespace-pre-wrap">
            {renderInlineMarkdown(b.text)}
          </p>
        ) : (
          <div key={idx} className="h-2" />
        )
      })}
    </div>
  )
}

export function ChatWidget() {
  const { messages, isOpen, isLoading, addMessage, setIsOpen, clearMessages } = useChat()
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (input.trim()) {
      addMessage(input)
      setInput('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center ring-1 ring-white/10"
        aria-label="Open chat with Midwife Joy"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-2.93l-1.421 1.905A2 2 0 0110.88 20H3a2 2 0 01-2-2V5z"></path>
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[420px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-border flex flex-col h-[560px] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/15 ring-1 ring-white/20 flex items-center justify-center text-sm font-semibold">
                MJ
              </div>
              <div>
                <h3 className="font-semibold leading-tight">Midwife Joy</h3>
                <p className="text-sm text-white/80 leading-tight">Midwifery guide • Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-secondary/10">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary ring-1 ring-border/60 flex items-center justify-center text-xs font-semibold mr-2 mt-1 flex-shrink-0">
                    MJ
                  </div>
                )}
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm shadow-sm ring-1 ${
                    message.sender === 'user'
                      ? 'bg-primary text-white ring-primary/20 rounded-br-md'
                      : 'bg-white text-foreground ring-border/60 rounded-bl-md'
                  }`}
                >
                  <MessageContent text={message.text} />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary ring-1 ring-border/60 flex items-center justify-center text-xs font-semibold mr-2 mt-1 flex-shrink-0">
                  MJ
                </div>
                <div className="bg-white text-foreground px-4 py-3 rounded-2xl rounded-bl-md text-sm shadow-sm ring-1 ring-border/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:120ms]" />
                    <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:240ms]" />
                    <span className="text-xs text-muted-foreground ml-1">Thinking…</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 bg-white">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about antenatal, labor, postnatal, career..."
                disabled={isLoading}
                className="flex-1 h-11 rounded-full px-4"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 h-11"
              >
                Send
              </Button>
            </div>
            <button
              onClick={clearMessages}
              className="text-xs text-muted-foreground mt-2 hover:text-foreground transition-colors"
            >
              Clear chat
            </button>
          </div>
        </div>
      )}
    </>
  )
}
