<template>
  <div class="flex flex-col items-center gap-1">
    <span class="text-xs font-medium md:text-sm">{{ period }}</span>
    <span class="text-xs md:text-sm">{{ position }}</span>
  </div>
</template>

<script setup lang="ts">
import type { MembersDetailCardActivity } from '~/types/members/detail/activity';

defineProps<MembersDetailCardActivity>();
</script>
