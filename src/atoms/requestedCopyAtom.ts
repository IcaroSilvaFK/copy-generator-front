import { atom } from 'jotai'

export const requestedCopyAtom = atom<string>('')
export const createdCopy = atom<Date | null>(null)

export const historyCopyAtom = atom<[]>([])
