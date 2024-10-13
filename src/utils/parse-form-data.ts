import { z } from "zod";

export function parseFormData<T>(schema: z.ZodSchema<T>, formData: FormData) {
  const formDataObject = Object.fromEntries(formData.entries());

  const parsedData = schema.parse(formDataObject);

  return { data: parsedData };
}
