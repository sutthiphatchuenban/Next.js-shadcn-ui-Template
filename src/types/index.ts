// Common types for the application

export interface User {
  id: string
  name: string
  email: string
  image?: string
}

/**
 * Standard API response format.
 * All API routes should return responses matching this shape.
 * @see src/lib/api-response.ts for helper functions.
 */
export interface ApiResponse<T> {
  data: T
  status: "success" | "error"
  message?: string
}

export interface ApiErrorResponse {
  status: "error"
  error: string
  details?: unknown
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface NavItem {
  title: string
  href: string
  icon?: string
}
