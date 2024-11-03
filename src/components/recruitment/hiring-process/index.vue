<template>
  <div>
    <UContainer class="text-center">
      <div class="leading-10">
        <CommonBrandText
          prefix="Take a look inside"
          label="hiring process"
          class="text-2xl font-bold md:text-6xl"
        ></CommonBrandText>
      </div>
      <div class="my-10 text-center">
        <p
          >Although it may differ slightly depending on the role and teams, the same basics apply
          whether you’re applying for a tech job or a marketing job, an collaborator or a leadership
          position. Your process is likely to include the following stages.</p
        >
      </div>
    </UContainer>
    <UContainer :ui="{ constrained: 'lg:max-w-7xl max-w-xl' }">
      <div v-for="step in hiringStepList" :key="step.stepNumber">
        <div
          class="lg:flex lg:items-center lg:justify-between lg:gap-16 lg:text-left text-center"
          :class="step.stepNumber % 2 === 0 ? 'my-16 flex-row' : 'flex-row-reverse'"
        >
          <div class="h-full w-full">
            <NuxtImg :src="step.img" class="h-full w-full rounded-3xl object-contain"></NuxtImg>
          </div>
          <div class="mt-16 flex flex-col gap-2 lg:mt-0">
            <h2 class="text-xl">Step 0{{ step.stepNumber }}.</h2>
            <div class="sm:text-3xl text-2xl leading-8">
              <CommonBrandText
                :label="step.title.prefix"
                :suffix="step.title.label"
                class="font-bold"
              ></CommonBrandText>
            </div>
            <p class="leading-6 sm:text-base text-sm ">{{ step.content }}</p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { HiringProcess } from '~/types/recruitment/hiring';
const hiringStepList = ref<HiringProcess[]>([
  {
    stepNumber: 1,
    img: '/hiring1.png',
    title: {
      prefix: 'Form',
      label: 'application',
    },
    content:
      'Although it may differ slightly depending on the role and teams, the same basics apply whether you’re applying for a tech job or a marketing job, an collaborator or a leadership position. Your process is likely to include the following stages.',
  },
  {
    stepNumber: 2,
    img: '/hiring2.png',
    title: {
      prefix: 'Professional',
      label: 'test',
    },
    content:
      'Although it may differ slightly depending on the role and teams, the same basics apply whether you’re applying for a tech job or a marketing job, an collaborator or a leadership position. Your process is likely to include the following stages.',
  },
  {
    stepNumber: 3,
    img: '/hiring3.png',
    title: {
      prefix: 'Personal',
      label: 'Interview',
    },
    content:
      'Although it may differ slightly depending on the role and teams, the same basics apply whether you’re applying for a tech job or a marketing job, an collaborator or a leadership position. Your process is likely to include the following stages.',
  },
  {
    stepNumber: 4,
    img: '/hiring4.png',
    title: {
      prefix: 'Personal',
      label: 'Interview',
    },
    content:
      'Although it may differ slightly depending on the role and teams, the same basics apply whether you’re applying for a tech job or a marketing job, an collaborator or a leadership position. Your process is likely to include the following stages.',
  },
]);
</script>
