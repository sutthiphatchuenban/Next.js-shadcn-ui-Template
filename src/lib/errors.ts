/**
 * Custom error classes for consistent error handling across the application.
 * Use these in Service layer → caught by API route handlers for proper HTTP responses.
 */

export class AppError extends Error {
  public readonly statusCode: number

  constructor(message: string, statusCode: number = 500) {
    super(message)
    this.name = "AppError"
    this.statusCode = statusCode
  }
}

export class BadRequestError extends AppError {
  constructor(message: string = "Bad Request") {
    super(message, 400)
    this.name = "BadRequestError"
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Resource not found") {
    super(message, 404)
    this.name = "NotFoundError"
  }
}

export class ConflictError extends AppError {
  constructor(message: string = "Resource already exists") {
    super(message, 409)
    this.name = "ConflictError"
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized") {
    super(message, 401)
    this.name = "UnauthorizedError"
  }
}

/**
 * Helper to extract a safe error message from an unknown caught value.
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === "string") return error
  return "An unexpected error occurred"
}

/**
 * Helper to extract status code from an error (defaults to 500).
 */
export function getErrorStatusCode(error: unknown): number {
  if (error instanceof AppError) return error.statusCode
  return 500
}
