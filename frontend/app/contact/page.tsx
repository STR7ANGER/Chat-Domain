import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ContactForm from "@/components/contact/contact-form"
import type { Metadata } from "next"
import { Clock, Mail, MessageCircle, Play, X } from "lucide-react"

const contactChannels = [
  {
    title: "Email",
    value: "hello@chatdomain.ai",
    description: "Replies within 24h on business days",
    icon: Mail,
  },
  {
    title: "Office hours",
    value: "Workflow reviews",
    description: "Book a 30-minute node planning session",
    icon: Clock,
  },
  {
    title: "Community",
    value: "Product feedback",
    description: "Share node templates and ideas",
    icon: MessageCircle,
  },
]

const socialLinks = [
  {
    label: "X",
    handle: "@chatdomain",
    href: "#",
    icon: X,
  },
  {
    label: "YouTube",
    handle: "Chat Domain Studio",
    href: "#",
    icon: Play,
  },
]

export const metadata: Metadata = {
  title: "Contact Chat Domain",
  description:
    "Talk to the Chat Domain team about node workflows, product feedback, or onboarding support.",
}

const ContactPage = () => {
  return (
    <main className="relative flex w-full justify-center overflow-hidden bg-background">
      <div className="relative z-10 w-full max-w-5xl space-y-16 px-4 py-16 md:px-8 md:py-20">
        <section className="space-y-6 text-center">
          <Badge variant="outline" className="mx-auto border-border/60 bg-background/80 backdrop-blur">
            Contact Chat Domain
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Let&apos;s map your node workflow together.
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Share a little context and we&apos;ll help you design node types, summaries, or documentation flows for your
            team.
          </p>
        </section>

        <Separator className="bg-border/60" />

        <section className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <Card className="relative h-fit overflow-hidden border-border/50 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border/70 hover:shadow-2xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/60 via-primary/70 to-primary/60 opacity-70" />
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl md:text-3xl">Start the conversation</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Tell us about your nodes, diagrams, and the docs you want to generate. We&apos;ll respond within one
                business day with next steps.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <ContactForm />
            </CardContent>
          </Card>

          <div className="grid content-start gap-6">
            <Card className="h-fit border-border/60 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border/70 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Ways to reach us</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Pick the channel that fits best. We keep replies focused and fast.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {contactChannels.map(({ title, value, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="group flex items-center gap-3 rounded-xl border border-border/50 bg-background/60 px-4 py-3 transition hover:border-border hover:bg-background/80"
                    >
                      <div className="flex size-9 items-center justify-center rounded-xl border border-border/50 bg-muted/60 text-foreground/80 transition group-hover:border-border/70 group-hover:bg-primary/10">
                        <Icon className="size-4" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-medium text-foreground">{value}</p>
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium text-muted-foreground/90">{title}</span>
                          <span className="px-1 text-muted-foreground/60">•</span>
                          <span>{description}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="h-fit border-border/60 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border/70 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Follow product drops</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Stay in the loop with walkthroughs, releases, and node templates.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 p-3.5">
                {socialLinks.map(({ label, handle, href, icon: Icon }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    className="group flex w-full items-center justify-between rounded-xl border border-transparent bg-background/40 p-6 text-left text-sm font-medium text-foreground transition hover:border-border/60 hover:bg-background/70"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noreferrer noopener">
                      <span className="flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-xl border border-border/40 bg-muted/50 text-foreground/80 transition group-hover:border-border/70 group-hover:bg-primary/10">
                          <Icon className="size-4" />
                        </span>
                        <span className="flex flex-col">
                          <span>{label}</span>
                          <span className="text-xs text-muted-foreground">{handle}</span>
                        </span>
                      </span>
                      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Soon</span>
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ContactPage
