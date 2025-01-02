import type { Account } from "~/types/auth/auth"

export const useAuth = defineStore('auth', () => {
  const res = reactive<Account>({
    displayName:'',
    accountId:'',
    email:'',
    avatar:''
  })
  const err = ref()
  const loading = ref<boolean>(false)
  const supabase = useSupabaseClient()

  const load = async () => {
      const { data, error } = await supabase.auth.getSession();
      if(data) {
        res.accountId = data.session?.user.id ?? '';
        res.displayName = data.session?.user.user_metadata.name;
        res.avatar = data.session?.user.user_metadata.avatar_url;
        res.email = data.session?.user.email ?? ''
      }

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
