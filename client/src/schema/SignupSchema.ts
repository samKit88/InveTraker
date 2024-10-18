import { z } from 'zod'

export const signupSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
})

// export const responseUserSchema = z.object({
//   email: z.string().email(),
//   password: z.string(),
// })

// export interface TokenResponse {
//   user: ResponseUserShcema
//   accessToken: string
//   refreshToken: string
// }

export type SignupForm = z.infer<typeof signupSchema>
// export type ResponseUserShcema = z.infer<typeof responseUserSchema>
