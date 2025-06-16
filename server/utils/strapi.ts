interface StrapiResponse<T> {
  data: T
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

interface StrapiQueryParams {
  sort?: string[]
  filters?: Record<string, any>
  populate?: Record<string, any> | string[]
  fields?: string[]
  pagination?: {
    page?: number
    pageSize?: number
  }
}

export class StrapiServerClient {
  private baseURL: string
  private token: string

  constructor() {
    const config = useRuntimeConfig()
    this.baseURL = config.strapiUrl || 'http://localhost:1337'
    this.token = config.strapiToken
  }

  private buildQuery(params: StrapiQueryParams = {}): string {
    const searchParams = new URLSearchParams()

    if (params.sort) {
      params.sort.forEach(sortItem => {
        searchParams.append('sort[]', sortItem)
      })
    }

    if (params.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        if (typeof value === 'object') {
          Object.entries(value).forEach(([operator, operatorValue]) => {
            searchParams.append(`filters[${key}][${operator}]`, String(operatorValue))
          })
        } else {
          searchParams.append(`filters[${key}]`, String(value))
        }
      })
    }

    if (params.populate) {
      if (Array.isArray(params.populate)) {
        params.populate.forEach(field => {
          searchParams.append('populate[]', field)
        })
      } else {
        Object.entries(params.populate).forEach(([key, value]) => {
          if (typeof value === 'object') {
            Object.entries(value).forEach(([subKey, subValue]) => {
              if (subKey === 'populate' && subValue === '*') {
                searchParams.append(`populate[${key}][populate]`, '*')
              } else if (subKey === 'fields' && Array.isArray(subValue)) {
                subValue.forEach(field => {
                  searchParams.append(`populate[${key}][fields][]`, field)
                })
              } else {
                searchParams.append(`populate[${key}][${subKey}]`, String(subValue))
              }
            })
          } else {
            searchParams.append(`populate[${key}]`, String(value))
          }
        })
      }
    }

    if (params.fields) {
      params.fields.forEach(field => {
        searchParams.append('fields[]', field)
      })
    }

    if (params.pagination) {
      if (params.pagination.page) {
        searchParams.append('pagination[page]', String(params.pagination.page))
      }
      if (params.pagination.pageSize) {
        searchParams.append('pagination[pageSize]', String(params.pagination.pageSize))
      }
    }

    return searchParams.toString()
  }

  async find<T = any>(
    endpoint: string, 
    params: StrapiQueryParams = {}
  ): Promise<StrapiResponse<T[]>> {
    const query = this.buildQuery(params)
    const url = `${this.baseURL}/api/${endpoint}${query ? `?${query}` : ''}`

    const response = await $fetch<StrapiResponse<T[]>>(url, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      }
    })

    return response
  }

  async findOne<T = any>(
    endpoint: string, 
    id: string | number,
    params: StrapiQueryParams = {}
  ): Promise<StrapiResponse<T>> {
    const query = this.buildQuery(params)
    const url = `${this.baseURL}/api/${endpoint}/${id}${query ? `?${query}` : ''}`

    const response = await $fetch<StrapiResponse<T>>(url, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      }
    })

    return response
  }
}

export function useStrapiServer() {
  return new StrapiServerClient()
}