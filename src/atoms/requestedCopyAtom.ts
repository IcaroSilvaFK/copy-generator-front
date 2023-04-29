import { atom } from 'jotai'

interface IArrCopyProps {
  title: string
  copy: string
}

export const requestedCopyAtom = atom<string>('')
export const createdCopy = atom<Date | null>(null)
export const arrCopy = atom<IArrCopyProps[]>([])

export const historyCopyAtom = atom<[]>([])
