import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Next.js Middleware
 *
 * This runs before every matched request. Use it for:
 * - Authentication / Authorization checks
 * - Rate limiting
 * - Redirects & rewrites
 * - Adding custom headers (e.g. CSP, CORS)
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 */
export function proxy(request: NextRequest) {
  // Example: Add security headers to all responses
  const response = NextResponse.next()

  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

/**
 * Configure which routes the middleware applies to.
 * By default, it runs on all routes except static files and images.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}
