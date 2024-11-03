<template>
  <div>
    <HomepageAboveTheFold @handle-scroll="handleScroll" />
    <div ref="welcomeSection">
      <HomepageWelcome />
    </div>
    <HomepageCoreValue />
    <HomepageProject />
    <HomepageMemIntro />
    <HomepageTechIntro />
    <RecruitmentJobNavigationTitle />
    <RecruitmentTestimonials />
  </div>
</template>

<script lang="ts" setup>
const welcomeSection = ref<HTMLElement | null>(null);

const handleScroll = () => {
  if (welcomeSection.value) {
    welcomeSection.value.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
