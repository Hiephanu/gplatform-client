<template>
  <section class="flex flex-col gap-8 md:gap-16">
    <CommonBreadcumb :links="breadcrumbLinks" />
    <UContainer class="mt-16 flex flex-col items-center">
      <span class="text-center text-5xl font-bold">{{ jobTitle }}</span>
      <RecruitmentForm />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const router = useRoute();
const { id: jobId } = router.params;

const jobTitle = ref('Human Resources Engagement Lead');

const breadcrumbLinks = ref([
  { label: 'Home', to: '/' },
  { label: 'Recruitment', to: '/recruitment' },
  { label: 'Opening', to: '/recruitment/opening' },
  { label: jobTitle.value, to: `/recruitment/opening/${jobId}` },
  { label: 'Apply Form', to: `/recruitment/opening/${jobId}/apply` },
]);
</script>
