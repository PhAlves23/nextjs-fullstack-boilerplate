import z from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  emailVerified: z.union([z.date(), z.null()]).nullable(),
  image: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserType = z.infer<typeof UserSchema>;
