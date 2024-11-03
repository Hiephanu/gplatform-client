<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const APP_NAME = 'Google Developer Student Clubs - HANU';

watch(
  () => route.name,
  (name) => {
    const pageTitle = name === 'index' ? 'Homepage' : name;
    useHead({
      title: `${pageTitle} - ${APP_NAME}`,
    });
  },
  { immediate: true }
);
</script>
