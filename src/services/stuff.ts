export type TStuff = Array<any>

import { useStorage } from "@vueuse/core"

export const stuff = useStorage<TStuff>('stuff-data', [])