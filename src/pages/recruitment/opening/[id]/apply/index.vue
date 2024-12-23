<template>
  <section class="flex flex-col">
    <CommonBreadcumb :links="breadcrumbLinks" />
    <UContainer class="flex flex-col items-center">
      <h1 class="text-center text-2xl sm:text-5xl font-bold my-4 sm:my-8">{{ jobTitle }}</h1>
      <RecruitmentForm />
    </UContainer>
  </section>
</template>

<script setup lang="ts">

const router = useRoute();
const { id: jobId } = router.params;

definePageMeta({
  title: `Apply form`,
});
const jobTitle = ref('Human Resources Engagement Lead');

const breadcrumbLinks = ref([
  { label: 'Home', to: '/' },
  { label: 'Recruitment', to: '/recruitment' },
  { label: 'Opening', to: '/recruitment/opening' },
  { label: jobTitle.value, to: `/recruitment/opening/${jobId}` },
  { label: 'Apply Form', to: `/recruitment/opening/${jobId}/apply` },
]);
</script>
