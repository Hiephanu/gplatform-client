<template>
  <div
    class="-m-20 sm:mt-10 lg:-mt-20 flex min-h-screen flex-col-reverse items-center gap-4 justify-center max-w-screen-xl mx-auto lg:flex-row"
  >
    <div class="flex flex-col justify-center gap-4 md:gap-8 lg:basis-3/5 lg:justify-between">
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
    <div
      class="relative flex overflow-visible lg:basis-2/5 flex-col items-center justify-center"
    >
      <NuxtImg preload class="w-24 md:w-36 h-auto my-[140px] md:my-[240px]" src="/gdsc-logo.png"></NuxtImg>
      <InspiraRipple
        :base-circle-size="isDesktop ? 195 : 120"
        :space-between-circle="isDesktop ? 65 : 35"
        class="bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        circle-class="border-primary bg-primary/25 dark:bg-[#fff]/25 rounded-full"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'handleScroll'): void;
}>();
const { isDesktop } = useResponsive();
const handleScroll = () => {
  emit('handleScroll');
};
</script>
