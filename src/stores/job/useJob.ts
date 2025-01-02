import type { JobItem } from '~/types/recruitment/job'

export const useJob = defineStore('job', () => {
  const res = ref<JobItem[]>()
  const err = ref()
  const loading = ref<boolean>(false)
  const supabase = useSupabaseClient()

  const fetchJobList = async (page?: number, limit?: number, searchText: string = '', team: string = '') => {
        loading.value = true;
        let query = supabase
            .from('jobs')
            .select('id, title, team, short_description');
        
        query = searchText !== '' ? query.ilike('title', `%${searchText}%`) : query;
        query = team !== '' ? query.eq('team', team) : query;
        
        if (page && limit) {
            const from = (page -1)* limit;
            const to = from + limit - 1;
            query = query.range(from, to);
        }

        const { data, error } = await query;

        err.value = error
        res.value = data as JobItem[];
        loading.value = false
  };

  return {
    res,
    err,
    fetchJobList,
    loading,
  }
})
