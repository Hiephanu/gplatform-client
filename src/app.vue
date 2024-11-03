<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute()

useHead({
  title: `${route.meta.title}`
})
</script>
