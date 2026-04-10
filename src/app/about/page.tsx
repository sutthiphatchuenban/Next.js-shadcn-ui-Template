import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <div className="container mx-auto max-w-3xl px-4 py-16">
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/">← Back to Home</Link>
          </Button>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">About This Template</h1>
          <p className="text-muted-foreground text-xl">
            Everything you need to know about the architecture and how to use it.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="space-y-12">
          {/* Section 1: What is it? */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Badge>Overview</Badge>
              <h2 className="text-2xl font-semibold">What is this?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This is a <strong>Production-ready Boilerplate</strong> for building modern web
              applications. It combines the power of Next.js 16 (App Router) for the frontend and
              backend, with shadcn/ui for beautiful and accessible components. It is designed to be
              as clean and understandable as possible, meaning there is no
              &quot;over-engineering&quot;.
            </p>
          </section>

          {/* Section 2: Architecture */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="secondary">Structure</Badge>
              <h2 className="text-2xl font-semibold">How is it structured?</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We use a <strong>Flat Architecture</strong> so you don&apos;t have to search through
              10 nested folders to find a component. Here is where things live:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary text-base font-bold">app/</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Next.js Page routes and REST API endpoints.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary text-base font-bold">components/</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  React UI — shadcn/ui primitives, forms, layout (header/footer), and providers.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary text-base font-bold">lib/</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Core utilities — cn(), custom error classes (AppError), and API response helpers
                  (apiSuccess/apiError).
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary text-base font-bold">services/</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Business logic layer — isolated from API routes, throws typed errors for proper
                  HTTP status codes.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary text-base font-bold">validations/</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Zod schemas for strict input validation — used by both API routes and forms.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary text-base font-bold">db/</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Drizzle ORM — schema definitions and safe database connection with mock mode
                  fallback.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary text-base font-bold">config/</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Global site configuration constants (name, description, URL).
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary text-base font-bold">hooks/</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Custom React hooks — useDebounce, useLocalStorage with barrel exports.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary text-base font-bold">types/</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Shared TypeScript types — ApiResponse, User, NavItem, PaginatedResponse.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: API Architecture */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="outline">API</Badge>
              <h2 className="text-2xl font-semibold">How do API routes work?</h2>
            </div>
            <Card className="bg-muted/50 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="mb-4 text-sm leading-relaxed">
                  All API routes follow a <strong>layered pattern</strong> with consistent response
                  formatting:
                </p>
                <div className="mb-4 overflow-x-auto">
                  <pre className="bg-background rounded-lg p-4 text-sm">
                    <code>{`Request → Route Handler (validate with Zod)
       → Service Layer (business logic)
       → Database (Drizzle ORM)
       → apiSuccess() / apiError() response`}</code>
                  </pre>
                </div>
                <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm">
                  <li>
                    <strong>Route handlers</strong> validate input and return consistent JSON using{" "}
                    <code className="bg-background rounded px-1">apiSuccess()</code>,{" "}
                    <code className="bg-background rounded px-1">apiError()</code>, and{" "}
                    <code className="bg-background rounded px-1">apiValidationError()</code>.
                  </li>
                  <li>
                    <strong>Services</strong> throw typed errors like{" "}
                    <code className="bg-background rounded px-1">ConflictError</code> or{" "}
                    <code className="bg-background rounded px-1">NotFoundError</code> — the route
                    handler catches them and returns the correct HTTP status automatically.
                  </li>
                  <li>
                    <strong>No more <code>any</code></strong> — all caught errors use{" "}
                    <code className="bg-background rounded px-1">unknown</code> with proper type
                    narrowing.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Database */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="outline">Database</Badge>
              <h2 className="text-2xl font-semibold">How does the Database work?</h2>
            </div>
            <Card className="bg-muted/50 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="mb-4 text-sm leading-relaxed">
                  The template is pre-configured with <strong>Drizzle ORM</strong> targeting
                  PostgreSQL. Out-of-the-box it runs in a <strong>&quot;Mock Mode&quot;</strong> so
                  the template works without any database setup.
                </p>
                <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm">
                  <li>
                    <strong>Mock Mode (default):</strong> The{" "}
                    <code className="bg-background rounded px-1">db/index.ts</code> safely exports{" "}
                    <code className="bg-background rounded px-1">undefined</code> when{" "}
                    <code className="bg-background rounded px-1">DATABASE_URL</code> is not set —
                    no crashes, just a console warning.
                  </li>
                  <li>
                    <strong>Real Mode:</strong> Copy{" "}
                    <code className="bg-background rounded px-1">.env.example</code> to{" "}
                    <code className="bg-background rounded px-1">.env</code>, add your PostgreSQL
                    URL, then uncomment the Drizzle queries in{" "}
                    <code className="bg-background rounded px-1">user.service.ts</code>.
                  </li>
                  <li>
                    Run <code className="bg-background rounded px-1">npm run db:push</code> to sync
                    the schema and{" "}
                    <code className="bg-background rounded px-1">npm run db:studio</code> to browse
                    data visually.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Section 5: Proxy */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="outline">Security</Badge>
              <h2 className="text-2xl font-semibold">Proxy (Middleware)</h2>
            </div>
            <Card className="bg-muted/50 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="mb-4 text-sm leading-relaxed">
                  The template includes a{" "}
                  <code className="bg-background rounded px-1">src/proxy.ts</code> file (Next.js
                  16&apos;s replacement for middleware.ts) that runs before every matched request:
                </p>
                <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm">
                  <li>
                    <strong>Security headers</strong> — X-Frame-Options, X-Content-Type-Options,
                    Referrer-Policy are set by default.
                  </li>
                  <li>
                    <strong>Ready for auth</strong> — add authentication checks, rate limiting, or
                    redirects as your project grows.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
