<template>
  <section class="flex flex-col  gap-8">
    <CommonBreadcumb :links="beadcumbLinks" />
    <UContainer class="flex flex-1 flex-col w-screen min-h-screen items-center">
      <div class="flex flex-col gap-8 text-center">
        <div class="text-center">
          <CommonBrandText
            label="Opening"
            class="text-center text-4xl font-bold sm:text-7xl lg:text-start xl:text-8xl"
          />
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

<script setup>


const beadcumbLinks = ref([
  { label: 'Home', to: '/' },
  { label: 'Recruitment', to: '/recruitment' },
  { label: 'Opening', to: '/recruitment/opening' },
]);

definePageMeta({
  title: `Opening Position`,
});
</script>
