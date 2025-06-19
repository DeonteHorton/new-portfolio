<template>
  <div class="min-h-screen bg-background relative overflow-hidden flex flex-col">
    <!-- Background gradient effects -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
    </div>

    <Navbar />

    <main class="mt-12 flex-1">
        <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* transform: matrix(1, 2, 3, 4, 5, 6); */
  /* transform: rotate3d(1, 1, 1, 15deg); */
  /* filter: opacity(0); */
  filter: blur(1px);
}
</style>


<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'
</script>
