<template>
  <div>
    {{ props.prefix }} <br v-if="isBreak">
    <span :class="color">{{ label }}</span> <br v-if="isBreak">
    {{ props.suffix }}
  </div>
</template>

<script lang="ts" setup>
import type { BrandText } from '~/types/component/brand-text';

const props = withDefaults(defineProps<BrandText>(), {
  color: 'primary',
  isBreak: false
});

const color = computed(() => {
  return `text-${props.color}`;
});

const label = computed(() => {
  const formattedLabel = props.label.replace(/\s+/g, '_');
  return `<${formattedLabel}/>`;
});
</script>
