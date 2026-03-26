import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  FileText,
  LayoutGrid,
  MessageSquare,
  Settings,
  Sparkles,
  User,
} from "lucide-react"

const features = [
  {
    title: "Node-Based Thinking",
    description: "Build a living graph of ideas with multiple paths and outcomes.",
    icon: LayoutGrid,
    highlights: [
      "Branching idea paths",
      "Brew multiple directions",
      "Zoomable map",
    ],
  },
  {
    title: "Summaries & Docs",
    description: "Summarize ideas or generate full documents from nodes.",
    icon: Sparkles,
    highlights: [
      "Idea-level summaries",
      "Full doc generation",
      "Summarize uploaded docs",
    ],
  },
  {
    title: "Code Nodes",
    description: "AI-generated code blocks you can copy and reuse.",
    icon: MessageSquare,
    highlights: ["Copy-ready snippets", "AI-assisted generation", "Clean formatting"],
  },
  {
    title: "Architecture Diagrams",
    description: "Visualize the whole chat as a Mermaid-style diagram.",
    icon: FileText,
    highlights: ["Mermaid-ready output", "System overviews", "Shareable visuals"],
  },
  {
    title: "Planning Nodes",
    description: "Turn ideas into structured plans with steps and tasks.",
    icon: Settings,
    highlights: ["Step-by-step flow", "Priorities & owners", "Progress snapshots"],
  },
  {
    title: "File Nodes",
    description: "Attach, summarize, and reference files inside your graph.",
    icon: User,
    highlights: ["Attach any file", "Summaries on demand", "Linked to ideas"],
  },
]

const Features = () => {
  return (
    <main className="min-h-screen w-full bg-background">
      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 py-20 md:px-8 md:py-28">
        <section className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-3.5 py-1.5 text-xs font-medium tracking-wider text-muted-foreground backdrop-blur-sm">
            <Sparkles className="size-3" />
            FEATURES
          </div>
          <h1 className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text py-6 text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
            From nodes to connected thinking
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground/90 md:text-lg">
            A node-first workspace that turns conversations, files, and ideas
            into a structured, searchable knowledge graph.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "backwards",
                }}
                className="group relative flex h-full flex-col border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 hover:border-border hover:bg-card hover:shadow-lg"
              >
                <CardHeader className="space-y-4 pb-6">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground/80">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="mt-auto">
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {feature.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default Features
