<template>
  <UContainer
    class="py-20 flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16"
    :ui="{ constrained: 'lg:max-w-7xl max-w-3xl' }"
  >
    <div class="w-full max-w-36 sm:max-w-64">
      <NuxtImg src="/leader.png" alt="leader_img" class="h-full w-full rounded-full object-contain">
      </NuxtImg>
    </div>
    <div class="flex basis-3/5 flex-col gap-4 text-center lg:text-start">
      <h2 class="text-xl font-bold sm:text-3xl">
        We are University based community groups for students interested in Technology
      </h2>
      <div>
        <CommonBrandText
          prefix="Our goal is to create"
          label="impact"
          color="primary"
          class="text-base sm:text-xl"
        ></CommonBrandText>
        <CommonBrandText
          prefix="Impact students and"
          label="empower"
          suffix="them to impact their communities through"
          color="green-500"
          class="inline text-base sm:text-xl"
        ></CommonBrandText>
        <CommonBrandText
          label="technology"
          color="red-500"
          class="inline text-base sm:text-xl"
        ></CommonBrandText>
      </div>
      <div class="flex flex-col">
        <h2 class="text-lg font-bold sm:text-2xl">Pham Tien Viet</h2>
        <p class="text-xs lg:text-sm">Co founder & GDSC Lead</p>
      </div>
    </div>
  </UContainer>
</template>
