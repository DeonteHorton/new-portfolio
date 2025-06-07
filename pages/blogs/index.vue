<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl pb-16">Blog Section</h2>
                <p class="mt-2 text-lg/8 text-gray-600">Blogs about the stuff I either learned, interested in, or daily life stuff!</p>
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div class="max-w-full mx-auto text-5xl text-center">
                  Coming soon
                </div>

            </div>
         </div>
    </div>
</template>

<script setup lang="ts">
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const { find } = useStrapi()
const blogs = ref({})


try {
  blogs.value = await find('blogs',
    {
      sort: ['publishedAt:desc'],
      populate: {
        seo: {
          populate: "*"
        },
        blogCategories: {
          populate: "*"
        },
      }
    }
  ).then(response => response.data)

} catch (error) {
  console.error('Error fetching blogs:', error)
}

const formatDate = (date: any) => {
  return df.format(date.toDateTimeString)
}



</script>
