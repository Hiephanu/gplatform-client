<template>
  <div class="md:gap-4 flex flex-col items-center gap-2">
    <NuxtImg
      :src="avatar"
      class="w-[100px] items-center rounded-full border border-gray-300 md:w-[250px]"
    />
    <div class="flex flex-col items-center gap-2">
      <span class="text-lg font-medium md:text-2xl">{{ name }}</span>
      <span class="text-xs md:text-base">{{ position }}</span>
    </div>
    <MembersBadge :team="team" />
    <hr class="w-[200px] bg-gray-300" />
    <div class="flex flex-col items-center gap-4">
      <span class="text-base font-medium md:text-xl">Timeline Activities</span>
      <MembersDetailCardActivity
        v-for="activity in memberActivities"
        :key="activity.period"
        :period="activity.period"
        :position="activity.position"
      >
      </MembersDetailCardActivity>
    </div>
    <hr class="w-[200px] bg-gray-300" />
    <div class="flex gap-4">
      <MembersDetailCardSocial
        v-for="item in socialItems"
        :key="item.icon"
        :icon="item.icon"
        :link="item.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MemberDetailCard } from '~/types/members/detail/card';

const props = defineProps<MemberDetailCard>();

const socialItems = computed(() => {
  const items = (
    Object.keys(props.memberSocialList) as Array<keyof MemberDetailCard['memberSocialList']>
  ).map((key) => {
    const icon = key === 'email' ? `i-mdi-${key}-outline` : `i-mdi-${key}`;

    return {
      icon,
      link: props.memberSocialList[key],
    };
  });

  return items.filter((item) => item.link);
});
</script>
