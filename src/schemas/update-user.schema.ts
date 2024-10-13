import { z } from "zod";

export const UpdateUserRequestSchema = z.object({
  name: z.string(),
  email: z.string(),
  emailVerified: z.union([z.date(), z.null()]).optional(),
  image: z.string().optional()
});

export type UpdateUserRequestType = z.infer<typeof UpdateUserRequestSchema>;

export const UpdateUserResponseSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.union([z.date(), z.null()]).optional(),
  image: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});
export type UpdateUserResponseType = z.infer<typeof UpdateUserResponseSchema>;
