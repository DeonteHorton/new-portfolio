<template>
  <div class="space-y-4 text-center">
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
      {{ title }}
      <span 
        v-if="gradient" 
        class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
      >
        {{ gradient }}
      </span>
    </h1>
    <p v-if="description" class="text-xl text-muted-foreground max-w-3xl mx-auto">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  gradient?: string
  description?: string
}>()</script>