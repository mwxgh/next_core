import { z } from 'zod'

const passwordSchema = z
  .string()
  .min(6, { message: 'Password must be at least 6 characters long' })
  .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' })

const emailSchema = z.string().email({ message: 'Invalid email address' })

const signupFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters long' }),
    email: emailSchema,
    phone: z.string().min(10, { message: 'Phone number must be valid' }),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export { signupFormSchema, loginFormSchema }
