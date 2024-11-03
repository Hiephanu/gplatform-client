<template>
  <UContainer
    class="-mt-20 flex flex-col-reverse items-center justify-center gap-8 h-screen lg:flex-row lg:justify-between"
    :ui="{ constrained: '2xl:max-w-7xl lg:max-w-full max-w-3xl' }"
  >
    <div class="flex flex-col justify-center gap-8 lg:basis-3/5 lg:justify-between">
      <CommonBrandText
        label="Learn"
        suffix="with students"
        class="flex flex-col text-center text-4xl font-bold sm:text-7xl lg:text-start xl:text-8xl"
      ></CommonBrandText>
      <div class="text-center text-lg sm:text-2xl lg:text-start">
        <CommonBrandText
          prefix="GDSC HANU represented Hanoi University in Google Developer Student Club Community. We focus on"
          label="Software Engineer"
          suffix="and"
          class="inline"
        ></CommonBrandText>
        <CommonBrandText label="Develop Community" class="inline"></CommonBrandText>
      </div>
      <div class="flex flex-row items-center justify-center gap-4 lg:justify-start">
        <UButton
          label="Get started"
          variant="solid"
          size="xl"
          class="rounded-full"
          @click="$router.push('/recruitment')"
        ></UButton>
        <UButton
          label="Discover more"
          icon="i-heroicons-arrow-right-16-solid"
          :trailing="true"
          variant="solid"
          size="xl"
          color="gray"
          class="rounded-full"
          @click="handleScroll"
        ></UButton>
      </div>
    </div>
    <div class="flex w-full max-w-64 basis-2/5 sm:max-w-lg">
      <NuxtImg
        src="/landing_img.png"
        alt="landing_img"
        class="h-full w-full object-contain"
      ></NuxtImg>
    </div>
  </UContainer>
</template>
<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'handleScroll'): void
}>()

const handleScroll = () => {
  emit('handleScroll')
}
</script>