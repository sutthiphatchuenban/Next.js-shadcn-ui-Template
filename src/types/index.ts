// Common types for the application

export interface User {
  id: string
  name: string
  email: string
  image?: string
}

export interface ApiResponse<T> {
  data: T
  status: "success" | "error"
  message?: string
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
