<template>
  <section class="flex flex-col gap-8 md:gap-16">
    <CommonBreadcumb :links="beadcumbLinks" />
    <UContainer class="flex flex-1 flex-col items-center">
      <div class="flex flex-col gap-8 text-center">
        <div class="text-center">
          <CommonBrandText
            label="Opening"
            class="flex flex-col text-center text-4xl font-bold sm:text-7xl lg:text-start xl:text-8xl"
          />
          <h1 class="text-center text-3xl font-bold text-black md:text-8xl">position</h1>
        </div>
        <p class="text-base text-gray-950">
          Join us today and keep maximizing your potential thanks to working with
          <br />
          the best talents, in sizable projects that impact on Tech Community.
        </p>
        <CommonSearch placeholder="Developer..." search size="xl" />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const beadcumbLinks = ref([
  { label: 'Home', to: '/' },
  { label: 'Recruitment', to: '/recruitment' },
  { label: 'Opening', to: '/recruitment/opening' },
]);
</script>
