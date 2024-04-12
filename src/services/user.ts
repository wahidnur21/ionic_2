// import { ref } from "vue";
// export const user = ref(null)
// export const token = ref(null)

export type TUser = {
    id?: number
    name?: string
    email?: string
    level?: string
    created_at?: number
    modified_at?: number
}

import { useStorage } from '@vueuse/core'

export const user = useStorage<TUser>('user-data', null)
export const token = useStorage<string>('user-token', '')