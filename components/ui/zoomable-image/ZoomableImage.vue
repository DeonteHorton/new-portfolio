<template>
  <figure class="mt-16">
    <Dialog>
      <DialogTrigger as-child>
        <NuxtImg 
          class="aspect-video rounded-xl bg-muted object-cover cursor-zoom-in hover:opacity-90 transition-opacity" 
          :src="src" 
          :alt="alt" 
          loading="lazy"
        />
      </DialogTrigger>
      <DialogContent class="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
        <div class="relative">
          <NuxtImg 
            :src="src" 
            :alt="alt" 
            loading="lazy"
            class="w-full h-auto max-h-[85vh] object-contain"
          />
          <DialogClose class="absolute top-2 right-2 bg-background/80 backdrop-blur-xs rounded-full p-2 hover:bg-background transition-colors">
            <X class="h-4 w-4" />
            <span class="sr-only">Close</span>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
    <figcaption v-if="caption" class="mt-4 flex gap-x-2 text-sm/6 text-muted-foreground">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

interface Props {
  src: string
  alt: string
  caption?: string
}

defineProps<Props>()
</script>