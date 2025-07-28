import { z } from 'zod';

export const createProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
