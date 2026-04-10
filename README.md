# 🚀 Next.js + shadcn/ui Template

<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2016-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16">
  <img src="https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui">
  <img src="https://img.shields.io/badge/Drizzle%20ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM">
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod">
</p>

<p align="center">
  <b>by NISIO</b>
</p>

<p align="center">
  A production-ready Next.js 16 template with enterprise-grade architecture: layered API pattern, type-safe error handling, consistent API responses, and 23+ shadcn/ui components.
</p>

> 💡 **Note:** This is just a starting template! Feel free to completely edit, customize, or delete any part of this code to suit your project's needs.

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-documentation">Docs</a>
</p>

---

## ✨ Features

| Feature                      | Description                                |
| ---------------------------- | ------------------------------------------ |
| ⚡ **Next.js 16**            | Latest React framework with App Router     |
| 🔄 **React 19**              | Latest React with Compiler                 |
| 🛡️ **TypeScript**            | Strict type-safe development               |
| 🎨 **Tailwind CSS 4**        | Utility-first CSS framework                |
| 🧩 **shadcn/ui**             | 23+ pre-installed UI components            |
| 🌓 **Dark/Light Mode**       | Theme switching with next-themes           |
| 🔍 **SEO Ready**             | Sitemap, robots, Open Graph, Manifest      |
| 🛠️ **Error Handling**        | Custom error classes + error boundaries    |
| 📝 **ESLint + Prettier**     | Code linting and formatting                |
| ✅ **Zod Validation**        | Type-safe input validation                 |
| 🗄️ **Drizzle ORM**           | Type-safe database queries (PostgreSQL)    |
| 🔒 **Proxy (Middleware)**    | Security headers + auth-ready              |
| 📦 **Barrel Exports**        | Clean imports via index.ts in all modules  |
| 🎯 **Consistent API**        | apiSuccess/apiError helpers for all routes |

---

## 🧩 Pre-installed Components

<div align="center">

| 📋 **Form** | 🖼️ **Display** | 🎯 **Overlay** | 💬 **Feedback** |
| :---------: | :------------: | :------------: | :-------------: |
|   Button    |      Card      |     Dialog     | Toast (Sonner)  |
|    Input    |     Badge      |     Sheet      |      Tabs       |
|    Label    |     Avatar     |  DropdownMenu  |   ScrollArea    |
|  Textarea   |    Skeleton    | NavigationMenu |   Collapsible   |
|  Checkbox   |     Table      |    Tooltip     |                 |
|   Switch    |   Separator    |                |                 |
|   Select    |                |                |                 |
|    Form     |                |                |                 |

</div>

---

## 🚀 Quick Start

### 📋 Prerequisites

- **Node.js 20+** (see [`.nvmrc`](.nvmrc))
- npm, yarn, pnpm, or bun

### 📦 Installation

```bash
# 1. Clone or copy this template
git clone https://github.com/sutthiphatchuenban/Next.js-shadcn-ui-Template.git

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env
```

### ⚙️ Configuration

Update your domain in SEO files:

| File                                                         | What to Change        |
| ------------------------------------------------------------ | --------------------- |
| [`src/app/sitemap.ts`](src/app/sitemap.ts)                   | Change `example.com`  |
| [`src/app/robots.ts`](src/app/robots.ts)                     | Change `example.com`  |
| [`src/app/layout.tsx`](src/app/layout.tsx)                   | Update `metadataBase` |
| [`src/config/site.ts`](src/config/site.ts)                   | Update `name`, `url`  |
| [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx) | Update content        |

### ▶️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript check
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Database (Drizzle ORM)
npm run db:generate  # Generate schema migrations
npm run db:push      # Push schema directly to database
npm run db:migrate   # Run migrations
npm run db:studio    # Open Drizzle UI Studio

