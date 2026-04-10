import { NextResponse } from "next/server"
import { AppError, getErrorMessage, getErrorStatusCode } from "./errors"

/**
 * Standard API response wrapper for consistent JSON responses.
 * Use these helpers in all API route handlers.
 */

interface SuccessResponse<T> {
  status: "success"
  data: T
  message?: string
}

interface ErrorResponse {
  status: "error"
  error: string
  details?: unknown
}

/**
 * Return a success JSON response.
 */
export function apiSuccess<T>(data: T, status: number = 200, message?: string) {
  const body: SuccessResponse<T> = { status: "success", data }
  if (message) body.message = message
  return NextResponse.json(body, { status })
}

/**
 * Return an error JSON response from an unknown caught error.
 */
export function apiError(error: unknown, fallbackStatus?: number) {
  const message = getErrorMessage(error)
  const status = fallbackStatus ?? getErrorStatusCode(error)
  const body: ErrorResponse = { status: "error", error: message }
  return NextResponse.json(body, { status })
}

/**
 * Return a validation error JSON response (400).
 */
export function apiValidationError(details: unknown) {
  const body: ErrorResponse = {
    status: "error",
    error: "Validation failed",
    details,
  }
  return NextResponse.json(body, { status: 400 })
}
