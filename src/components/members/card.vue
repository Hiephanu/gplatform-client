<template>
  <div class="mt-8 w-full">
    <div
      class="mx-auto flex h-[220px] w-[148px] cursor-pointer flex-col items-center justify-between gap-2 rounded-lg border transition duration-300 ease-in-out hover:border-blue-400 hover:bg-blue-50 sm:h-[380px] sm:w-[264px] sm:gap-3"
    >
      <img
        :src="imageLink"
        :alt="name"
        class="mt-4 w-[100px] rounded-full border border-gray-300 sm:mt-8 sm:w-[200px]" 
      />
      <div class="mt-2 flex flex-col justify-between gap-2 text-center">
        <span class="hover:blue-400 text-sm sm:text-lg">{{ name }}</span>
        <span class="text-[0.5rem] sm:text-xs">{{ position }}</span>
      </div>
      <div class="mb-4 sm:mb-6">
        <MembersBadge :team="badge.team" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MemberCard } from '~/types/members/card';

defineProps<MemberCard>();
</script>
