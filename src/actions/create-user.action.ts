"use server";

import { CreateUserRequestSchema } from "@/schemas";
import { createUserService } from "@/services";
import { parseFormData } from "@/utils/parse-form-data";
import { UserFactory } from "@/factories";
import { UserType } from "@/entities";
import { actionHandlerHOF } from "@/utils/action-handler-hof";

export default async function createUserAction(formData: FormData) {
  return await actionHandlerHOF<UserType>(async () => {
    const { data } = parseFormData(CreateUserRequestSchema, formData);

    const userRepository = UserFactory.createUserRepository();
    const result = await createUserService(data, userRepository);

    return result;
  });
}

export async function createUserActionHttp() {
  return {
    action: createUserAction,
    method: "post",
    url: "/users",
    type: "multipart/form-data",
    schema: CreateUserRequestSchema
  };
}
