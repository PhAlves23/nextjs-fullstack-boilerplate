"use server";

import { CreateUserRequestSchema } from "@/schemas";
import { createUserService } from "@/services";
import responseHandler from "@/utils/response-handler";
import { parseFormData } from "@/utils/parse-form-data";
import { UserFactory } from "@/factories";
import { UserAlreadyExistsError } from "@/utils/errors";

export default async function createUserAction(formData: FormData) {
  const { data, errors, status, message } = parseFormData(
    CreateUserRequestSchema,
    formData,
  );

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
    console.log("createUserAction result", result);
    return responseHandler({ data: result });
  } catch (error) {
    console.log("createUserAction error", error);
    if (error instanceof UserAlreadyExistsError) {
      return responseHandler({
        status: 400,
        message: error.message,
        errors: error.stack,
      });
    }

    return responseHandler({
      status: 500,
      message: "Internal Server Error.",
    });
  }
}
