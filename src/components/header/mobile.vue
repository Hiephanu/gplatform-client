<template>
  <UButton
    icon="i-heroicons-bars-3-center-left"
    size="md"
    color="white"
    variant="soft"
    @click="isOpen = true"
  />

  <UModal v-model="isOpen" fullscreen>
    <div class="p-4 flex min-h-screen flex-col justify-between">
      <div class="mb-8 flex items-center justify-between">
        <CommonLogo @click="isOpen = false" />
        <UButton
          size="md"
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          @click="isOpen = false"
        />
      </div>
      <ul class="flex w-full flex-1 flex-col gap-4 text-lg">
        <li
          v-for="route in props.routes"
          :key="route.path"
          class="py-2"
          :class="$route.path === route.path ? 'text-primary-500' : ''"
        >
          <NuxtLink :to="route.path" class="px-1.5 py-2" @click="isOpen = false">{{
            route.name
          }}</NuxtLink>
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
  </UModal>
</template>

<script setup lang="ts">
type Props = {
  routes: { path: string; name: string }[];
};

const props = defineProps<Props>();

const isOpen = ref(false);
</script>
