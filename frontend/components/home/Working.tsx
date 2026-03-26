import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BarChart3,
  CheckCircle2,
  FileText,
  MessageSquare,
  Send,
  UserPlus,
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Start With Nodes",
    description: "Create your first idea nodes and choose a direction.",
    icon: MessageSquare,
    details: [
      "Quick idea capture",
      "Multiple idea paths",
      "Structured node types",
    ],
  },
  {
    number: "02",
    title: "Expand The Graph",
    description: "Brew new paths and connect related concepts.",
    icon: UserPlus,
    details: ["Link nodes visually", "Branch with intent", "Refine structure"],
  },
  {
    number: "03",
    title: "Generate With AI",
    description: "Use code nodes and planning nodes to build faster.",
    icon: BarChart3,
    details: ["AI code nodes", "Planning flows", "Copy-ready output"],
  },
  {
    number: "04",
    title: "Summarize & Document",
    description: "Summarize nodes or generate full docs instantly.",
    icon: FileText,
    details: ["Idea summaries", "Full document output", "Doc summarization"],
  },
  {
    number: "05",
    title: "Visualize & Share",
    description: "Create Mermaid diagrams and share the architecture.",
    icon: Send,
    details: ["Mermaid diagrams", "Architecture views", "Shareable links"],
  },
]

const Working = () => {
  return (
    <main className="min-h-screen w-full bg-background">
      <div className="mx-auto w-full max-w-7xl space-y-20 px-4 py-20 md:px-8 md:py-28">
        <section className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-3.5 py-1.5 text-xs font-medium tracking-wider text-muted-foreground backdrop-blur-sm">
            <CheckCircle2 className="size-3" />
            HOW IT WORKS
          </div>
          <h1 className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
            Five steps to node clarity
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground/90 md:text-lg">
            From first node to finalized docs, your ideas stay connected, visual,
            and ready to share.
          </p>
        </section>

        <section className="relative">
          <div className="grid gap-8 md:grid-cols-5 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <Card className="group relative w-full border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 hover:border-primary/50 hover:bg-card hover:shadow-xl">
                    <div className="absolute -top-7 left-1/2 z-10 -translate-x-1/2">
                      <div className="flex size-14 items-center justify-center rounded-full border-4 border-background bg-primary shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                        <span className="text-lg font-bold text-primary-foreground">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="space-y-2 pb-3 pt-10">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                          <Icon className="size-5" strokeWidth={1.5} />
                        </div>
                        <CardTitle className="flex min-h-[2.5rem] items-center text-sm font-semibold text-foreground">
                          {step.title}
                        </CardTitle>
                        <CardDescription className="min-h-[3rem] text-xs leading-relaxed text-muted-foreground/80">
                          {step.description}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex min-h-[2.25rem] items-start gap-2 rounded-md border border-border/40 bg-muted/30 px-2 py-1.5 leading-relaxed transition-all duration-300 hover:border-border/60 hover:bg-muted/50"
                          >
                            <CheckCircle2 className="mt-0.5 size-3 shrink-0 text-primary/60" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Working
