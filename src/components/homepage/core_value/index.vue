<template>
  <div class="mx-auto max-w-3xl lg:max-w-7xl">
    <UContainer>
      <div>
        <div class="text-center">
          <CommonBrandText
            prefix="Our"
            label="core value"
            class="text-2xl font-bold sm:text-6xl"
          ></CommonBrandText>
        </div>
      </div>
    </UContainer>
    <UContainer>
      <div class="py-4 text-center text-xs sm:text-2xl md:py-8">
        <h1>
          GSDC HANU has a mission to help members develop, thereby creating technology solutions
          that contribute to the community and society
        </h1>
      </div>
    </UContainer>
    <UContainer
      class="grid grid-cols-2 gap-x-8 gap-y-4 lg:grid-cols-4"
      :ui="{ constrained: 'lg:max-w-4xl md:max-w-md max-w-xs' }"
    >
      <div v-for="desire in desireList" :key="desire.id">
        <RecruitmentTraineeDesireItem
          :is-bold="true"
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
    content: 'Human',
  },
  {
    id: 2,
    icon: '/up-left.svg',
    content: 'Develop',
  },
  {
    id: 3,
    icon: '/code.svg',
    content: 'Tech',
  },
  {
    id: 4,
    icon: '/community.svg',
    content: 'Community',
  },
]);
</script>
