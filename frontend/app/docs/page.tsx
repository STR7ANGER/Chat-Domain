import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { Metadata } from "next"
import { BookOpen, FileText, GitBranch, Map, Sparkles } from "lucide-react"

const quickstart = [
  {
    title: "Create your first nodes",
    description: "Start a workspace, add a few idea nodes, and label the direction.",
    icon: Map,
  },
  {
    title: "Branch the paths",
    description: "Split the node into multiple ideas to explore alternatives.",
    icon: GitBranch,
  },
  {
    title: "Summarize & export",
    description: "Generate a summary or full document from selected nodes.",
    icon: FileText,
  },
]

const nodeTypes = [
  {
    title: "Idea nodes",
    description: "Core thinking blocks that connect into your knowledge graph.",
  },
  {
    title: "Planning nodes",
    description: "Turn ideas into step-by-step execution plans and tasks.",
  },
  {
    title: "Code nodes",
    description: "AI-generated code you can copy and reuse instantly.",
  },
  {
    title: "Diagram nodes",
    description: "Mermaid-ready architecture diagrams of your chat.",
  },
  {
    title: "File nodes",
    description: "Attach, summarize, and reference documents in context.",
  },
]

const docsResources = [
  {
    title: "Getting started guide",
    description: "Set up your first graph and learn the core shortcuts.",
    icon: BookOpen,
  },
  {
    title: "Summaries playbook",
    description: "Best practices for node-level and graph-level summaries.",
    icon: Sparkles,
  },
  {
    title: "Export workflows",
    description: "Generate docs, reports, and shareable views from nodes.",
    icon: FileText,
  },
]

export const metadata: Metadata = {
  title: "Docs · Chat Domain",
  description:
    "Learn how to build node graphs, generate summaries, and export documents with Chat Domain.",
}

const DocsPage = () => {
  return (
    <main className="relative flex w-full justify-center overflow-hidden bg-background">
      <div className="relative z-10 w-full max-w-5xl space-y-16 px-4 py-16 md:px-8 md:py-20">
        <section className="space-y-6 text-center">
          <Badge variant="outline" className="mx-auto border-border/60 bg-background/80 backdrop-blur">
            Documentation
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Everything you need to build with nodes.
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Learn how to brew ideas, connect paths, and ship summaries or full documents from your graph.
          </p>
        </section>

        <Separator className="bg-border/60" />

        <section className="space-y-8">
          <header className="space-y-3 text-left">
            <Badge variant="outline" className="border-border/50 bg-background/60 backdrop-blur">
              Quickstart
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Launch your first graph</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {quickstart.map(({ title, description, icon: Icon }, index) => (
              <Card
                key={title}
                style={{ transitionDelay: `${index * 80}ms` }}
                className="group relative overflow-hidden border-border/60 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-2xl"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-1 rounded-full bg-linear-to-r from-primary/60 via-primary/70 to-primary/60 opacity-60 transition group-hover:opacity-100" />
                <CardHeader className="space-y-4">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-border/40 bg-muted/40 text-foreground/80 shadow-sm transition group-hover:border-border/70 group-hover:bg-primary/10">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="bg-border/60" />

        <section className="space-y-8">
          <header className="space-y-3 text-left">
            <Badge variant="outline" className="border-border/50 bg-background/60 backdrop-blur">
              Node Types
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Know your building blocks</h2>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            {nodeTypes.map((node, index) => (
              <Card
                key={node.title}
                style={{ transitionDelay: `${index * 60}ms` }}
                className="group relative overflow-hidden border-border/60 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-xl"
              >
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg text-foreground">{node.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{node.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="bg-border/60" />

        <section className="space-y-8">
          <header className="space-y-3 text-left">
            <Badge variant="outline" className="border-border/50 bg-background/60 backdrop-blur">
              Resources
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Guides and playbooks</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {docsResources.map(({ title, description, icon: Icon }, index) => (
              <Card
                key={title}
                style={{ transitionDelay: `${index * 80}ms` }}
                className="group relative overflow-hidden border-border/60 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-2xl"
              >
                <CardHeader className="space-y-4">
                  <div className="inline-flex size-10 items-center justify-center rounded-2xl border border-border/40 bg-muted/40 text-foreground/80 shadow-sm transition group-hover:border-border/70 group-hover:bg-primary/10">
                    <Icon className="size-4" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Coming soon</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default DocsPage
