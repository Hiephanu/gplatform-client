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

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
watch(
  () => route.name,
  (name) => {
    const pageTitle = name === 'index' ? 'Homepage' : capitalizeFirstLetter(name);
    useHead({
      title: `${pageTitle} - ${APP_NAME}`,
    });
  },
  { immediate: true }
);
</script>
