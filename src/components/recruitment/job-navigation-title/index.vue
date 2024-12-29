<template>
  <div>
    <UContainer class="mb-10 text-center">
      <div>
        <div class="flex flex-col justify-center lg:flex-row">
          <CommonBrandText
            prefix="The most"
            label="impactful work"
            suffix="of your student life"
            class="text-2xl font-bold md:text-6xl"
          ></CommonBrandText>
        </div>
      </div>
    </UContainer>
    <UContainer class="my-10 md:flex md:flex-row md:items-center md:justify-between md:gap-16">
      <div class="basis-1/2">
        <div v-for="job in jobNavigationList" :key="job.jobId">
          <NuxtLink to="/recruitment"
            ><UButton class="w-full mb-2 sm:mb-4" :ui="{ rounded: 'rounded-full' }" size="xl" color="white">
              <div class="flex items-center w-full justify-between">
                <div class="flex items-center gap-1">
                  <h2 class="text-sm sm:text-base">{{ job.jobName }}</h2>
                  <CommonBrandText
                    :label="posNumberText(job.posNumber)"
                    class="text-primary text-medium text-sm font-bold sm:text-base"
                  ></CommonBrandText>
                </div>
                <UIcon name="i-heroicons-arrow-up-right-solid" class="w-15 h-15"></UIcon>
              </div> </UButton
          ></NuxtLink>
        </div>
      </div>
      <div class="relative my-8 w-full basis-3/5 md:my-0 md:max-w-lg">
        <NuxtImg src="/gdsc.png" alt="gdsc" class="w-full md:max-w-lg" />
        <div class="absolute top-0 w-full md:max-w-lg">
          <NuxtImg src="/overlay.png" alt="overlay" class="w-full md:max-w-lg"></NuxtImg>
        </div>
        <div class="lg:top-3/5 absolute top-1/2 flex flex-col gap-2 px-4 sm:gap-3 lg:px-8">
          <h1
            class="text-center text-base font-semibold text-white sm:text-3xl md:text-2xl lg:text-3xl"
          >
            Are you a first year student or have no experience?
          </h1>
          <UButton
            label="Visit G<Technical/>Trainee Page"
            trailing-icon="i-heroicons-arrow-right-solid"
            size="sm"
            class="mx-auto rounded-2xl border border-solid border-white text-white hover:text-black"
            color="white"
            variant="ghost"
            @click="$router.push('/recruitment/trainee')"
          ></UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
<script setup lang="ts">
import type { JobTitle } from '~/types/recruitment/job-title';
const jobNavigationList = ref<JobTitle[]>([
  {
    jobId: 1,
    jobName: 'All team',
    posNumber: 6,
  },
  {
    jobId: 2,
    jobName: 'Board of Leader',
    posNumber: 6,
  },
  {
    jobId: 3,
    jobName: 'Technical',
    posNumber: 6,
  },
  {
    jobId: 4,
    jobName: 'Marketing',
    posNumber: 6,
  },
  {
    jobId: 5,
    jobName: 'Event',
    posNumber: 6,
  },
  {
    jobId: 6,
    jobName: 'Human Resources',
    posNumber: 6,
  },
]);

const posNumberText = (posNumber: number) => {
  return posNumber === 1 ? '1 position' : `${posNumber} positions`;
};
</script>
