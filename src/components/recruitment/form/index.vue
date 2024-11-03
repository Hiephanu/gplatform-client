<template>
  <UForm :state="formState" class="mx-4 mt-10 flex w-full max-w-[800px] flex-col gap-8">
    <div class="flex w-full flex-col gap-8 md:flex-row">
      <UFormGroup label="Full name" required class="w-full">
        <UInput
          v-model="formState.fullName"
          size="xl"
          color="white"
          placeholder="Enter your full name..."
          required
        />
      </UFormGroup>

      <UFormGroup label="Date of Birth" required class="w-full">
        <UPopover :popper="{ placement: 'bottom-start' }">
          <UButton
            icon="i-heroicons-calendar-days-20-solid"
            :label="formattedDate"
            class="w-full"
            size="xl"
            color="white"
          />

          <template #panel="{ close }">
            <VDatePicker v-model="formState.dob" @close="close" />
          </template>
        </UPopover>
      </UFormGroup>
    </div>

    <div class="flex w-full flex-col gap-8 md:flex-row">
      <UFormGroup label="Email" required class="grow">
        <UInput
          v-model="formState.email"
          size="xl"
          color="white"
          placeholder="Enter your email.."
          required
        />
      </UFormGroup>
      <UFormGroup label="Phone number" required class="grow">
        <UInput
          v-model="formState.phoneNumber"
          size="xl"
          color="white"
          placeholder="Enter your phone number..."
          required
        />
      </UFormGroup>
    </div>

    <div class="flex w-full flex-col gap-8 md:flex-row">
      <UFormGroup label="University/ Institute" required class="w-full">
        <UInput
          v-model="formState.university"
          size="xl"
          color="white"
          placeholder="Enter your University/ Institute..."
          required
        />
      </UFormGroup>

      <UFormGroup label="Year" required class="w-full">
        <USelect
          v-model="formState.year"
          size="xl"
          placeholder="Select"
          :options="yearOptions"
          required
        />
      </UFormGroup>
    </div>

    <UFormGroup label="Facebook Link" required class="w-full">
      <UInput
        v-model="formState.facebook"
        size="xl"
        color="white"
        placeholder="Enter your Facebook link..."
        required
      />
    </UFormGroup>

    <UFormGroup
      label="What are your short-term (1- 3 years) and long-term (5 - 15 years) plans?"
      required
      color="black"
    >
      <UTextarea v-model="formState.plans" required />
    </UFormGroup>

    <UFormGroup label="What are your related experience to this position?" required color="black">
      <UTextarea v-model="formState.experience" required />
    </UFormGroup>

    <UFormGroup
      label="Why are you interested in joining Google Developer Student Clubs - HANU?"
      required
      color="black"
    >
      <UTextarea v-model="formState.interested" required />
    </UFormGroup>

    <UFormGroup
      label="How do you envision contributing to Google Developer Student Clubs - HANU?"
      required
      color="black"
    >
      <UTextarea v-model="formState.contributing" required />
    </UFormGroup>

    <UFormGroup
      label="What are your expectations from being a member of Google Developer Student Clubs - HANU?"
      required
      color="black"
    >
      <UTextarea v-model="formState.expectations" required />
    </UFormGroup>

    <UFormGroup label="How do your hear about this position?" required color="black">
      <USelect
        v-model="formState.hearAbout"
        size="xl"
        placeholder="Select"
        :options="accessOptions"
        required
      />
    </UFormGroup>

    <UFormGroup
      label="Upload your CV (PDF format, max 20MB)"
      class="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center"
      :description="(selectedFile && selectedFile.name) || 'Your file name goes here'"
      required
      :error="fileError"
    >
      <RecruitmentFormUploadButton :status="uploadButtonStatus" @click="open()" />
    </UFormGroup>

    <div class="flex flex-col gap-2">
      <UCheckbox label="Agree with GPlatform Policy" required />
      <UCheckbox label="Allow GPlatform send email to you" required />
    </div>

    <div class="flex justify-center">
      <UButton type="submit" :ui="{ rounded: 'rounded-full' }" size="xl"
        >Submit your application form</UButton
      >
    </div>
  </UForm>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core';
import type { ApplyForm, UploadButtonStatus } from '~/types/recruitment/form';

const formState = reactive<ApplyForm>({
  fullName: '',
  dob: null,
  email: '',
  phoneNumber: '',
  facebook: '',
  university: '',
  year: '',
  plans: '',
  experience: '',
  interested: '',
  contributing: '',
  expectations: '',
  hearAbout: '',
});

const uploadButtonStatus = ref<UploadButtonStatus>('default');

const MAX_FILE_SIZE = 20 * 1024 * 1024;

const { files, open } = useFileDialog({
  accept: '.pdf',
  directory: false,
});

const selectedFile = ref<File | null>(null);
const fileError = ref<string>('');

watch(files, (newFiles: FileList | null) => {
  if (newFiles && newFiles[0]?.size > MAX_FILE_SIZE) {
    fileError.value = 'File size exceeds 20MB. Please upload a smaller file.';
    selectedFile.value = null;
  } else {
    fileError.value = '';
    selectedFile.value = newFiles ? newFiles[0] : null;
  }
});

const yearOptions = ref([
  {
    label: '1st',
    value: '1',
  },
  {
    label: '2nd',
    value: '2',
  },
  {
    label: '3rd',
    value: '3',
  },
  {
    label: '4th',
    value: '4',
  },
  {
    label: '5th',
    value: '5',
  },
  {
    label: 'Others',
    value: 'Others',
  },
]);

const accessOptions = ref([
  {
    label: 'Social Media',
    value: 'Social Media',
  },
  {
    label: 'Website',
    value: 'Website',
  },
  {
    label: 'Friends',
    value: 'Friends',
  },
  {
    label: 'Advertisement',
    value: 'Advertisement',
  },
  {
    label: 'Email Marketing',
    value: 'Email Marketing',
  },
  {
    label: 'School',
    value: 'School',
  },
]);

const formattedDate = computed(() => {
  return formState.dob ? formState.dob.toLocaleDateString() : 'Select';
});
</script>
