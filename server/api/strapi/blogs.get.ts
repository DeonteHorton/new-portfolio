export default defineEventHandler(async (event) => {
  const strapi = useStrapiServer()
  
  const query = getQuery(event)
  
  const params: any = {
    sort: ['publishedAt:desc'],
    populate: {
      seo: {
        populate: "*"
      },
      blogCategories: {
        populate: "*"
      }
    }
  }

  if (query.slug) {
    params.filters = {
      "slug": query.slug
    }
    params.populate.content = {
      populate: "*"
    }
  }

  try {
    const response = await strapi.find('blogs', params)
    return response.data
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blogs from Strapi'
    })
  }
})