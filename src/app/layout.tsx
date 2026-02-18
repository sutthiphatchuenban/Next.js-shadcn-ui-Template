import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js + shadcn/ui Template by NISIO",
    template: "%s | Next.js Template",
  },
  description: "A production-ready Next.js template with TypeScript, Tailwind CSS, and shadcn/ui components by NISIO",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Template"],
  authors: [{ name: "NISIO" }],
  creator: "NISIO",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Next.js + shadcn/ui Template by NISIO",
    description: "A production-ready Next.js template with TypeScript, Tailwind CSS, and shadcn/ui components",
    siteName: "Next.js Template",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js + shadcn/ui Template by NISIO",
    description: "A production-ready Next.js template with TypeScript, Tailwind CSS, and shadcn/ui components",
    creator: "@nisio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
