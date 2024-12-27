<template>
  <div
    class="-mt-20 mx-auto flex min-h-screen max-w-screen-xl flex-col-reverse items-center justify-center gap-4 sm:mt-10 lg:-mt-20 lg:flex-row"
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
    <div class="relative flex flex-col items-center justify-center overflow-visible lg:basis-2/5">
      <NuxtImg
        preload
        class="my-[140px] h-auto w-24 md:my-[240px] md:w-36"
        src="/gdsc-logo.png"
      ></NuxtImg>
      <InspiraRipple
        v-if="isDesktop"
        :base-circle-size="195"
        :space-between-circle="65"
        class="bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        circle-class="border-primary bg-primary/25 dark:bg-[#fff]/25 rounded-full"
      />
      <InspiraRipple
        v-else
        :base-circle-size="120"
        :space-between-circle="35"
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
