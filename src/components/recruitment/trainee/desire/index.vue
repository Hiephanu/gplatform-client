<template>
  <div>
    <UContainer>
      <div class="leading-10">
        <div class="text-center">
          <CommonBrandText
            prefix="What we"
            label="looking for"
            class="text-2xl font-bold md:text-6xl"
          ></CommonBrandText>
        </div>
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
    <UContainer class="mb-16 flex flex-row flex-wrap items-center justify-center gap-8">
      <div v-for="desire in desireList" :key="desire.id">
        <RecruitmentTraineeDesireItem
          :is-bold="false"
          :icon="desire.icon"
          :content="desire.content"
        ></RecruitmentTraineeDesireItem>
      </div>
    </UContainer>
  </div>
</template>
<script setup lang="ts">
const desireList = ref([
  {
    id: 1,
    icon: '/student.svg',
    content: 'First or second year students in Hanoi',
  },
  {
    id: 2,
    icon: '/code.svg',
    content: 'Passion in technology and software',
  },
  {
    id: 3,
    icon: '/up-left.svg',
    content: 'Willingness to grow and learn',
  },
]);
</script>
