import { z } from "zod";
import { fromError } from "zod-validation-error";

export function parseFormData<T>(schema: z.ZodSchema<T>, formData: FormData) {
  const formDataObject = Object.fromEntries(formData.entries());
  console.log("formDataObject", formDataObject);
  try {
    console.log("schema", schema);
    console.log("typeof schema", typeof schema);
    const parsedData = schema.parse(formDataObject);
    console.log("parsedData", parsedData);
    return { data: parsedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        status: 400,
        data: null,
        errors: fromError(error).toString(),
        message: "Validation Error",
      };
    }
    return {
      status: 500,
      data: null,
      errors: error,
      message: "Internal Server Error",
    };
  }
}
