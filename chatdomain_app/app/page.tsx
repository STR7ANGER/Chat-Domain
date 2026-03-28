"use client"

import { useCallback } from "react"
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  type Connection,
} from "reactflow"
import "reactflow/dist/style.css"
import Sidebar from "@/components/product/sidebar"
import Toolbar from "@/components/product/toolbar"

const FLOW_CHROME_CSS = `
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
html.dark .product-flow-mock .react-flow__minimap-node {
  fill: #ffffff !important;
}
.product-flow-mock .react-flow__node-default,
.product-flow-mock .react-flow__node-input,
.product-flow-mock .react-flow__node-output {
  background-color: var(--card) !important;
  color: var(--card-foreground) !important;
  border: 1px solid var(--border) !important;
  box-shadow: 0 12px 30px -18px color-mix(in oklch, var(--foreground) 35%, transparent) !important;
}
.product-flow-mock .react-flow__node-default .react-flow__node-text,
.product-flow-mock .react-flow__node-input .react-flow__node-text,
.product-flow-mock .react-flow__node-output .react-flow__node-text {
  color: inherit !important;
}
`

const initialNodes = [
  {
    id: "idea",
    position: { x: 0, y: 0 },
    data: { label: "Seed Idea" },
    type: "input",
  },
  {
    id: "path-a",
    position: { x: -220, y: 160 },
    data: { label: "Path A" },
  },
  {
    id: "path-b",
    position: { x: 220, y: 160 },
    data: { label: "Path B" },
  },
  {
    id: "summary",
    position: { x: 0, y: 320 },
    data: { label: "Summary / Doc" },
    type: "output",
  },
]

const initialEdges = [
  { id: "e-idea-a", source: "idea", target: "path-a" },
  { id: "e-idea-b", source: "idea", target: "path-b" },
  { id: "e-a-summary", source: "path-a", target: "summary" },
  { id: "e-b-summary", source: "path-b", target: "summary" },
]

const Page = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds))
    },
    [setEdges]
  )

  return (
    <main className="relative h-screen w-screen bg-background text-foreground">
      <style dangerouslySetInnerHTML={{ __html: FLOW_CHROME_CSS }} />
      <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-foreground shadow-sm">
        Chat Domain
      </div>

      <Sidebar />
      <Toolbar />

      <div className="product-flow-mock absolute inset-0">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          className="bg-gradient-to-br from-background via-background to-muted/40"
          nodeClassName="rounded-lg border border-border bg-card/80 px-4 py-2 text-sm text-foreground shadow-lg backdrop-blur"
          edgeOptions={{ style: { stroke: "hsl(var(--muted-foreground))", strokeWidth: 1.2 } }}
        >
          <Background color="hsl(var(--border))" gap={24} size={1} />
          <Controls
            showZoom
            showFitView
            showInteractive
            position="bottom-left"
            className="overflow-hidden rounded-lg"
          />
          <MiniMap
            position="bottom-right"
            pannable
            zoomable
            className="rounded-lg! border! border-border! bg-card! shadow-sm!"
            nodeColor="hsl(var(--primary))"
            nodeStrokeColor="hsl(var(--border))"
            maskColor="color-mix(in oklch, hsl(var(--background)) 62%, transparent)"
            maskStrokeColor="hsl(var(--border))"
            maskStrokeWidth={1}
          />
        </ReactFlow>
      </div>
    </main>
  )
}

export default Page
