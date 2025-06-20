import { z } from "zod";

export const authValidations = z.object({
  username: z.string().min(3).max(999),
  email: z.string().email("Invalid email format"),
//   password: z
    // .string()
    // .min(8, "Password must be at least 8 characters")
    // .max(100, "Password cannot exceed 100 characters")
    // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    // .regex(/[0-9]/, "Password must contain at least one number")
    // .regex(
    //   /[^A-Za-z0-9]/,
    //   "Password must contain at least one special character"
    // )
    // .refine(
    //   (password) => !/\s/.test(password),
    //   "Password cannot contain whitespace"
    // ),
    password : z.string().min(6, "Password must be at least 6 characters").max(999).trim()
});
