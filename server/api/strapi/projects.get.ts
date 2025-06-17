export default defineEventHandler(async (event) => {
  const strapi = useStrapiServer()

  try {
    const response = await strapi.find('projects', {
      sort: ['createdAt:desc'],
      populate: {
        projectImage: {
          populate: "*"
        },
        technologies: {
          fields: ['name']
        }
      }
    })

    return response.data
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch projects from Strapi'
    })
  }
})
