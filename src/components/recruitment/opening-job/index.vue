<template>
  <div>
    <UContainer class="text-center">
      <div class="flex flex-row items-center justify-center leading-10">
        <CommonBrandText
          label="Spotlight"
          suffix="position"
          class="text-2xl font-bold md:text-6xl"
        ></CommonBrandText>
      </div>
    </UContainer>
    <UContainer class="my-10 flex flex-row flex-wrap items-center justify-center gap-4">
      <div v-for="(category, index) in categories" :key="category.id">
        <UCard
          :ui="{ strategy: 'override', body: '' }"
          class="cursor-pointer rounded-full p-1 sm:px-3 sm:py-2"
          :class="
            clickState[index]
              ? 'bg-primary text-white'
              : 'transition duration-300 ease-in-out hover:bg-blue-50'
          "
          @click="() => handleStatus(index)"
        >
          <p class="text-center text-xs sm:text-sm">{{ category.content }}</p>
        </UCard>
      </div>
    </UContainer>
    <template v-if="isPending">
      <UContainer
        v-if="searchQueryList.length"
        class="my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <div v-for="searchQuery in searchQueryList" :key="searchQuery.id">
          <SkeletonPosition></SkeletonPosition>
        </div>
      </UContainer>
    </template>
    <template v-else>
      <UContainer
        v-if="searchQueryList.length"
        class="my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <div v-for="searchQuery in searchQueryList" :key="searchQuery.id">
          <RecruitmentJobItem
            :id="searchQuery.id"
            :team="searchQuery.team"
            :tag="searchQuery.tag"
            :title="searchQuery.title"
            :description="searchQuery.description"
          ></RecruitmentJobItem>
        </div>
      </UContainer>
    </template>
    <UContainer v-if="searchQueryList.length" class="mb-10 text-center">
      <UButton
        v-if="searchQueryList.length > 6"
        label="See more"
        icon="i-heroicons-arrow-small-right-solid"
        class="cursor-pointer rounded-full border-2 border-solid border-gray-300 text-black transition duration-300 ease-in-out hover:bg-blue-50"
      ></UButton>
    </UContainer>
    <UContainer v-else class="mb-10 text-center">
      <p class="mb-10 text-2xl font-bold text-gray-600">More job openings are coming soon!</p>
      <UButton
        label="Browse all jobs"
        icon="i-heroicons-arrow-small-right-solid"
        :trailing="false"
        class="cursor-pointer rounded-full px-4 py-2 text-white"
      ></UButton>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { DescriptionItem, JobItem } from '~/types/recruitment/job';
const isPending = ref(true);
const categories = ref<DescriptionItem[]>([
  { id: '1', content: 'Board of Leader' },
  { id: '2', content: 'Technical Department' },
  { id: '3', content: 'Marketing Department' },
  { id: '4', content: 'Event Department' },
  { id: '5', content: 'Human Resources Department' },
]);
const searchQueryList = ref<JobItem[]>([
  {
    id: '1',
    tag: 'New',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
  {
    id: '2',
    tag: 'New',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
  {
    id: '3',
    tag: 'New',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
  {
    id: '4',
    tag: 'Hot',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
  {
    id: '5',
    tag: 'New',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
  {
    id: '6',
    tag: 'New',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
]);
const clickState = ref<boolean[]>(new Array(categories.value.length).fill(false));

const handleStatus = (index: number) => {
  clickState.value = clickState.value.map((state: boolean, i: number) =>
    i === index ? true : false,
  );
};

setTimeout(() => {
  isPending.value = false;
}, 2000);
</script>
