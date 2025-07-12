import { contactFormSchema } from '~/types/contact'
import { useStrapiServer } from '~/server/utils/strapi'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validate the request body using Zod schema
    const validatedData = contactFormSchema.parse(body)

    // Check honeypot field for spam protection
    if (validatedData.website) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request'
      })
    }

    // Initialize Strapi client
    const strapi = useStrapiServer()

    // Create message entry in Strapi CMS
    const response = await strapi.create('messages', {
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message
    })

    return {
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.',
      data: response.data
    }
  } catch (error: any) {
    // Handle Zod validation errors
    if (error.name === 'ZodError') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid form data',
        data: error.errors
      })
    }

    // Handle Strapi API errors
    if (error.response) {
      console.error('Strapi API error:', error.response.data)
      throw createError({
        statusCode: error.response.status || 500,
        statusMessage: error.response.statusText || 'Failed to save message'
      })
    }

    // Handle other errors
    console.error('Contact form error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error'
    })
  }
})