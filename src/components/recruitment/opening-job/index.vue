<template>
  <div class="mb-8">
    <div class="text-center">
      <div class="flex flex-row items-center justify-center leading-10">
        <CommonBrandText
          label="Spotlight"
          suffix="position"
          class="text-2xl font-bold md:text-6xl"
        ></CommonBrandText>
      </div>
    </div>
    <div class="my-10 flex flex-row flex-wrap items-center justify-center gap-4">
      <div v-for="item in department" :key="item.id">
        <UButton
          class="rounded-full"
          :color="activeTeamFilter === item.id ? 'primary' : 'white'"
          :size="isDesktop ? 'xl' : 'md'"
          @click="setFilter(item.id)"
          >{{ item.content }}</UButton
        >
      </div>
    </div>
    <div v-if="isLoading" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="searchQuery in searchQueryList" :key="searchQuery.id">
        <RecruitmentJobItemSkeleton></RecruitmentJobItemSkeleton>
      </div>
    </div>
    <div v-else>
      <div
        v-if="searchQueryList.length > 0"
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
      </div>
      <p v-else></p>
      <div class="flex justify-center">
        <UButton
        :color="searchQueryList.length > 0 ? 'white' : 'primary'"
        :label="searchQueryList.length > 0 ? 'See more' : 'Browse all jobs'"
        icon="i-heroicons-arrow-small-right-solid"
        class="rounded-full"
        size="xl"
        trailing
      ></UButton>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DescriptionItem, JobItem } from '~/types/recruitment/job';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greater('md');

const isLoading = ref(true);
const activeTeamFilter = ref(1);
const department = ref<DescriptionItem[]>([
  { id: 1, content: 'Board of Leader' },
  { id: 2, content: 'Technical Department' },
  { id: 3, content: 'Marketing Department' },
  { id: 4, content: 'Event Department' },
  { id: 5, content: 'Human Resources Department' },
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

const setFilter = (id: number) => {
  activeTeamFilter.value = id;
  // Call query here
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

setTimeout(() => {
  isLoading.value = false;
}, 2000);
</script>
