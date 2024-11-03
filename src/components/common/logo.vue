<template>
  <NuxtLink to="/">
    <NuxtImg format="webp" width="350" src="/logo.png" :class="responsive && 'hidden md:block'" />
    <NuxtImg
      format="webp"
      width="40"
      src="/mobile-logo.png"
      :class="responsive ? 'md:hidden' : 'hidden'"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Logo } from '~/types/component/logo';

withDefaults(defineProps<Logo>(), {
  responsive: false,
});
</script>
