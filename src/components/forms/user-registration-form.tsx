"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

export function UserRegistrationForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    }

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Failed to register")
      }

      toast.success(`Welcome, ${result.data?.name}!`, {
        description: "User registered successfully.",
      })

      // Reset form on success
      e.currentTarget.reset()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong"
      toast.error("Registration failed", { description: message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Register User</CardTitle>
        <CardDescription>Test the Drizzle ORM + REST API flow.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="register-name">Name</Label>
            <Input id="register-name" name="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-email">Email</Label>
            <Input
              id="register-email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>
          <Button disabled={loading} className="w-full">
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
