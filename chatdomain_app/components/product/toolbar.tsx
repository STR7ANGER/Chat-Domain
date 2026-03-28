import { Brush, Hand, MousePointer2, Pencil, Plus } from "lucide-react"

const Toolbar = () => {
  return (
    <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 max-w-[calc(100%-2rem)] -translate-x-1/2">
      <div
        className="pointer-events-auto flex items-stretch rounded-xl border border-border/80 bg-card/95 py-1 pl-1 pr-1 shadow-md ring-1 ring-black/5 backdrop-blur-md dark:border-border dark:bg-card/90 dark:ring-white/10"
        role="toolbar"
        aria-label="Canvas tools"
      >
        <div className="flex items-center gap-0.5 px-1">
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Select"
          >
            <MousePointer2 className="size-[18px] stroke-[1.75]" aria-hidden />
          </button>
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Pan"
          >
            <Hand className="size-[18px] stroke-[1.75]" aria-hidden />
          </button>
        </div>
        <div className="mx-0.5 my-1 w-px shrink-0 self-stretch bg-border" aria-hidden />
        <div className="flex items-center px-1.5">
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="New node"
          >
            <Plus className="size-5 stroke-2" aria-hidden />
          </button>
        </div>
        <div className="mx-0.5 my-1 w-px shrink-0 self-stretch bg-border" aria-hidden />
        <div className="flex items-center gap-0.5 px-1">
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Pencil"
          >
            <Pencil className="size-[18px] stroke-[1.75]" aria-hidden />
          </button>
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Brush"
          >
            <Brush className="size-[18px] stroke-[1.75]" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
