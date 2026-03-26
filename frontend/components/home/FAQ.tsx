"use client"

import React, { useEffect, useRef, useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "What is a node in Chat Domain?",
    answer:
      "A node is a focused idea unit that can branch, connect, and evolve into a full knowledge graph.",
  },
  {
    question: "Can I create multiple paths from one idea?",
    answer:
      "Yes. You can brew alternate directions, link supporting nodes, and compare different paths side by side.",
  },
  {
    question: "How do summaries and documents work?",
    answer:
      "Summaries can be generated per node or across the whole graph, and full documents can be produced from selected nodes or uploaded files.",
  },
  {
    question: "Do you support code and architecture diagrams?",
    answer:
      "Yes. Use code nodes for AI-generated snippets and Mermaid nodes to visualize the architecture of your chat and ideas.",
  },
  {
    question: "Can I attach and summarize files?",
    answer:
      "Absolutely. File nodes let you attach docs, summarize them, and connect insights back to your graph.",
  },
]

interface FAQItemProps {
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="group overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 ease-out hover:border-border hover:bg-card hover:shadow-lg">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-300 ease-out"
      >
        <span className="text-base font-semibold text-foreground md:text-lg">
          {faq.question}
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-primary transition-transform duration-500 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-500 ease-out"
      >
        <div ref={contentRef} className="border-t border-border/30 px-6 py-4">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const router = useRouter()

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen w-full bg-background">
      <div className="mx-auto w-full max-w-4xl space-y-12 px-4 py-20 md:px-8 md:py-28">
        <section className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-3.5 py-1.5 text-xs font-medium tracking-wider text-muted-foreground backdrop-blur-sm">
            <HelpCircle className="size-3" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
            Got questions?
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground/90 md:text-lg">
            Learn how Chat Domain’s node system, summaries, and diagrams help
            you build clearer thinking and better docs.
          </p>
        </section>

        <section className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-border/50 bg-muted/30 p-8 text-center backdrop-blur-sm">
          <h3 className="mb-3 text-xl font-semibold text-foreground md:text-2xl">
            Still have questions?
          </h3>
          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            We can help you map your workflow and set up your first graph.
          </p>
          <button
            onClick={() => router.push("/Contact")}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 ease-out hover:scale-105 hover:bg-primary/90 hover:shadow-lg"
          >
            Contact Us
          </button>
        </section>
      </div>
    </main>
  )
}

export default FAQ
