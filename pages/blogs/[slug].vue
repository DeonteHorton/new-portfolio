<template>
{{ route.params.slug }}
</template>

<script setup lang="ts">
const route = useRoute()

console.log(route)

</script>
