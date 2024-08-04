"use server";

import { CreateUserRequestSchema } from "@/schemas";
import { createUserService } from "@/services";
import responseHandler from "@/utils/response-handler";
import { parseFormData } from "@/utils/parse-form-data";
import { UserFactory } from "@/factories";

export default async function createUserAction(formData: FormData) {
  const { data, errors, status, message } = parseFormData(
    CreateUserRequestSchema,
    formData,
  );

  console.log("createUserAction data", data);
  console.log("createUserAction errors", errors);
  console.log("createUserAction status", status);
  console.log("createUserAction message", message);

  if (errors || !data) {
    return responseHandler({
      status: status || 400,
      message: message || "Validation Error.",
      errors,
    });
  }

  try {
    const userRepository = UserFactory.createUserRepository();
    const result = await createUserService(data, userRepository);
    return responseHandler({ data: result });
  } catch (error) {
    return responseHandler({
      status: 500,
      message: "Internal Server Error.",
    });
  }
}
