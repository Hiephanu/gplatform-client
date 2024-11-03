<script setup lang="ts">
const routes = ref([
  { path: '/members', name: 'Members' },
  { path: '/recruitment', name: 'Recruitment' },
]);
</script>

<template>
  <div class="fixed top-0 z-50 w-full bg-white px-4 py-4 text-black shadow-md md:px-8">
    <UContainer v-if="$route.name === '404'">
      <Header404 />
    </UContainer>
    <UContainer v-else class="flex items-center justify-start gap-4 md:justify-between md:gap-0">
      <div class="md:hidden">
        <HeaderMobile :routes="routes" />
      </div>
      <CommonLogo responsive />
      <ul class="hidden gap-2 text-base leading-5 md:flex">
        <li
          v-for="route in routes"
          :key="route.path"
          class="py-2"
          :class="$route.path === route.path ? 'border-primary border-b' : ''"
        >
          <NuxtLink :to="route.path" class="px-1.5 py-2">{{ route.name }}</NuxtLink>
        </li>
      </ul>
      <div class="flex gap-4">
        <CommonSearch size="lg" />
        <UButton size="lg" class="rounded-full" label="Sign in" />
      </div>
    </UContainer>
  </div>
</template>
