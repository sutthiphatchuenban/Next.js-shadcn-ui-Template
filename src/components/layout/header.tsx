import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"

export function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="text-foreground text-lg font-bold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            About
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
