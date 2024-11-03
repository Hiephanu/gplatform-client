<template>
     <UCard class="md:h-48 md:w-48 w-36 h-36">
          <div class="flex h-full flex-col items-center justify-center gap-4">
            <div class="flex justify-center md:h-20 md:w-20 h-12 w-12 ">
              <NuxtImg
                :src="props.icon"
                :alt="props.icon"
                class="object-fit h-full w-full"
              ></NuxtImg>
            </div>
            <h2 class="text-center md:leading-6 leading-4" :class="checkBold">{{ props.content }}</h2>
          </div>
        </UCard>
</template>

<script setup lang="ts">
import type { Box } from '~/types/recruitment/box';
const props = withDefaults(defineProps<Box>(), {
  isBold: false,
});

const checkBold = computed(() => {
  return props.isBold ? 'sm:text-xl text-base font-bold' : 'font-medium text-xs md:text-sm' 
})

</script>