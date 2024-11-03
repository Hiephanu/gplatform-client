<template>
  <div class="w-[120px] rounded-lg border border-gray-300 p-4">
    <img class="mb-4 max-h-44 w-20" :src="props.cert.img" alt="" />
    <p class="text-center mb-1 font-medium text-xs">{{ props.cert.title }}</p>
    <p class="text-xs text-center font-normal">{{ props.cert.date }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Certificate } from '~/types/members/detail/cert'; 

const props = defineProps<{ cert: Certificate }>();
</script>
