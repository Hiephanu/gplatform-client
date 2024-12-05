<template>
  <div class="relative flex min-h-screen flex-col items-center justify-center">
    <div
      class="px-1 pb-[72px] absolute z-10 flex flex-col gap-8"
    >
      <div class="text-center text-3xl font-bold md:text-8xl">
        <CommonBrandText label="Build" />
        <h1 class="w-max text-black">your future</h1>
      </div>
      <h2 class="text-center text-4xl text-gray-950">Become a part of GDSC HANU</h2>
      <CommonSearch filter search size="xl" />
    </div>
    <InspiraBackgroundParticles
      class="absolute inset-0"
      :quantity="300"
      :ease="100"
      :color="'#0284c7'"
      :staticity="10"
      refresh
    />
  </div>
</template>
