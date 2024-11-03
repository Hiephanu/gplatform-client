<template>
  <UButton
    :label="buttonAttributes.label"
    :icon="buttonAttributes.icon"
    :disabled="buttonAttributes.disabled"
    :color="buttonAttributes.color"
    class="flex w-[268px] justify-center"
    size="xl"
  />
</template>

<script setup lang="ts">
import type { UploadButton, UploadButtonVariant } from '~/types/recruitment/form';

const props = defineProps<UploadButtonVariant>();

const buttonVariants = ref<UploadButton[]>([
  {
    status: 'default',
    label: 'Upload',
    disabled: false,
    icon: 'i-heroicons-cloud-arrow-up',
    color: 'white',
  },
  {
    status: 'uploading',
    label: 'Uploading',
    disabled: true,
    icon: 'i-heroicons-arrow-path',
    color: 'white',
  },
  {
    status: 'completed',
    label: 'Completed',
    disabled: false,
    icon: 'i-heroicons-check-circle',
    color: 'green',
  },
  {
    status: 'failed',
    label: 'Upload Error',
    disabled: false,
    icon: 'i-heroicons-x-circle',
    color: 'red',
  },
]);

const buttonAttributes = computed(() => {
  const index = buttonVariants.value.findIndex(
    (element: UploadButtonVariant) => element.status === props.status,
  );

  return buttonVariants.value[index];
});
</script>
