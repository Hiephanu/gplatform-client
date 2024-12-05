<template>
  <section class="flex flex-col gap-8 md:gap-16">
    <CommonBreadcumb :links="beadcumbLinks" />
    <UContainer class="flex w-full flex-col items-start justify-center gap-8 md:flex-row md:gap-16">
      <div class="flex flex-1 flex-col gap-4 md:gap-8">
        <UButton class="w-fit" size="xl" variant="ghost" label="Back">
          <template #leading>
            <UIcon name="i-heroicons-arrow-small-left" class="text-primary h-6 w-6" />
          </template>
        </UButton>
        <div class="flex items-start justify-between">
          <div>
            <h1 class="text-2xl font-bold md:text-4xl">Human Resources Engagement Lead</h1>
            <div class="mt-2 flex gap-4">
              <UBadge
                :ui="{ rounded: 'rounded-full' }"
                size="lg"
                color="white"
                label="Board of Leader"
                class="whitespace-nowrap"
              />
              <UBadge
                :ui="{ rounded: 'rounded-full' }"
                size="lg"
                color="white"
                label="Core Team Member"
                class="whitespace-nowra"
              />
            </div>
          </div>
        </div>
        <p class="text-xs text-gray-950 md:text-base">
          This is short description of Job Description
        </p>
        <div v-for="item in jobDescriptions.detail" :key="item.type">
          <RecruitmentJobDescription
            :type="item.type"
            :description="item.description"
          />
        </div>
        <div class="flex w-full justify-center md:justify-start">
          <NuxtLink :to="`/recruitment/opening/${jobId}/apply`">
            <UButton label="Apply for this position" size="xl" :ui="{ rounded: 'rounded-full' }">
              <template #trailing>
                <UIcon name="i-heroicons-arrow-small-right" class="h-6 w-5" />
              </template>
            </UButton>
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-8 md:justify-start">
        <h1 class="text-2xl font-medium text-gray-950 md:text-3xl">You may also fit</h1>
        <div v-for="job in jobItems" :key="job.id" class="max-w-[350px]">
          <RecruitmentJobItem
            :title="job.title"
            :team="job.team"
            :tag="job.tag"
            :description="job.description"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
import type { JobDescription, JobItem } from '~/types/recruitment/job';

definePageMeta({
  title: `Job detail`,
});

const router = useRoute();
const { id: jobId } = router.params;

const beadcumbLinks = ref([
  { label: 'Home', to: '/', labelClass: '' },
  { label: 'Recruitment', to: '/recruitment', labelClass: '' },
  { label: 'Opening', to: '/recruitment/opening', labelClass: '' },
  { label: `Human Resources Engagement Lead`, to: `/recruitment/opening/${jobId}` },
]);

const jobItems = ref<JobItem[]>([
  {
    id: '1',
    title: 'Human Resources Engagement Lead',
    team: 'Board of Leaders',
    description: 'Develop the products and tools of the future for billions of users.',
    tag: 'New',
  },
  {
    id: '2',
    title: 'Human Resources Engagement Lead',
    team: 'Board of Leaders',
    description: 'Develop the products and tools of the future for billions of users.',
    tag: 'New',
  },
  {
    id: '3',
    title: 'Human Resources Engagement Lead',
    team: 'Board of Leaders',
    description: 'Develop the products and tools of the future for billions of users.',
  },
]);

const jobDescriptions = ref<JobDescription>({
  title: 'Human Resorces lead',
  description: 'This is short description of Job Description',
  detail: [
  {
    type: 'DO',
    description: [
      {
        id: 1,
        content:
          'Craft interface text for the end-to-end user experience, including but not limited to onboarding, error messages, buttons, instructions,...',
      },
      {
        id: 2,
        content:
          'Use your writing and editing skills, empathy, and logic to inform writing choices;',
      },
      {
        id: 3,
        content:
          'Drive vision for product language. Take part in building best practices and principles for Zalo with Zalo Content Guidelines;',
      },
      {
        id: 4,
        content:
          'Work closely with UX Designers and Product Owners using tools like Figma and Notion. Influence and adapt to stakeholders and their feedback;',
      },
      {
        id: 5,
        content:
          'Educate your partners on the role of UX writing and content strategy throughout the product development process...',
      },
    ],
  },
  {
    type: 'NEED',
    description: [
      {
        id: 1,
        content:
          'Craft interface text for the end-to-end user experience, including but not limited to onboarding, error messages, buttons, instructions,...',
      },
      {
        id: 2,
        content:
          'Use your writing and editing skills, empathy, and logic to inform writing choices;',
      },
      {
        id: 3,
        content:
          'Drive vision for product language. Take part in building best practices and principles for Zalo with Zalo Content Guidelines;',
      },
      {
        id: 4,
        content:
          'Work closely with UX Designers and Product Owners using tools like Figma and Notion. Influence and adapt to stakeholders and their feedback;',
      },
      {
        id: 5,
        content:
          'Educate your partners on the role of UX writing and content strategy throughout the product development process...',
      },
    ],
  },
  {
    type: 'OFFER',
    description: [
      {
        id: 1,
        content:
          'Craft interface text for the end-to-end user experience, including but not limited to onboarding, error messages, buttons, instructions,...',
      },
      {
        id: 2,
        content:
          'Use your writing and editing skills, empathy, and logic to inform writing choices;',
      },
      {
        id: 3,
        content:
          'Drive vision for product language. Take part in building best practices and principles for Zalo with Zalo Content Guidelines;',
      },
      {
        id: 4,
        content:
          'Work closely with UX Designers and Product Owners using tools like Figma and Notion. Influence and adapt to stakeholders and their feedback;',
      },
      {
        id: 5,
        content:
          'Educate your partners on the role of UX writing and content strategy throughout the product development process...',
      },
    ],
  },
]});
</script>
