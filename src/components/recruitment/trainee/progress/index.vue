<template>
  <div>
    <UContainer>
      <div class="text-center leading-10">
        <CommonBrandText
          label="Training"
          suffix="progress"
          class="text-2xl font-bold md:text-6xl"
        ></CommonBrandText>
      </div>
    </UContainer>
    <UContainer>
      <div class="py-4 text-center text-xs sm:text-base md:py-8">
        <h1>
          GDSC HANU seeks freshmen/newcomers with big ideas! Dive into our fast-paced world, gain
          skills, and launch your career. No experience? No problem! Bring your enthusiasm and we'll
          provide the challenge.
        </h1>
      </div>
    </UContainer>
    <UContainer class="flex flex-col gap-4" :ui="{ constrained: 'max-w-2xl' }">
      <div v-for="progress in list" :key="progress.id" class="flex flex-col gap-2">
        <CommonBrandText
          :label="progress.label"
          :suffix="progress.suffix"
          :color="`${progress.color}-500`"
          class="text-center text-2xl font-bold"
        ></CommonBrandText>
        <div class="flex flex-row justify-center md:flex-col">
          <div
            class="flex justify-center"
            :class="`${Number(progress.id) % 2 ? 'flex-row' : 'flex-col md:flex-row'}`"
          >
            <div v-for="(month, index) in progress.monthList" :key="index">
              <div
                class="flex items-center justify-center"
                :class="{
                  'flex-col md:flex-row': Number(progress.id) % 2 === 0,
                  'flex-row': Number(progress.id) % 2 !== 0,
                }"
              >
                <UBadge color="white" variant="solid" size="lg" :ui="{ rounded: 'rounded-full' }">{{
                  month
                }}</UBadge>
                <div
                  v-if="index < progress.monthList.length - 1"
                  :class="`bg-${progress.color}-100 ${Number(progress.id) % 2 ? 'h-12 w-1 md:h-1 md:w-40' : 'h-1 w-40'}`"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-center justify-between py-8 text-xs md:px-8"
            :class="`${Number(progress.id) % 2 ? 'flex-col md:flex-row' : 'flex-row'}`"
          >
            <div v-for="(skill, index) in progress.levels" :key="index">
              <p>{{ skill }}</p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { ProgressList } from '~/types/recruitment/trainee/progress-list';

const list = ref<ProgressList[]>([
  {
    id: '1',
    label: 'Culture',
    suffix: 'Training',
    levels: [],
    monthList: ['December', 'January'],
    color: 'blue',
  },
  {
    id: '2',
    label: 'Technical',
    suffix: 'Training',
    monthList: ['January', 'March', 'May', 'June'],
    levels: ['Basic Programming', 'Advance Programming', 'Framework Using'],
    color: 'red',
  },
  {
    id: '3',
    label: 'Graduate',
    suffix: 'Day',
    monthList: ['July'],
    levels: [],
    color: 'green',
  },
]);
</script>
