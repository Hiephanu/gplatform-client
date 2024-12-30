import type { JobItem } from "~/types/recruitment/job";

export const useSearchJob = () => {
    const jobList = ref<JobItem[] | null>(null);
    const fetchError = ref<string | null>(null);
    const supabase = useSupabaseClient();

    const searchJob = async (page: number, pageSize: number, searchText: string = '', team: string = '') => {
        const from = (page -1)* pageSize;
        const to = from + pageSize - 1;

        try {
            let query = supabase
                .from('jobs')
                .select('id, title, team, short_description');
            
            if (searchText !== '') {
                query = query.ilike('title', `%${searchText}%`);
            }

            if (team !== '') {
                query = query.eq('team', team);
            }

            const { data, error } = await query.range(from, to);

            if (error) {
                fetchError.value = error.message;
                return { success: false, error: error.message };
            }

            jobList.value = data as JobItem[] || null;
            return { success: true };
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            fetchError.value = errorMessage;
            return { success: false, error: errorMessage };
        }
    };

    return {
        jobList,
        fetchError,
        searchJob
    };
};
