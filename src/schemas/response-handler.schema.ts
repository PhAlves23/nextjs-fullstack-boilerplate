import { z } from "zod";

export const ResponseHandlerSchema = z.object({
  status: z.number().optional(),
  message: z.union([z.string(), z.null()]).optional(),
  errors: z.union([z.array(z.any()), z.null(), z.unknown()]).optional(),
  data: z.union([z.object({}), z.array(z.object({})), z.null()]).optional(),
});

export type ResponseHandlerType<T = any> = {
  status?: number;
  message?: string;
  errors?: any;
  data?: T | null;
};
