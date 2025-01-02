import type { JobDetail } from '~/types/recruitment/job'

export const useJobDetail = defineStore('jobDetail', () => {
  const res = ref<JobDetail>()
  const err = ref()
  const loading = ref<boolean>(false)
  const supabase = useSupabaseClient()

  const fetchJobDetail = async (jobId: string) => {
      loading.value = true
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .limit(1)

      res.value = data?.[0] as JobDetail

      err.value = error
      loading.value = false
  }

  return {
    res,
    err,
    fetchJobDetail,
    loading,
  }
})
