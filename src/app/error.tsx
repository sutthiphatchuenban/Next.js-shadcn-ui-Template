"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-destructive">Something went wrong!</CardTitle>
          <CardDescription>An error occurred while loading this page.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error.message && (
            <p className="text-muted-foreground bg-muted rounded p-3 text-sm">{error.message}</p>
          )}
          <Button onClick={reset} className="w-full">
            Try again
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
