<template>
  <div
    class="hover:border-primary-500 cursor-pointer rounded-lg border border-gray-300 bg-white p-4 transition duration-300 ease-in-out hover:bg-blue-50 sm:p-8"
    @click="$router.push(`/recruitment/opening/${props.id}`)"
  >
    <div class="mb-1 flex justify-between gap-2 sm:mb-2">
      <p class="text-sm text-gray-600 sm:text-base">{{ props.team }}</p>
      <UBadge v-if="props.tag" size="sm" variant="solid" :label="props.tag" :color="color" />
    </div>
    <h3 class="mb-2 text-xl font-bold sm:text-2xl">{{ props.title }}</h3>
    <p class="text-sm text-gray-600 sm:text-base">
      {{ props.description }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import type { JobItem } from '~/types/recruitment/job.ts';

const props = defineProps<JobItem>();

const COLOR_TAG = [
  {
    tag: 'New',
    color: 'primary',
  },
  {
    tag: 'Hot',
    color: 'red',
  },
];

const color = computed(() => {
  return COLOR_TAG.find((item) => item.tag === props.tag)?.color;
});
</script>
