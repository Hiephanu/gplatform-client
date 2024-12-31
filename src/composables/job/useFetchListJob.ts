import type { JobItem } from "~/types/recruitment/job"

export const useFetchListJob = () => {
    const jobList = ref<JobItem[] | null>()
    const fetchError = ref<string | null>()
    const supabase = useSupabaseClient()

    const fetchJobList =async ( page: number, pageSize : number) => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize - 1;
        try {
            const { data , error } =await supabase.from('jobs').select('id, title, team, short_description').range(from, to);
            if(error) {
                fetchError.value = error.message;
                return {success : false, error : error.message};
            }
            jobList.value =  data as JobItem[] || null;
            return { success : true}            
        } catch (err : unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            fetchError.value = errorMessage;
            return { success: false, error: errorMessage };
        }
    }

    return {
        jobList,
        fetchError, 
        fetchJobList
    }
}