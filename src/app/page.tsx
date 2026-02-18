import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

const features = [
  { name: "Next.js 16", desc: "React Framework", badge: "App Router" },
  { name: "React 19", desc: "Latest React with Compiler", badge: "New" },
  { name: "TypeScript", desc: "Type-safe development", badge: "Strict" },
  { name: "Tailwind CSS 4", desc: "Utility-first styling", badge: "v4" },
  { name: "shadcn/ui", desc: "23+ UI components", badge: "Ready" },
];

const components = [
  "Button", "Card", "Input", "Label", "Badge", "Avatar", "Dialog", 
  "Sheet", "DropdownMenu", "Tooltip", "Tabs", "Select", "Checkbox", 
  "Switch", "Form", "Table", "Skeleton", "Toast (Sonner)", "ScrollArea",
  "Collapsible", "NavigationMenu", "Separator", "Textarea"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 right-0 p-4">
        <ModeToggle />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          by NISIO · Template v0.1.0
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
          Next.js + shadcn/ui
          <span className="text-primary"> Template</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          A production-ready Next.js template with TypeScript, Tailwind CSS, 
          and 23+ pre-installed shadcn/ui components.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
              Next.js Docs
            </a>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
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

      {/* Components Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Pre-installed Components</h2>
        <p className="text-center text-muted-foreground mb-8">
          All components are ready to use. Import from <code className="text-sm bg-muted px-2 py-1 rounded">@/components/ui</code>
        </p>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {components.map((component) => (
                <Badge key={component} variant="secondary" className="text-sm py-1 px-3">
                  {component}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Getting Started Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Follow these steps to start building
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">1. Install dependencies</p>
                <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
                  <code>npm install</code>
                </pre>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">2. Copy environment variables</p>
                <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
                  <code>cp .env.example .env</code>
                </pre>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">3. Start development server</p>
                <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
                  <code>npm run dev</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Example</CardTitle>
              <CardDescription>
                Test the health endpoint
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                A sample API route is included at:
              </p>
              <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
                <code>GET /api/health</code>
              </pre>
              <Button variant="outline" className="w-full" asChild>
                <a href="/api/health" target="_blank">
                  Test API
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-muted-foreground">
        <p className="text-sm">
          Built by NISIO with Next.js + shadcn/ui · Edit{" "}
          <code className="text-sm bg-muted px-1 rounded">src/app/page.tsx</code>{" "}
          to customize this page
        </p>
      </footer>
    </main>
  );
}
