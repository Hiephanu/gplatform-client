<template>
  <div class="bg-blue-50 px-0 py-2 md:px-8 md:py-4">
    <UContainer> <UBreadcrumb :links="links" divider="/" /></UContainer>
  </div>
</template>

<script setup lang="ts">
import type { CommonBreadcrumb } from '~/types/component/breadcumb';

const { links } = defineProps<CommonBreadcrumb>();
</script>
