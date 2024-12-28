import type { ApplyForm } from "~/types/recruitment/form";

type SubmitApplicationResult = {
  success: boolean;
  error?: string;
};

export const useSubmitApplication = () => {
  const isSubmitting = ref(false);
  const submissionError = ref<string | null>(null);

  const submitApplication = async (formData: ApplyForm): Promise<SubmitApplicationResult> => {
    isSubmitting.value = true;
    submissionError.value = null;

    try {
      const { error } = await supabase.from('job_applications').insert([formData]);

      if (error) {
        submissionError.value = error.message;
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      submissionError.value = errorMessage;
      return { success: false, error: errorMessage };
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    isSubmitting,
    submissionError,
    submitApplication,
  };
};
