<template>
  <UContainer
    class="my-16 grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2"
    :ui="{ constrained: 'lg:max-w-7xl sm:max-w-xl max-w-sm' }"
  >
    <div class="order-last grid grid-cols-4 gap-4 sm:grid-cols-5 sm:gap-5 lg:order-first lg:gap-4">
      <div v-for="member in memberInfoList" :key="member.id">
        <NuxtLink target="_blank" :to="`/members/${member.id}`">
          <div class="w-12.5 lg:w-25 group relative cursor-pointer">
            <NuxtImg
              class="group-hover:border-primary-500 rounded-md border border-gray-300"
              :src="member.memberImage ?? ''"
              alt=""
              loading="lazy"
            />
            <UBadge
              :label="member.name"
              color="white"
              class="roup-hover:border-primary-500 transition-100 absolute left-1/2 mx-auto w-max -translate-x-1/2 -translate-y-3 transform opacity-0 transition-opacity ease-in-out group-hover:opacity-100"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center lg:items-start lg:justify-start">
      <CommonBrandText
        prefix="Built by"
        label="dedicated students"
        suffix="around Hanoi, Vietnam"
        class="text-center text-2xl font-bold sm:text-4xl lg:text-start"
      />
      <p class="my-4 text-center text-sm sm:text-2xl lg:text-start">
        The development of GDSC HANU led to dedicated members. The community is made up of members
        with different horizons and skills. We are happy to see new members every day and encourage
        anyone to join us and help in many ways.
      </p>
      <UButton
        label="See all members"
        icon="i-heroicons-arrow-right-16-solid"
        :trailing="true"
        variant="solid"
        size="xl"
        class="rounded-full"
        @click="$router.push('/members')"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const memberInfoList = ref([
  {
    id: '1',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '2',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '3',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '4',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '5',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '6',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '7',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '8',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '9',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '10',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '11',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '12',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '13',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '14',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '15',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '16',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '17',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '18',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '19',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
  {
    id: '20',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
  },
]);
</script>
