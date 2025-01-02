import type { JobDetail } from "~/types/recruitment/job"

export const useFetchJobDetail = () => {
    const jobDetail = ref<JobDetail | null>()
    const fetchError = ref<string | null>()
    const isLoading = ref<boolean>(false)
    const supabase = useSupabaseClient()

    const fetchJobDetail =async (jobId : string) => {
        try {
            isLoading.value = true;
            const { data , error } =await supabase.from('jobs').select('*').eq('id', jobId).limit(1) 
            if(error) {
                fetchError.value = error.message;
                return {success : false, error : error.message};
            }
            jobDetail.value =  data?.[0] as JobDetail || null;
            return { success : true}            
        } catch (err : unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            fetchError.value = errorMessage;
            return { success: false, error: errorMessage };
        }
        finally {
            isLoading.value = false;
        }
    }

    return {
        jobDetail,
        fetchError, 
        fetchJobDetail
    }
}