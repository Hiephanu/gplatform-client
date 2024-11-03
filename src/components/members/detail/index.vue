<template>
    <UContainer class="flex w-full justify-center m-16 gap-16">
      <MembersDetailCard
        name="Pham Tien Viet"
        avatar="/membercard-example.png"
        position="Co-founded & President"
        team="Board of Leader"
        :member-activities="memberActivities"
        :member-social-list="memberSocialList"
      />
      <MembersDetailGcpChart></MembersDetailGcpChart>
    </UContainer>
  </template>
  
  <script setup lang="ts">
  const memberActivities = ref([
    {
      period: 'Aug 2023 - Present',
      position: 'Co-founder & President',
    },
    {
      period: 'Aug 2022 - Aug 2023',
      position: 'Co-founder & President',
    },
    {
      period: 'Aug 2021 - Aug 2022',
      position: 'Co-founder & Vice President',
    },
  ]);
  
  const memberSocialList = ref({
    github: 'github.com',
    linkedin: 'linkedin.com',
    email: 'email.com',
    facebook: 'facebook.com',
  });
  </script>
  