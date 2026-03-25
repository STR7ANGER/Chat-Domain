"use client"

import { useCallback, useMemo, useState } from "react"
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MiniMap,
  Position,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
  type ReactFlowInstance,
} from "reactflow"
import {
  Brush,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  FileText,
  FolderOpen,
  Hand,
  LayoutGrid,
  MessageSquare,
  Moon,
  MousePointer2,
  Pencil,
  Plus,
  Search,
  Settings,
  Sparkles,
  SquarePen,
  Sun,
  Terminal,
  User,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import "reactflow/dist/style.css"

const PRODUCT_FLOW_CHROME_CSS = `
.product-flow-mock .react-flow__controls {
  background-color: var(--card) !important;
  border: 1px solid var(--border) !important;
  box-shadow: none !important;
}
.product-flow-mock button.react-flow__controls-button {
  background-color: transparent !important;
  border: none !important;
  border-bottom: 1px solid var(--border) !important;
  border-radius: 0 !important;
  color: var(--foreground) !important;
}
.product-flow-mock button.react-flow__controls-button:last-child {
  border-bottom: none !important;
}
.product-flow-mock button.react-flow__controls-button:hover:not(:disabled) {
  background-color: var(--muted) !important;
}
.product-flow-mock button.react-flow__controls-button:disabled {
  opacity: 0.45 !important;
}
.product-flow-mock button.react-flow__controls-button svg {
  fill: currentColor !important;
  stroke: none !important;
  color: inherit !important;
}
.product-flow-mock button.react-flow__controls-button svg path {
  fill: currentColor !important;
}
html:not(.dark) .product-flow-mock .react-flow__background circle {
  fill: #171717 !important;
}
html.dark .product-flow-mock .react-flow__background circle {
  fill: #3a3a42 !important;
}
`

type FlowNodeData = {
  title: string
  body: string
  variant: "user" | "agent"
  showDownload?: boolean
}

type SidebarChat = {
  id: string
  label: string
  icon: typeof MessageSquare
}

const SIDEBAR_CHATS: SidebarChat[] = [
  { id: "c1", label: "Hero section redesign", icon: MessageSquare },
  { id: "c2", label: "Flow canvas & nodes", icon: Sparkles },
  { id: "c3", label: "Map layout tweaks", icon: LayoutGrid },
  { id: "c4", label: "Theme toggle wiring", icon: Settings },
  { id: "c5", label: "Navbar app link", icon: Terminal },
  { id: "c6", label: "Summary.docs export", icon: FileText },
  { id: "c7", label: "API error handling", icon: Code2 },
  { id: "c8", label: "Onboarding copy", icon: FolderOpen },
  { id: "c9", label: "Mobile nav polish", icon: LayoutGrid },
  { id: "c10", label: "Analytics dashboard", icon: Sparkles },
  { id: "c11", label: "Auth redirect flow", icon: MessageSquare },
  { id: "c12", label: "Dark mode tokens", icon: Settings },
]

const edgeStyle = {
  stroke: "var(--foreground)",
  strokeWidth: 1.5,
  strokeOpacity: 0.28,
} as const

const FlowNode = ({ data }: { data: FlowNodeData }) => {
  const isAgent = data.variant === "agent"

  return (
    <div className="w-full min-w-[220px] max-w-[300px] rounded-xl border border-border bg-card px-3.5 py-3 text-card-foreground shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {data.title}
          </p>
          <p className="mt-1 text-sm leading-snug text-card-foreground">{data.body}</p>
        </div>
        {data.showDownload ? (
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/50 text-card-foreground">
            <Download className="h-3.5 w-3.5 opacity-80" aria-hidden />
          </span>
        ) : null}
      </div>
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="h-[11px]! w-[11px]! min-h-[11px]! min-w-[11px]! border-2! border-background! bg-muted-foreground!"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="h-[11px]! w-[11px]! min-h-[11px]! min-w-[11px]! border-2! border-background! bg-muted-foreground!"
      />
      {isAgent ? (
        <>
          <Handle
            type="target"
            position={Position.Left}
            id="left"
            className="h-[11px]! w-[11px]! min-h-[11px]! min-w-[11px]! border-2! border-background! bg-muted-foreground!"
          />
          <Handle
            type="source"
            position={Position.Right}
            id="right"
            className="h-[11px]! w-[11px]! min-h-[11px]! min-w-[11px]! border-2! border-background! bg-muted-foreground!"
          />
        </>
      ) : null}
    </div>
  )
}

const Product = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeChatId, setActiveChatId] = useState<string | null>("c2")
  const [sidebarOpen, setSidebarOpen] = useState(true)

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

  const handleNewChat = () => {
    setSearchQuery("")
    setActiveChatId(null)
  }

  const nodeTypes = useMemo(
    () => ({
      flow: FlowNode,
    }),
    []
  )

  const initialNodes = useMemo((): Node<FlowNodeData>[] => {
    return [
      {
        id: "1",
        type: "flow",
        position: { x: 240, y: 60 },
        data: {
          variant: "user",
          title: "User",
          body: "Make the app link open in a new tab and keep app.localhost separate.",
        },
      },
      {
        id: "2",
        type: "flow",
        position: { x: 240, y: 200 },
        data: {
          variant: "agent",
          title: "Agent",
          body: "Updated the navbar button to open app.localhost:3000/login in a new tab.",
        },
      },
      {
        id: "3",
        type: "flow",
        position: { x: 240, y: 360 },
        data: {
          variant: "user",
          title: "User",
          body: "Create a hero section with the new headline and CTA.",
        },
      },
      {
        id: "4",
        type: "flow",
        position: { x: 240, y: 520 },
        data: {
          variant: "agent",
          title: "Agent",
          body: "Built the hero and wired the CTA. Clean React Flow that follows your theme.",
        },
      },
      {
        id: "5",
        type: "flow",
        position: { x: 560, y: 520 },
        data: {
          variant: "agent",
          title: "Summarise",
          body: "Chat turns into a simple connected flow.",
        },
      },
      {
        id: "6",
        type: "flow",
        position: { x: 860, y: 520 },
        data: {
          variant: "agent",
          title: "Summary.docs",
          body: "Download",
          showDownload: true,
        },
      },
    ]
  }, [])

  const initialEdges = useMemo((): Edge[] => {
    return [
      { id: "e1-2", source: "1", target: "2", sourceHandle: "bottom", targetHandle: "top" },
      { id: "e2-3", source: "2", target: "3", sourceHandle: "bottom", targetHandle: "top" },
      { id: "e3-4", source: "3", target: "4", sourceHandle: "bottom", targetHandle: "top" },
      { id: "e4-5", source: "4", target: "5", sourceHandle: "right", targetHandle: "left" },
      { id: "e5-6", source: "5", target: "6", sourceHandle: "right", targetHandle: "left" },
    ].map((e) => ({ ...e, style: { ...edgeStyle } }))
  }, [])

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  /** Nudge graph up so the stack lines up with sidebar top (`top-14` ≈ 56px). */
  const VIEWPORT_NUDGE_UP_PX = 56

  const onFlowInit = useCallback(
    (instance: ReactFlowInstance<Node<FlowNodeData>, Edge>) => {
      const fitAndNudge = () => {
        if (
          !instance.fitView({
            padding: 0.38,
            maxZoom: 0.85,
            minZoom: 0.35,
            nodes: [
              { id: "1" },
              { id: "2" },
              { id: "3" },
              { id: "4" },
            ],
            duration: 0,
          })
        ) {
          return false
        }
        const v = instance.getViewport()
        instance.setViewport(
          { x: v.x, y: v.y - VIEWPORT_NUDGE_UP_PX, zoom: v.zoom },
          { duration: 0 }
        )
        return true
      }

      if (!fitAndNudge()) {
        requestAnimationFrame(() => {
          fitAndNudge()
        })
      }
    },
    []
  )

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge({ ...params, style: { ...edgeStyle } }, eds))
    },
    [setEdges]
  )

  return (
    <section className="w-full bg-background py-16">
      <style dangerouslySetInnerHTML={{ __html: PRODUCT_FLOW_CHROME_CSS }} />
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4">
        <div className="w-full overflow-hidden rounded-2xl border border-border/70 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2.5 border-b border-border bg-background px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[inset_0_1px_1px_0_rgba(0,0,0,0.2)]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[inset_0_1px_1px_0_rgba(0,0,0,0.2)]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840] shadow-[inset_0_1px_1px_0_rgba(0,0,0,0.2)]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs font-medium text-foreground">Chat Domain</span>
            </div>
            <div className="w-[52px]" />
          </div>

          <div className="product-flow-mock relative h-[720px] overflow-hidden bg-background">
            <div className="pointer-events-none absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-foreground shadow-sm">
              Chat Domain
            </div>

            <div
              className={cn(
                "absolute bottom-22 left-4 top-14 z-20 flex min-h-0 flex-col gap-2 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-lg backdrop-blur-sm transition-[width,padding] duration-200 ease-out",
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
                    className="pointer-events-auto h-9 min-w-0 flex-1 justify-start gap-2 px-3 text-xs font-medium"
                    onClick={handleNewChat}
                  >
                    <SquarePen className="size-3.5 shrink-0 opacity-80" />
                    New chat
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    className="pointer-events-auto size-9"
                    onClick={handleNewChat}
                    aria-label="New chat"
                  >
                    <SquarePen className="size-3.5 opacity-80" />
                  </Button>
                )}
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  className="pointer-events-auto size-9 shrink-0"
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
                  <div className="pointer-events-auto relative shrink-0">
                    <Search
                      className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
                      aria-hidden
                    />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search chats"
                      className={cn(
                        "h-9 w-full rounded-lg border border-input bg-background pr-3 pl-8 text-xs text-foreground",
                        "placeholder:text-muted-foreground outline-none",
                        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
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
                                "pointer-events-auto flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs transition-colors",
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

            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView={false}
              proOptions={{ hideAttribution: true }}
              nodesDraggable
              nodesConnectable
              elementsSelectable={false}
              panOnScroll={false}
              zoomOnScroll
              zoomOnPinch
              onInit={onFlowInit}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              className="bg-transparent"
            >
              <Background
                variant={BackgroundVariant.Dots}
                gap={20}
                size={1}
                color="#91919a"
              />
              <Controls
                showZoom
                showFitView={false}
                showInteractive={false}
                position="bottom-left"
                className="overflow-hidden rounded-lg"
              />
              <MiniMap
                position="bottom-right"
                pannable
                zoomable
                className="rounded-lg! border! border-border! bg-card! shadow-sm!"
                nodeColor="var(--primary)"
                nodeStrokeColor="var(--border)"
                maskColor="color-mix(in oklch, var(--background) 62%, transparent)"
                maskStrokeColor="var(--border)"
                maskStrokeWidth={1}
              />
            </ReactFlow>

            <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 max-w-[calc(100%-2rem)] -translate-x-1/2">
              <div
                className="pointer-events-auto flex items-stretch rounded-xl border border-border/80 bg-card/95 py-1 pl-1 pr-1 shadow-md ring-1 ring-black/5 backdrop-blur-md dark:border-border dark:bg-card/90 dark:ring-white/10"
                role="toolbar"
                aria-label="Canvas tools"
              >
                <div className="flex items-center gap-0.5 px-1">
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-label="Select"
                  >
                    <MousePointer2 className="size-[18px] stroke-[1.75]" aria-hidden />
                  </button>
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-label="Pan"
                  >
                    <Hand className="size-[18px] stroke-[1.75]" aria-hidden />
                  </button>
                </div>
                <div className="mx-0.5 my-1 w-px shrink-0 self-stretch bg-border" aria-hidden />
                <div className="flex items-center px-1.5">
                  <button
                    type="button"
                    onClick={handleNewChat}
                    className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-label="New chat"
                  >
                    <Plus className="size-5 stroke-2" aria-hidden />
                  </button>
                </div>
                <div className="mx-0.5 my-1 w-px shrink-0 self-stretch bg-border" aria-hidden />
                <div className="flex items-center gap-0.5 px-1">
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-label="Pencil"
                  >
                    <Pencil className="size-[18px] stroke-[1.75]" aria-hidden />
                  </button>
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-label="Brush"
                  >
                    <Brush className="size-[18px] stroke-[1.75]" aria-hidden />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
