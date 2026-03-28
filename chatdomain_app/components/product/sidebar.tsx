"use client"

import { useMemo, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  FileText,
  FolderOpen,
  LayoutGrid,
  MessageSquare,
  Moon,
  Search,
  Settings,
  Sparkles,
  SquarePen,
  Sun,
  Terminal,
  User,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type SidebarChat = {
  id: string
  label: string
  icon: typeof MessageSquare
}

const SIDEBAR_CHATS: SidebarChat[] = [
  { id: "c1", label: "Idea paths planning", icon: MessageSquare },
  { id: "c2", label: "Architecture map", icon: Sparkles },
  { id: "c3", label: "Mermaid diagram", icon: LayoutGrid },
  { id: "c4", label: "Theme toggles", icon: Settings },
  { id: "c5", label: "Toolbar actions", icon: Terminal },
  { id: "c6", label: "Summary docs", icon: FileText },
  { id: "c7", label: "Code node output", icon: Code2 },
  { id: "c8", label: "File node imports", icon: FolderOpen },
]

const Sidebar = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeChatId, setActiveChatId] = useState<string | null>("c2")

  const isDarkMode =
    resolvedTheme === "dark" ||
    (resolvedTheme === undefined &&
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"))

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  const filteredChats = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return SIDEBAR_CHATS
    return SIDEBAR_CHATS.filter((c) => c.label.toLowerCase().includes(q))
  }, [searchQuery])

  return (
    <>
      <div
        className={cn(
          "absolute left-4 top-14 z-20 flex min-h-0 flex-col gap-2 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-lg backdrop-blur-sm transition-[width,padding] duration-200 ease-out",
          sidebarOpen ? "w-72 p-3" : "w-14 p-2"
        )}
      >
        <div
          className={cn(
            "flex shrink-0 gap-2",
            sidebarOpen ? "flex-row items-center" : "flex-col items-stretch"
          )}
        >
          {sidebarOpen ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-9 min-w-0 flex-1 justify-start gap-2 px-3 text-xs font-medium"
            >
              <SquarePen className="size-3.5 shrink-0 opacity-80" />
              New chat
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="size-9"
              aria-label="New chat"
            >
              <SquarePen className="size-3.5 opacity-80" />
            </Button>
          )}
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="size-9 shrink-0"
            onClick={() => setSidebarOpen((o) => !o)}
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {sidebarOpen ? (
              <ChevronLeft className="size-3.5" aria-hidden />
            ) : (
              <ChevronRight className="size-3.5" aria-hidden />
            )}
          </Button>
        </div>

        {sidebarOpen ? (
          <>
            <div className="relative shrink-0">
              <Search
                className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chats"
                className={cn(
                  "h-9 pr-3 pl-8 text-xs",
                  "placeholder:text-muted-foreground"
                )}
                autoComplete="off"
              />
            </div>

            <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <p className="mb-1.5 shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Your chats
              </p>
              <ul className="min-h-0 flex-1 space-y-0.5 overflow-y-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
                {filteredChats.map((chat) => {
                  const Icon = chat.icon
                  const active = activeChatId === chat.id
                  return (
                    <li key={chat.id}>
                      <button
                        type="button"
                        onClick={() => setActiveChatId(chat.id)}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs transition-colors",
                          active
                            ? "bg-muted font-medium text-foreground"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        )}
                      >
                        <Icon className="size-3.5 shrink-0 opacity-80" aria-hidden />
                        <span className="truncate">{chat.label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </>
        ) : null}
      </div>

      <div className="absolute right-4 top-4 z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm"
          aria-label="Toggle theme"
        >
          <Sun className="hidden h-4 w-4 dark:block" />
          <Moon className="h-4 w-4 dark:hidden" />
        </button>
        <Avatar className="h-9 w-9">
          <AvatarFallback>
            <User className="size-4 text-muted-foreground" aria-hidden />
          </AvatarFallback>
        </Avatar>
      </div>
    </>
  )
}

export default Sidebar
