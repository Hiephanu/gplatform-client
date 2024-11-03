<template>
  <div>
    <UContainer class="flex flex-row flex-wrap items-center justify-center text-center font-bold">
      <CommonBrandText
        prefix="Why"
        label="choose"
        suffix="GDSC HANU"
        class="text-2xl md:text-6xl"
      ></CommonBrandText>
    </UContainer>
    <template v-if="isPending">
      <UContainer class="my-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="testimonial in testimonials" :key="testimonial.testimonialId">
          <SkeletonTestimonial></SkeletonTestimonial>
        </div>
      </UContainer>
    </template>
    <template v-else>
      <UContainer class="my-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="testimonial in testimonials" :key="testimonial.testimonialId">
          <UCard class="flex flex-col">
            <div class="mb-5">
              <p class="leading-6">{{ testimonial.comment }}</p>
            </div>
            <div class="flex flex-row items-center gap-4">
              <UAvatar :src="testimonial.icon" size="md" alt="Avatar" />
              <div class="flex flex-col">
                <p class="text-xl font-bold">{{ testimonial.userName }}</p>
                <p class="text-xs">{{ testimonial.userRole }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/types/recruitment/testimonial';
const isPending = ref(true);
const testimonials = ref<Testimonial[]>([
  {
    testimonialId: 1,
    comment:
      'I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.',
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: 'Pham Tien Viet',
    userRole: 'Co founder & President',
  },
  {
    testimonialId: 2,
    comment:
      'I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.',
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: 'Pham Tien Viet',
    userRole: 'Co founder & President',
  },
  {
    testimonialId: 3,
    comment:
      'I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.',
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: 'Pham Tien Viet',
    userRole: 'Co founder & President',
  },
  {
    testimonialId: 4,
    comment:
      'I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.',
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: 'Pham Tien Viet',
    userRole: 'Co founder & President',
  },
  {
    testimonialId: 5,
    comment:
      'I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.',
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: 'Pham Tien Viet',
    userRole: 'Co founder & President',
  },
  {
    testimonialId: 6,
    comment:
      'I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.',
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: 'Pham Tien Viet',
    userRole: 'Co founder & President',
  },
]);

setTimeout(() => {
  isPending.value = false;
}, 2000);
</script>
