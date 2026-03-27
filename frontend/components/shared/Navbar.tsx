"use client"

import { Button } from "../ui/button"
import { ArrowRightIcon, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme()

  function toggleTheme() {
    const currentIsDark =
      resolvedTheme === "dark" ||
      (resolvedTheme === undefined &&
        typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark"))

    setTheme(currentIsDark ? "light" : "dark")
  }

  return (
    <header className="w-full bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo_black.svg"
            alt="Chat Domain logo"
            className="block h-18 w-18 dark:hidden"
          />
          <img
            src="/logo_white.svg"
            alt="Chat Domain logo"
            className="hidden h-18 w-18 dark:block"
          />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6" aria-label="Primary">
            <Link
              href="/"
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/docs"
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="/contact"
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 px-0"
            >
              <Sun className="hidden h-4 w-4 dark:block" />
              <Moon className="h-4 w-4 dark:hidden" />
            </Button>

            <Button asChild size="sm">
              <Link
                href="http://localhost:3001/login"
                target="_blank"
                rel="noreferrer"
                className="gap-2"
              >
                App <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
