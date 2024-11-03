<template>
  <UButton
    icon="i-heroicons-bars-3-center-left"
    size="md"
    color="white"
    variant="soft"
    @click="isOpen = true"
  />

  <USlideover v-model="isOpen" side="left">
    <div class="flex flex-1 flex-col items-center justify-center gap-8 p-4">
      <CommonLogo />
      <ul class="flex w-full flex-1 flex-col gap-8 text-base">
        <li
          v-for="route in props.routes"
          :key="route.path"
          class="py-2"
          :class="$route.path === route.path ? 'border-primary border-b' : ''"
        >
          <NuxtLink :to="route.path" class="px-1.5 py-2">{{ route.name }}</NuxtLink>
        </li>
      </ul>
      <div class="flex w-full flex-col gap-2 md:gap-4">
        <UButton
          class="w-full items-center justify-center"
          label="Sign in"
          color="blue"
          variant="solid"
          size="xl"
        />
      </div>
    </div>
  </USlideover>
</template>

<script setup lang="ts">
type Props = {
  routes: { path: string; name: string }[];
};

const props = defineProps<Props>();

const isOpen = ref(false);
</script>
