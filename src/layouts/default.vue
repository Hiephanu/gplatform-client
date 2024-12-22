<template>
  <main class="flex min-h-screen flex-col items-center justify-center">
    <Header />
    <section class="mt-[72px] px-4 lg:px-8 flex-auto">
      <slot />
    </section>
    <Footer />
  </main>
</template>

<script lang="ts" setup>

const route = useRoute();

useHead(() => ({
  title: `${route.meta.title} - Google Developer Student Clubs - HANU`,
  meta: [
    {
      property: "og:title",
      content: `${route.meta.title} - Google Developer Student Clubs - HANU`,
    },
  ],
}));

</script>
