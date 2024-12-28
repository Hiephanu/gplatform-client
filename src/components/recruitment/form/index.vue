<template>
  <UForm
    @submit.prevent="handleSubmit"
    :state="formState"
    class="mx-4 flex w-full max-w-[800px] flex-col gap-8"
  >
    <div class="flex w-full flex-col gap-8 md:flex-row">
      <UFormGroup label="Full Name" required class="w-full">
        <UInput
          v-model="formState.full_name"
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
            <DatePicker v-model="formState.dob" required @close="close" />
          </template>
        </UPopover>
      </UFormGroup>
    </div>

    <div class="flex w-full flex-col gap-8 md:flex-row">
      <UFormGroup label="Email" required class="grow">
        <UInput
          v-model="formState.email"
          type="email"
          size="xl"
          color="white"
          placeholder="Enter your email..."
          required
        />
      </UFormGroup>
      <UFormGroup label="Phone Number" required class="grow">
        <UInput
          v-model="formState.phone_number"
          size="xl"
          color="white"
          placeholder="Enter your phone number..."
          required
        />
      </UFormGroup>
    </div>

    <div class="flex w-full flex-col gap-8 md:flex-row">
      <UFormGroup label="Facebook Link" required class="w-full">
        <UInput
          v-model="formState.facebook_link"
          size="xl"
          color="white"
          placeholder="Enter your Facebook link..."
          required
        />
      </UFormGroup>

      <UFormGroup label="University/Institute" required class="w-full">
        <UInput
          v-model="formState.university"
          size="xl"
          color="white"
          placeholder="Enter your University/Institute..."
          required
        />
      </UFormGroup>
    </div>

    <UFormGroup label="Academic Year" required class="w-full">
      <USelect
        v-model="formState.academic_year"
        size="xl"
        placeholder="Select"
        :options="yearOptions"
        required
      />
    </UFormGroup>

    <UFormGroup
      label="What are your short-term (1-3 years) and long-term (5-15 years) plans?"
      required
      color="black"
    >
      <UTextarea v-model="formState.future_plan" required />
    </UFormGroup>

    <UFormGroup label="What are your related experiences to this position?" required color="black">
      <UTextarea v-model="formState.experience" required />
    </UFormGroup>

    <UFormGroup label="Why are you interested in this opportunity?" required color="black">
      <UTextarea v-model="formState.interest_reason" required />
    </UFormGroup>

    <UFormGroup label="How do you envision contributing?" required color="black">
      <UTextarea v-model="formState.contribution_vision" required />
    </UFormGroup>

    <UFormGroup label="What are your expectations from being a member?" required color="black">
      <UTextarea v-model="formState.expectations" required />
    </UFormGroup>

    <UFormGroup label="How did you hear about this opportunity?" required color="black">
      <USelect
        v-model="formState.referral_source"
        size="xl"
        placeholder="Select"
        :options="accessOptions"
        required
      />
    </UFormGroup>

    <UFormGroup
      label="Upload your CV (PDF format, max 5MB)"
      class="flex flex-col items-start gap-2 sm:justify-between md:flex-row md:items-center"
      :description="(selectedFile && selectedFile.name) || 'Your file name goes here'"
      :error="fileError"
    >
      <RecruitmentFormUploadButton :status="uploadButtonStatus" @click="open()" />
    </UFormGroup>

    <div class="flex justify-center">
      <UButton type="submit" :ui="{ rounded: 'rounded-full' }" size="xl"
        >Submit your application form</UButton
      >
    </div>
  </UForm>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core';
import { useSubmitApplication } from '~/composables/job/useSubmitApplication';
import type { ApplyForm, UploadButtonStatus } from '~/types/recruitment/form';
const { isSubmitting, submissionError, submitApplication } = useSubmitApplication();

const handleSubmit = async () => {
  const result = await submitApplication(formState);

  if (result.success) {
    alert('Application submitted successfully!');
    // Optionally, reset the form or redirect the user
  } else {
    alert(`Submission failed: ${result.error}`);
  }
};
const formState = reactive<ApplyForm>({
  full_name: '',
  dob: null,
  email: '',
  phone_number: '',
  facebook_link: '',
  university: '',
  academic_year: '',
  future_plan: '',
  experience: '',
  interest_reason: '',
  contribution_vision: '',
  expectations: '',
  referral_source: '',
});

const uploadButtonStatus = ref<UploadButtonStatus>('default');

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const { files, open } = useFileDialog({
  accept: '.pdf',
  directory: false,
});

const selectedFile = ref<File | null>(null);
const fileError = ref<string>('');

watch(files, (newFiles: FileList | null) => {
  if (newFiles && newFiles[0]?.size > MAX_FILE_SIZE) {
    fileError.value = 'File size exceeds 5MB. Please upload a smaller file.';
    selectedFile.value = null;
  } else {
    fileError.value = '';
    selectedFile.value = newFiles ? newFiles[0] : null;
  }
});

const yearOptions = ref([
  { label: '1st', value: 1 },
  { label: '2nd', value: 2 },
  { label: '3rd', value: 3 },
  { label: '4th', value: 4 },
  { label: '5th', value: 5 },
  { label: 'Others', value: 0 },
]);

const accessOptions = ref([
  { label: 'Social Media', value: 'Social Media' },
  { label: 'Website', value: 'Website' },
  { label: 'Friends', value: 'Friends' },
  { label: 'Advertisement', value: 'Advertisement' },
  { label: 'Email Marketing', value: 'Email Marketing' },
  { label: 'School', value: 'School' },
]);

const formattedDate = computed(() => {
  return formState.dob ? formState.dob.toLocaleDateString() : 'Select';
});
</script>
