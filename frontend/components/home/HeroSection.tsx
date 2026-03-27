import Link from "next/link"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center px-4 py-12 bg-background">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
          Stop Scrolling. Start Connecting Ideas
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Turn messy conversations into structured thinking with AI-powered nodes
          that connect, branch, and evolve with you.
        </p>
        <div className="flex items-center justify-center mt-8">
          <Button asChild size="lg" className="h-12 px-8">
            <Link
              href="http://localhost:3001/login"
              target="_blank"
              rel="noreferrer"
              className="gap-2"
            >
              Chat Domain -&gt;
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
