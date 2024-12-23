<template>
  <div class="py-2 md:py-4">
    <UBreadcrumb
      :ui="{
        ol: 'flex-wrap',
      }"
      :links="links"
      divider="/"
    />
  </div>
</template>

<script setup lang="ts">
import type { CommonBreadcrumb } from '~/types/component/breadcumb';

const { links } = defineProps<CommonBreadcrumb>();
</script>
