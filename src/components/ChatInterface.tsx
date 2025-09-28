"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ScrollArea } from "./ui/scroll-area"
import { Card } from "./ui/card"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help answer your tenant rights questions. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your question about tenant rights. Based on New York tenant protection laws, I can help you understand your rights and options. Could you provide more specific details about your situation?",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Card className="w-full max-w-sm mx-auto">
      <div className="flex flex-col h-96">
        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    message.isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question about your tenant rights..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading} size="sm">
              Send
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
