import { createUserSchema } from "@/validations/user.schema"
import { UserService } from "@/services/user.service"
import { apiSuccess, apiError, apiValidationError } from "@/lib/api-response"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // 1. Validate Input (Client Payload)
    const parsedData = createUserSchema.safeParse(body)
    if (!parsedData.success) {
      return apiValidationError(parsedData.error.flatten())
    }

    // 2. Pass data to Service Layer to handle Business Logic and Database
    const newUser = await UserService.registerUser(parsedData.data)
    return apiSuccess(newUser, 201, "User registered successfully")
  } catch (error: unknown) {
    return apiError(error)
  }
}
