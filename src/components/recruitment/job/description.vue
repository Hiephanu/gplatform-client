<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2 text-2xl font-medium">
      <UIcon :name="icon" />
      <h2 class="text-gray-950">
        <CommonBrandText
          :prefix="title.prefix"
          :color="title.color"
          :label="title.label"
          size="2xl"
        />
      </h2>
    </div>
    <ul class="list-disc space-y-1 pl-5 text-gray-950">
      <li v-for="item in descriptionItems" :key="item.id">
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { JobDescription } from '~/types/recruitment/job';

const { title, icon, descriptionItems } = defineProps<JobDescription>();
</script>
