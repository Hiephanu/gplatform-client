import type { Member } from '~/types/members/member'

export const useMember = defineStore('member', () => {
  const res = ref<Member[]>()
  const err = ref()
  const loading = ref<boolean>(false)
  const supabase = useSupabaseClient()

  const load = async (page?: number, limit?: number) => {
      loading.value = true
      let query = supabase
        .from('members')
        .select('id, photo, name, team, position, status, gen, slug, email')
        if (page && limit) {
            const from = (page -1)* limit;
            const to = from + limit - 1;
            query = query.range(from, to);
        }

      const { data, error } = await query;

      if (error) {
        err.value = error.message
        return { success: false, error: error.message }
      }

      res.value = data as Member[]
      err.value = error
      loading.value = false
  }

  return {
    res,
    err,
    loading,
    load
  }
})
