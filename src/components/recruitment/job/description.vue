<template>
  <div v-if="jobDescription" class="flex flex-col gap-4">
    <div class="flex items-center gap-2 text-2xl font-medium">
      <UIcon :name="jobDescription.icon" />
      <h2 class="text-gray-950">
        <CommonBrandText
          :prefix="jobDescription.title.prefix"
          :color="jobDescription.title.color"
          :label="jobDescription.title.label"
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
import type { JobDescription , UiJobDescription} from '~/types/recruitment/job';

const { type, descriptionItems } = defineProps<JobDescription>();

const jobDescription = computed(() => {
  return uiJobDescription.value.find((item) => item.type === type);
});

const uiJobDescription = ref<UiJobDescription[]>([
  {
    type: 'DO',
    icon: 'i-heroicons-code-bracket',
    title: {
      prefix: 'What you will',
      label: 'do',
      color: 'primary',
    },
  },
  {
    type: 'NEED',
    icon: 'i-heroicons-academic-cap',
    title: {
      prefix: 'What you will',
      label: 'need',
      color: 'red-500',
    },
  },
  {
    type: 'NEED',
    icon: 'i-heroicons-gift',
    title: {
      prefix: 'What we',
      label: 'offer',
      color: 'green-500',
    },
  }
]);
</script>
