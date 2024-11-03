<script setup lang="ts">
const socialItems = [
  {
    icon: 'i-mdi-facebook',
    link: 'https://www.facebook.com/gdschanu',
  },
  {
    icon: 'i-mdi-linkedin',
    link: 'https://www.linkedin.com/company/gdschanu',
  },
  {
    icon: 'i-mdi-github',
    link: 'https://github.com/gdsc-hanu',
  },
  {
    icon: 'i-mdi-email-outline',
    link: 'https://mail.google.com',
  },
  {
    icon: 'i-mdi-instagram',
    link: 'https://www.instagram.com/gdsc.hanu/',
  },
];
</script>

<template>
  <div class="mt-4 flex gap-8 md:mt-0">
    <FooterSocialLink
      v-for="item in socialItems"
      :key="item.icon"
      :link="item.link"
      :icon="item.icon"
    />
  </div>
</template>
