<template>
  <div>
    <Recruitment />
    <RecruitmentOpeningJob />
    <RecruitmentHiringProcess />
    <RecruitmentJobNavigationTitle />
    <RecruitmentFaq />
    <RecruitmentTestimonials />
  </div>
</template>

<script setup>
import { APP_NAME } from '~/const/config';

definePageMeta({
  title: `Recruitment - ${APP_NAME}`,
});</script>
