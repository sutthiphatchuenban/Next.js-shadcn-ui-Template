# Next.js + shadcn/ui Template

**by NISIO**

A production-ready Next.js template with TypeScript, Tailwind CSS, shadcn/ui components, and SEO optimization.

## Features

- **Next.js 16** - Latest React framework with App Router
- **React 19** - Latest React with Compiler
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - 23+ pre-installed UI components
- **Dark/Light Mode** - Theme switching with next-themes
- **SEO Ready** - Sitemap, robots, Open Graph, Manifest
- **Error Handling** - Error boundaries, loading states, 404 page
- **ESLint + Prettier** - Code linting and formatting
- **React Hook Form + Zod** - Form handling and validation

## Pre-installed Components

| Category | Components |
|----------|-----------|
| **Form** | Button, Input, Label, Textarea, Checkbox, Switch, Select, Form |
| **Display** | Card, Badge, Avatar, Skeleton, Table, Separator |
| **Overlay** | Dialog, Sheet, DropdownMenu, NavigationMenu, Tooltip |
| **Feedback** | Toast (Sonner), Tabs, ScrollArea, Collapsible |

## Quick Start

### Prerequisites

- Node.js 20+ (see [`.nvmrc`](.nvmrc))
- npm, yarn, pnpm, or bun

### Installation

1. Clone or copy this template
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Update domain in SEO files:
   - [`src/app/sitemap.ts`](src/app/sitemap.ts) - Change `example.com`
   - [`src/app/robots.ts`](src/app/robots.ts) - Change `example.com`
   - [`src/app/layout.tsx`](src/app/layout.tsx) - Update `metadataBase`
   - [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx) - Update content

5. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run type-check` | Run TypeScript check |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run clean` | Remove .next and node_modules |
| `npm run clean:next` | Remove .next only |

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/                # API routes
│   │   │   └── health/         # Health check endpoint
│   │   ├── sitemap.ts          # SEO sitemap
│   │   ├── robots.ts           # SEO robots.txt
│   │   ├── manifest.ts         # Web app manifest
│   │   ├── opengraph-image.tsx # Open Graph image
│   │   ├── error.tsx           # Error boundary
│   │   ├── loading.tsx         # Loading UI
│   │   ├── not-found.tsx       # 404 page
│   │   ├── layout.tsx          # Root layout + metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── providers/
│   │   │   └── theme-provider.tsx  # Dark/light mode provider
│   │   └── mode-toggle.tsx     # Theme toggle button
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-local-storage.ts
│   │   └── use-debounce.ts
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn)
│   └── types/
│       └── index.ts            # TypeScript types
├── public/                     # Static assets
├── .env.example                # Environment variables template
├── .nvmrc                      # Node.js version lock
├── components.json             # shadcn/ui config
├── next.config.ts              # Next.js config
├── prettier.config.mjs         # Prettier config
└── .vscode/                    # VS Code settings
    ├── extensions.json         # Recommended extensions
    └── settings.json           # Editor settings
```

## Custom Hooks

### useLocalStorage

Persist state to localStorage with type safety:

```tsx
import { useLocalStorage } from "@/hooks/use-local-storage"

function MyComponent() {
  const [value, setValue] = useLocalStorage("key", defaultValue)
  // ...
}
```

### useDebounce

Debounce values for search/filter:

```tsx
import { useDebounce } from "@/hooks/use-debounce"

function Search() {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 500)
  // Use debouncedSearch for API calls
}
```

## Theming

### Dark/Light Mode

The template includes a theme toggle button and supports:
- Light mode
- Dark mode
- System preference

Toggle theme programmatically:

```tsx
import { useTheme } from "next-themes"

function MyComponent() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme("dark")}>
      Switch to dark mode
    </button>
  )
}
```

### Customizing Theme

Edit CSS variables in [`src/app/globals.css`](src/app/globals.css):

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... */
}
```

## SEO

The template includes comprehensive SEO setup:

- **Sitemap** - Auto-generated at `/sitemap.xml`
- **Robots** - Configured at `/robots.txt`
- **Open Graph** - Social sharing images
- **Manifest** - PWA support
- **Metadata** - Complete meta tags in layout

Update your domain in:
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/layout.tsx` (metadataBase)

## Adding Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

Example:
```bash
npx shadcn@latest add calendar
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (if needed)
# DATABASE_URL=

# Authentication (if needed)
# NEXTAUTH_SECRET=
# NEXTAUTH_URL=
```

## Deployment

### Vercel (Recommended)

```bash
npm run build
```

### Other Platforms

Make sure to set the Node.js version to match [`.nvmrc`](.nvmrc):

```bash
node -v  # Should show v20.11.0 or higher
```

## Customization

### Base Color

Current template uses **neutral** base color. To change:

```bash
npx shadcn@latest init
# Select different base color
```

### Fonts

The template uses Geist font. To change, edit [`src/app/layout.tsx`](src/app/layout.tsx).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT License - see [LICENSE](LICENSE) file

---

**Built by NISIO** 🚀
