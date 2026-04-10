import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { UserRegistrationForm } from "@/components/forms/user-registration-form"
import Link from "next/link"
import { Lightbulb, ShieldCheck, Layers, Blocks, Database } from "lucide-react"

const features = [
  { name: "Next.js 16", desc: "React Framework with App Router", badge: "App Router" },
  { name: "React 19", desc: "Latest React with Compiler", badge: "New" },
  { name: "TypeScript", desc: "Strict type-safe development", badge: "Strict" },
  { name: "Tailwind CSS 4", desc: "Utility-first styling", badge: "v4" },
  { name: "shadcn/ui", desc: "23+ pre-installed UI components", badge: "Ready" },
  { name: "Drizzle ORM", desc: "Type-safe database queries", badge: "PostgreSQL" },
]

const architectureHighlights = [
  {
    icon: Layers,
    title: "Layered API Pattern",
    desc: "Route → Service → Database with clean separation of concerns.",
  },
  {
    icon: ShieldCheck,
    title: "Type-safe Error Handling",
    desc: "Custom AppError classes with consistent API responses via apiSuccess/apiError helpers.",
  },
  {
    icon: Blocks,
    title: "Barrel Exports",
    desc: "Clean imports like `from \"@/services\"` — every module has an index.ts.",
  },
  {
    icon: Database,
    title: "Mock Mode Built-in",
    desc: "Runs without PostgreSQL — safe DB guard with helpful warnings.",
  },
]

const components = [
  "Button",
  "Card",
  "Input",
  "Label",
  "Badge",
  "Avatar",
  "Dialog",
  "Sheet",
  "DropdownMenu",
  "Tooltip",
  "Tabs",
  "Select",
  "Checkbox",
  "Switch",
  "Form",
  "Table",
  "Skeleton",
  "Toast (Sonner)",
  "ScrollArea",
  "Collapsible",
  "NavigationMenu",
  "Separator",
  "Textarea",
]

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          by NISIO · Template v0.2.0
        </Badge>
        <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Next.js + shadcn/ui
          <span className="text-primary"> Template</span>
        </h1>
        <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg">
          A production-ready Next.js 16 template with TypeScript, Tailwind CSS 4, Drizzle ORM, and
          23+ pre-installed shadcn/ui components. Enterprise architecture out of the box.
        </p>

        <div className="mx-auto max-w-2xl mb-8 p-4 bg-muted text-muted-foreground rounded-lg text-sm border">
          <strong className="text-foreground inline-flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-yellow-500" /> Note:
          </strong>{" "}
          This project is purely a starter template. Every single file, page, component, and title
          can be freely edited, rewritten, or deleted to fit your project. Make it yours!
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/about">How it works</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/api/health" target="_blank">
              Test API
            </a>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.name}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{feature.name}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardDescription>{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Architecture Highlights Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center text-3xl font-bold">Architecture Highlights</h2>
        <p className="text-muted-foreground mb-8 text-center">
          Built with professional patterns that scale from prototype to production.
        </p>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {architectureHighlights.map((item) => (
            <Card key={item.title}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </div>
                <CardDescription className="pt-1">{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Components Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center text-3xl font-bold">Pre-installed Components</h2>
        <p className="text-muted-foreground mb-8 text-center">
          All components are ready to use. Import from{" "}
          <code className="bg-muted rounded px-2 py-1 text-sm">@/components/ui</code>
        </p>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap justify-center gap-2">
              {components.map((component) => (
                <Badge key={component} variant="secondary" className="px-3 py-1 text-sm">
                  {component}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Getting Started + API Demo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Follow these steps to start building</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">1. Install dependencies</p>
                <pre className="bg-muted overflow-x-auto rounded-lg p-3 text-sm">
                  <code>npm install</code>
                </pre>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">2. Copy environment variables</p>
                <pre className="bg-muted overflow-x-auto rounded-lg p-3 text-sm">
                  <code>cp .env.example .env</code>
                </pre>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">3. Start development server</p>
                <pre className="bg-muted overflow-x-auto rounded-lg p-3 text-sm">
                  <code>npm run dev</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Example</CardTitle>
              <CardDescription>Consistent response format across all endpoints</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                All API routes use standardized <code className="bg-muted rounded px-1">apiSuccess()</code> / <code className="bg-muted rounded px-1">apiError()</code> helpers:
              </p>
              <pre className="bg-muted overflow-x-auto rounded-lg p-3 text-sm">
                <code>{`GET /api/health
→ { status: "success", data: {...} }`}</code>
              </pre>
              <Button variant="outline" className="w-full" asChild>
                <a href="/api/health" target="_blank">
                  Try Health Endpoint
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Database Demo Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold">Try Drizzle ORM + REST API</h2>
          <p className="text-muted-foreground mb-8 text-center text-sm">
            This form calls <code className="bg-muted rounded px-1">POST /api/users</code> → validated by Zod → processed by UserService → returns consistent API response.
          </p>
          <div className="flex justify-center">
            <UserRegistrationForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
