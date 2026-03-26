"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground">
          Name
          <input
            required
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Email
          <input
            required
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-foreground">
        Company or team
        <input
          type="text"
          placeholder="Team name"
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary"
        />
      </label>
      <label className="space-y-2 text-sm font-medium text-foreground">
        What are you building?
        <textarea
          required
          rows={4}
          placeholder="Tell us about your workflow, node types, or the docs you want to generate."
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary"
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" className="h-11 px-6">
          Send message
        </Button>
        {submitted ? (
          <span className="text-xs text-muted-foreground">
            Thanks! We&apos;ll reply within one business day.
          </span>
        ) : null}
      </div>
    </form>
  )
}

export default ContactForm
