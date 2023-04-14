import { atom } from 'jotai'

type RequestedCopyPayload = {
  title: string
  description: string
}[]

export const requestedCopyAtom = atom<RequestedCopyPayload>([])
