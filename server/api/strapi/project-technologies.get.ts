export default defineEventHandler(async (event) => {
  const strapi = useStrapiServer()
  
  try {
    const response = await strapi.find('project-technologies', {
      fields: ['id', 'name']
    })
    
    return response.data
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch project technologies from Strapi'
    })
  }
})