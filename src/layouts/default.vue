<template>
  <main class="flex min-h-screen flex-col items-center justify-center">
    <Header />
    <section class="mt-[72px] w-full flex-auto">
      <slot />
    </section>
    <Footer />
  </main>
</template>

<script lang="ts" setup>

const route = useRoute();

watch(
  () => route.meta.title,
  (newTitle) => {
    useHead({
      title: `${newTitle} - Google Developer Student Clubs - HANU`,
      meta: [
        {
          property: "og:title",
          content: `${newTitle} - Google Developer Student Clubs - HANU`,
        },
      ],
    });
  },
  { immediate: true }
);
</script>
