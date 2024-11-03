<template>
  <div>
    <UContainer class="text-center">
      <div class="leading-10">
        <CommonBrandText
          prefix="Frequently asked"
          label="question"
          class="text-2xl font-bold md:text-6xl"
        ></CommonBrandText>
      </div>
      <div class="mt-4 text-center">
        <span>
          If you have further questions, please don’t hesitate to drop an email to
          gdsclead@gdschanu.com
        </span>
      </div>
    </UContainer>
    <UContainer class="my-8">
      <UAccordion
        color="white"
        :items="faqList"
        size="xl"
        variant="ghost"
        :have-slot="false"
        state="default"
        :ui="{ item: { padding: '' } }"
      >
        <template #default="{ item, open }">
          <UButton
            color="blue"
            variant="ghost"
            class="border-gray my-2 border border-2 border-solid p-6"
            :class="[open && 'border-blue-300 bg-blue-50']"
          >
            <div class="flex flex-col items-start">
              <span class="text-primary">{{ item.label }}</span>
              <span
                :class="[
                  'transition-all duration-300 ease-in-out',
                  open ? 'mt-4 max-h-40 opacity-100' : 'mt-0 max-h-0 opacity-0',
                ]"
                class="overflow-hidden text-gray-700"
              >
                {{ item.answer }}
              </span>
            </div>

            <template #trailing>
              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="ms-auto h-5 w-5 transform transition-transform duration-200"
                :class="[open && 'rotate-180']"
              />
            </template>
          </UButton>
        </template>
      </UAccordion>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { Faq } from '~/types/recruitment/faq';

const faqList = ref<Faq[]>([
  {
    id: '1',
    label: 'Title',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '2',
    label: 'Title',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '3',
    label: 'Title',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]);
</script>
