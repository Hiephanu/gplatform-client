import type { Member } from "~/types/members/member"

export const useFetchMember = ()=> {
    const memberList = ref<Member[]>()
    const fetchError = ref<string | null>()
    const isLoading = ref<boolean>(false)
    const supabase =  useSupabaseClient()

    const fetchMemberList =async (page: number, pageSize : number) => {
            const from = (page - 1) * pageSize;
            const to = from + pageSize - 1;
            try {
                isLoading.value = true;
                const query = supabase
                            .from('members')
                            .select('id, photo, name, team, position, status, gen, slug, email');
                const { data, error } = await query.range(from, to);
                if(error) {
                    fetchError.value = error.message;
                    return {success : false, error : error.message};
                }
                memberList.value =  data as Member[] || null;
                return { success : true};            
            } catch (err : unknown) {
                const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
                fetchError.value = errorMessage;
                return { success: false, error: errorMessage };
            } finally {
                isLoading.value = false;
            }
    }

    return {
        memberList,
        fetchError,
        isLoading,
        fetchMemberList
    }
}