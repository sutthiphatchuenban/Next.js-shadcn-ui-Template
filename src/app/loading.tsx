import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-4xl space-y-6">
        <div className="flex items-center justify-center py-20">
          <div className="space-y-4 text-center">
            <Skeleton className="mx-auto h-8 w-32" />
            <Skeleton className="mx-auto h-12 w-64" />
            <Skeleton className="mx-auto h-6 w-96" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(5)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-3">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-32" />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
