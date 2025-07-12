import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(2000, 'Message must be less than 2000 characters'),
  // Honeypot field for spam protection
  website: z.string().optional()
})

export type ContactFormData = z.infer<typeof contactFormSchema>