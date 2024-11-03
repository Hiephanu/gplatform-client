<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <UButton
    size="xl"
    variant="outline"
    class="rounded-full"
    :to="props.link"
    color="white"
    square
    target="_blank"
  >
    <UIcon :name="props.icon" dynamic class="h-6 w-6" />
  </UButton>
</template>
