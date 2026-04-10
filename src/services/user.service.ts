// import { db } from "@/db";
// import { users } from "@/db/schema";
// import { eq } from "drizzle-orm";
import { ConflictError } from "@/lib/errors"
import type { CreateUserInput } from "@/validations/user.schema"

export const UserService = {
  /**
   * Register a new user in the system.
   * @throws {ConflictError} If user with the same email already exists.
   */
  async registerUser(data: CreateUserInput) {
    // --- 🛠️ MOCK MODE (For Template Demo) ---
    // We mock the database delay so the template works out-of-the-box without PostgreSQL setup.
    await new Promise((resolve) => setTimeout(resolve, 800))

    return {
      id: "mock-id-1234",
      name: data.name,
      email: data.email,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // -------------------------------------------------------------
    // --- 🔥 REAL MODE: UNCOMMENT BELOW FOR REAL DATABASE (DRIZZLE ORM) ---
    // -------------------------------------------------------------
    /*
    // 1. Check if user already exists
    const existingUser = await db.select().from(users).where(eq(users.email, data.email)).limit(1);
    if (existingUser.length > 0) {
      // Throwing ConflictError allows the API route to catch and return proper HTTP 409
      throw new ConflictError("User with this email already exists");
    }

    // 2. Insert new user into database
    const newUser = await db.insert(users).values({ 
      name: data.name, 
      email: data.email 
    }).returning();

    return newUser[0];
    */
  },
}
