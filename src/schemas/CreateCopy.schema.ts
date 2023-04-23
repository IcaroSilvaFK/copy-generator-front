import { z } from 'zod'

export const createCopySchema = z.object({
  title: z.string().min(5),
  copy: z.string().min(5),
})

export type CreateCopyFormProperties = z.infer<typeof createCopySchema>
