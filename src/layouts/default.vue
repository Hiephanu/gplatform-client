<template>
  <main class="min-h-screen">
    <Header />
    <section class="mt-[72px] mx-4 lg:mx-8">
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
