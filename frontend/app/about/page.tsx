import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { Metadata } from "next"
import { Layers, Sparkles, Workflow } from "lucide-react"

const whyChatDomain = [
  "Bring scattered ideas into a single, connected knowledge graph.",
  "Explore multiple paths without losing the original context.",
  "Generate summaries and documents directly from your node map.",
  "Keep architecture, plans, and files linked to every decision.",
]

const productHighlights = [
  {
    title: "Node System",
    description: "Brew ideas into branching nodes and keep every path visible.",
    bullets: [
      "Multi-path exploration without losing context.",
      "Node types for planning, files, and decisions.",
      "Instant navigation through large idea graphs.",
    ],
    icon: Workflow,
  },
  {
    title: "Summaries & Documents",
    description: "Turn nodes into structured summaries or full documents.",
    bullets: [
      "Summaries at node or graph level.",
      "Generate shareable docs from selected nodes.",
      "Summarize imported files inside the graph.",
    ],
    icon: Sparkles,
  },
  {
    title: "Visual Architecture",
    description: "Create diagrams and code nodes that stay in sync with ideas.",
    bullets: [
      "Mermaid-ready architecture maps.",
      "AI-generated code nodes you can copy.",
      "Keep technical decisions tied to their rationale.",
    ],
    icon: Layers,
  },
]

const team = [
  {
    name: "Aditya Maurya",
    role: "Founder · Product & Engineering",
    initials: "AM",
    bio: "Aditya builds Chat Domain end to end, focusing on node intelligence, real-time collaboration, and the infrastructure that keeps every idea connected.",
  },
]

export const metadata: Metadata = {
  title: "About Chat Domain",
  description:
    "Chat Domain is a node-based workspace for brewing ideas, mapping architecture, and turning conversations into structured documents.",
}

const AboutPage = () => {
  return (
    <main className="relative flex w-full justify-center overflow-hidden bg-background">
      <div className="relative z-10 w-full max-w-5xl space-y-16 px-4 py-16 md:px-8 md:py-20">
        <section className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground backdrop-blur transition-colors duration-300 hover:border-border">
            <span className="inline-flex size-2 rounded-full bg-primary" />
            About Chat Domain
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            A node-first workspace for brewing ideas, architecture, and docs.
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Chat Domain helps teams turn messy conversations into structured knowledge. Build graphs, explore multiple
            paths, generate summaries, and ship documents with clarity.
          </p>
        </section>

        <Separator className="bg-border/60" />

        <section className="grid gap-6 md:grid-cols-2 md:gap-8">
          <Card className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-border/70 hover:shadow-xl md:col-span-2">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/60 via-primary to-primary/60 opacity-50 transition-opacity duration-300 group-hover:opacity-90" />
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl md:text-3xl">Why Chat Domain exists</CardTitle>
              <CardDescription>
                We built Chat Domain for builders who want to connect ideas, explore alternatives, and ship clearer
                outcomes without losing context.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
                {whyChatDomain.map((item, index) => (
                  <li
                    key={item}
                    style={{ transitionDelay: `${index * 60}ms` }}
                    className="group/li relative overflow-hidden rounded-xl border border-border/60 bg-linear-to-br from-background/80 via-background/60 to-muted/40 px-4 py-4 leading-relaxed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg"
                  >
                    <span className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-primary/60 to-primary opacity-0 transition-opacity duration-300 group-hover/li:opacity-100" />
                    <div className="ml-2">{item}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-border/60" />

        <section className="space-y-10">
          <header className="space-y-3 text-left">
            <Badge variant="outline" className="border-border/50 bg-background/60 backdrop-blur">
              Product Highlights
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">What&apos;s inside the workspace</h2>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              From node graphs to summaries and diagrams, Chat Domain keeps every idea connected and ready to share.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {productHighlights.map(({ title, description, bullets, icon: Icon }, index) => (
              <Card
                key={title}
                style={{ transitionDelay: `${index * 80}ms` }}
                className="group relative flex h-full flex-col overflow-hidden border-border/60 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-2xl"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-1 rounded-full bg-linear-to-r from-primary/60 via-primary/70 to-primary/60 opacity-60 transition group-hover:opacity-100" />
                <CardHeader className="space-y-4">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-border/40 bg-muted/40 text-foreground/80 shadow-sm transition group-hover:border-border/70 group-hover:bg-primary/10">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-3">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-lg border border-border/40 bg-background/60 px-3 py-2 transition-colors duration-300 group-hover:border-border/70"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="bg-border/60" />

        <section className="space-y-6">
          <header className="space-y-3 text-left">
            <Badge variant="outline" className="border-border/50 bg-background/60 backdrop-blur">
              Built by people
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">The team behind Chat Domain</h2>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Chat Domain is built end to end by <span className="font-medium text-foreground">Aditya Maurya</span>.
              The focus is simple: help teams think clearly, map decisions, and ship better outcomes.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-1">
            {team.map((member, index) => (
              <Card
                key={member.name}
                style={{ transitionDelay: `${index * 90}ms` }}
                className="group relative h-full overflow-hidden border-border/60 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-2xl"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-1 rounded-full bg-linear-to-r from-primary/60 via-primary/70 to-primary/60 opacity-50 transition group-hover:opacity-100" />
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <Avatar className="size-12 border border-border/70 bg-primary/10 text-foreground">
                    <AvatarFallback className="text-lg font-semibold text-foreground">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-semibold text-foreground">{member.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{member.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default AboutPage