# Maintenance
npm run clean        # Remove .next and node_modules
npm run clean:next   # Remove .next only
```

---

## 📁 Project Structure

```
📦 your-project
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router & API Routes
│   │   ├── 📂 api/
│   │   │   ├── 📂 health/        # GET /api/health — health check
│   │   │   └── 📂 users/         # POST /api/users — user registration
│   │   ├── 📂 about/             # About page
│   │   ├── 📄 layout.tsx         # Root layout with metadata & providers
│   │   ├── 📄 page.tsx           # Home page
│   │   ├── 📄 error.tsx          # Error boundary
│   │   ├── 📄 loading.tsx        # Loading skeleton
│   │   └── 📄 not-found.tsx      # 404 page
│   ├── 📂 components/
│   │   ├── 📂 forms/             # Form components (UserRegistrationForm)
│   │   ├── 📂 layout/            # Shared layout (Header, Footer)
│   │   ├── 📂 providers/         # Context providers (ThemeProvider)
│   │   └── 📂 ui/                # shadcn/ui primitives (23 components)
│   ├── 📂 config/                # Site configuration (name, URL)
│   ├── 📂 db/                    # Drizzle ORM (schema, safe connection)
│   ├── 📂 hooks/                 # Custom hooks + barrel export
│   ├── 📂 lib/                   # Core utilities
│   │   ├── 📄 utils.ts           # cn() helper
│   │   ├── 📄 errors.ts          # AppError, ConflictError, NotFoundError…
│   │   └── 📄 api-response.ts    # apiSuccess(), apiError(), apiValidationError()
│   ├── 📂 services/              # Business logic layer + barrel export
│   ├── 📂 types/                 # Shared TypeScript types
│   ├── 📂 validations/           # Zod schemas + barrel export
│   └── 📄 proxy.ts               # Next.js 16 proxy (security headers)
├── 📂 public/                     # Static assets
│
├── 📄 .env.example                # Environment variables template
├── 📄 .nvmrc                      # Node.js version lock
├── 📄 components.json             # shadcn/ui config
├── 📄 drizzle.config.ts           # Drizzle ORM config
├── 📄 next.config.ts              # Next.js config (React Compiler enabled)
├── 📄 eslint.config.mjs           # ESLint flat config
└── 📄 prettier.config.mjs         # Prettier config
```

---

## 🏗️ Architecture

### Layered API Pattern

All API routes follow a consistent layered pattern:

```
Request → Route Handler (validate with Zod)
       → Service Layer (business logic)
       → Database (Drizzle ORM)
       → apiSuccess() / apiError() response
```

### Consistent API Responses

Every API endpoint returns the same response shape using helpers from `lib/api-response.ts`:

```typescript
// ✅ Success response
apiSuccess(data, 201, "User created")
// → { status: "success", data: {...}, message: "User created" }

// ❌ Error response (auto-extracts status from AppError)
apiError(error)
// → { status: "error", error: "User with this email already exists" }

// ⚠️ Validation error
apiValidationError(zodError.flatten())
// → { status: "error", error: "Validation failed", details: {...} }
```

### Type-safe Error Handling

Custom error classes in `lib/errors.ts` let services throw meaningful errors:

```typescript
import { ConflictError, NotFoundError } from "@/lib/errors"

// In service layer
throw new ConflictError("User with this email already exists") // → HTTP 409
throw new NotFoundError("User not found")                      // → HTTP 404

// In route handler — just catch and let the helper extract the status code
catch (error: unknown) {
  return apiError(error) // automatically returns correct HTTP status
}
```

Available error classes: `AppError`, `BadRequestError`, `NotFoundError`, `ConflictError`, `UnauthorizedError`.

### Barrel Exports

Every module has an `index.ts` for clean imports:

```typescript
// Instead of deep imports:
import { UserService } from "@/services/user.service"
import { useDebounce } from "@/hooks/use-debounce"

// Use clean barrel imports:
import { UserService } from "@/services"
import { useDebounce, useLocalStorage } from "@/hooks"
import { createUserSchema } from "@/validations"
```

---

## 🪝 Custom Hooks

### 🔒 useLocalStorage

Persist state to localStorage with type safety:

```tsx
import { useLocalStorage } from "@/hooks"

