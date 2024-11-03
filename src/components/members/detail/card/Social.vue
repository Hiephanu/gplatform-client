<template>
  <UButton
    size="xs"
    variant="outline"
    class="rounded-full text-gray-500"
    :to="link"
    color="white"
    square
    target="_blank"
  >
    <UIcon :name="icon" dynamic class="h-4 w-4 text-gray-900" />
  </UButton>
</template>

<script setup lang="ts">
import type { MembersDetailCardSocial } from '~/types/members/detail/card-social';

defineProps<MembersDetailCardSocial>();
</script>
