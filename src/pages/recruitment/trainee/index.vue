<template>
    <div class="mt-10">
        <RecruitmentTraineeOpeningJob/>
        <RecruitmentTraineeDesire/>
        <RecruitmentTraineeOffer/>
        <RecruitmentTraineeTalk/>
        <RecruitmentTraineeProgress/>
        <RecruitmentHiringProcess/>
        <RecruitmentFaq/>
        <RecruitmentTestimonials/>
    </div>
</template>
<script setup>
import { APP_NAME } from '~/const/config';

definePageMeta({
  title: `Technical Trainee - ${APP_NAME}`,
});</script>