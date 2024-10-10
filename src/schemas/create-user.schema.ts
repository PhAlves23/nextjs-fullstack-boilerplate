import { z } from "zod";

export const CreateUserRequestSchema = z.object({
  name: z.string(),
  email: z.string(),
  emailVerified: z.union([z.date(), z.null()]).optional(),
  image: z.string().optional()
});

export type CreateUserRequestType = z.infer<typeof CreateUserRequestSchema>;

export const CreateUserResponseSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.union([z.date(), z.null()]).optional(),
  image: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});
export type CreateUserResponseType = z.infer<typeof CreateUserResponseSchema>;