function MyComponent() {
  const [value, setValue] = useLocalStorage("key", defaultValue)
  // ...
}
```

### ⏱️ useDebounce

Debounce values for search/filter:

```tsx
import { useDebounce } from "@/hooks"

function Search() {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 500)
  // Use debouncedSearch for API calls
}
```

---

## 🎨 Theming

### 🌓 Dark/Light Mode

The template includes a theme toggle button and supports:

| Mode      | Description             |
| --------- | ----------------------- |
| ☀️ Light  | Clean, bright interface |
| 🌙 Dark   | Easy on the eyes        |
| 💻 System | Auto-detect preference  |

Toggle theme programmatically:

```tsx
import { useTheme } from "next-themes"

function MyComponent() {
  const { theme, setTheme } = useTheme()

  return <button onClick={() => setTheme("dark")}>Switch to dark mode</button>
}
```

### 🎨 Customizing Theme

Edit CSS variables in [`src/app/globals.css`](src/app/globals.css):

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... */
}
```

---

## 🔍 SEO

The template includes comprehensive SEO setup:

| Feature           | Path                    | Description        |
| ----------------- | ----------------------- | ------------------ |
| 🗺️ **Sitemap**    | `/sitemap.xml`          | Auto-generated     |
| 🤖 **Robots**     | `/robots.txt`           | Configured         |
| 📱 **Open Graph** | `/opengraph-image`      | Social sharing     |
| 📲 **Manifest**   | `/manifest.webmanifest` | PWA support        |
| 🏷️ **Metadata**   | `layout.tsx`            | Complete meta tags |

Update your domain in:

- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/layout.tsx` (metadataBase)
- `src/config/site.ts`

---

## 🔒 Proxy (Middleware)

The `src/proxy.ts` file (Next.js 16's replacement for `middleware.ts`) runs before every matched request:

- **Security headers** — X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Auth-ready** — add authentication checks as your project grows
- **Rate limiting** — add rate limiting logic when needed

```typescript
// src/proxy.ts
export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set("X-Frame-Options", "DENY")
  // Add your auth/rate-limiting logic here
  return response
}
```

---

## ➕ Adding Components

```bash
# Add a shadcn/ui component
npx shadcn@latest add <component-name>

# Example
npx shadcn@latest add calendar
```

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (PostgreSQL)
DATABASE_URL="postgresql://postgres:password@localhost:5432/my-db-name"
```

> 💡 The template works without `DATABASE_URL` — it will run in mock mode and show a console warning instead of crashing.

---

## 🚀 Deployment

### ▲ Vercel (Recommended)

```bash
npm run build
```

### 🌐 Other Platforms

Make sure to set the Node.js version to match [`.nvmrc`](.nvmrc):

```bash
node -v  # Should show v20.11.0 or higher
```

---

## 🛠️ Customization

### 🎨 Base Color

Current template uses **neutral** base color. To change:

```bash
npx shadcn@latest init
# Select different base color
```

### ✒️ Fonts

The template uses Geist font. To change, edit [`src/app/layout.tsx`](src/app/layout.tsx).

---

## 📚 Documentation

<p align="center">
  <a href="https://nextjs.org/docs">
    <img src="https://img.shields.io/badge/Next.js%20Docs-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js">
  </a>
  <a href="https://ui.shadcn.com/docs">
    <img src="https://img.shields.io/badge/shadcn%2Fui%20Docs-000000?style=flat-square&logo=shadcnui&logoColor=white" alt="shadcn/ui">
  </a>
  <a href="https://tailwindcss.com/docs">
    <img src="https://img.shields.io/badge/Tailwind%20CSS%20Docs-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  </a>
  <a href="https://orm.drizzle.team/docs/overview">
    <img src="https://img.shields.io/badge/Drizzle%20ORM%20Docs-C5F74F?style=flat-square&logo=drizzle&logoColor=black" alt="Drizzle ORM">
  </a>
</p>

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file

---

<p align="center">
  <b>Built by NISIO</b> 🚀
</p>

<p align="center">
  <i>Happy coding! ✨</i>
</p>
