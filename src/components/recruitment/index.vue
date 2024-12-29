<template>
  <div class="relative -mt-16 flex min-h-screen max-w-screen flex-col items-center justify-center overflow-hidden">
    <div
      class="px-1 pb-[72px] absolute z-10 flex flex-col gap-6 sm:gap-8"
    >
      <div class="text-center text-5xl font-bold md:text-8xl">
        <CommonBrandText is-break label="Build" suffix="your future" />
      </div>
      <h2 class="text-center text-2xl sm:text-4xl text-gray-950">Become a part of GDSC HANU</h2>
      <CommonSearch filter search size="xl" />
    </div>
    <InspiraBackgroundParticles
      class="absolute inset-0"
      :quantity="400"
      :ease="100"
      :color="'#0284c7'"
      :staticity="10"
      refresh
    />
  </div>
</template>
