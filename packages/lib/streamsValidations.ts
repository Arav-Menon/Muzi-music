import { z } from 'zod'

export const streamValidation = z.object({
    creatorId: z.string(),
    url : z.string()
})