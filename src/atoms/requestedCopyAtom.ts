import { atom } from 'jotai'

type RequestedCopyPayload = {
  title: string
  description: string
  createdAt: string
}[]

export const requestedCopyAtom = atom<RequestedCopyPayload>([])

export const historyCopyAtom = atom<RequestedCopyPayload>([])
