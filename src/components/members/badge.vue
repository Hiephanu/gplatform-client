<template>
  <UBadge size="lg" variant="solid" :color="color || 'white'" class="relative hidden sm:block">
    <span>{{ team }}</span>
    <MembersHighlight :class="color && 'hidden'" />
  </UBadge>
  <UBadge size="xs" variant="solid" :color="color || 'white'" class="relative sm:hidden">
    <span class="text-[0.5rem]">{{ team }}</span>
    <MembersHighlight :class="color && 'hidden'" />
  </UBadge>
</template>

<script setup lang="ts">
import type { MemberBadge } from '~/types/members/badge';

const props = defineProps<MemberBadge>();

const teamColors = [
  { team: 'Alumni', color: 'white' },
  { team: 'Technical', color: 'red' },
  { team: 'Marketing', color: 'yellow' },
  { team: 'Event', color: 'green' },
  { team: 'Human Resources', color: 'blue' },
];

const color = computed(() => {
  const foundTeam = teamColors.find((item) => item.team === props.team);
  return foundTeam ? foundTeam.color : '';
});
</script>
