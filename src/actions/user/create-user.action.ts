"use server";

import { CreateUserRequestSchema } from "@/schemas";
import { createUserService } from "@/services";
import { parseFormData } from "@/utils/parse-form-data";
import { UserFactory } from "@/factories";
import { UserType } from "@/entities";
import { actionHandlerHOF } from "@/utils/action-handler-hof";

export default async function createUserAction(formData: FormData) {
  const response = await actionHandlerHOF<UserType>(async () => {
    const { data } = parseFormData(CreateUserRequestSchema, formData);

    const userRepository = UserFactory.createUserRepository();
    const result = await createUserService(data, userRepository);

    console.log("result", result);
    return result;
  });
  return response;
}

export async function createUserActionHttp() {
  const payload = {
    action: createUserAction,
    method: "POST",
    url: "/users",
    type: "multipart/form-data",
    schema: CreateUserRequestSchema
  };
  return payload;
}
