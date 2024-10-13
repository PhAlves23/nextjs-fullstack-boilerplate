"use server";

import { UserType } from "@/entities";
import { UserFactory } from "@/factories";
import { UpdateUserRequestSchema } from "@/schemas";
import { updateUserService } from "@/services";
import { parseFormData } from "@/utils";
import { actionHandlerHOF } from "@/utils/action-handler-hof";
import { ActionHttpType } from "@/types";

export default async function updateUserAction(formData: FormData) {
  return await actionHandlerHOF<UserType>(async () => {
    const { data } = parseFormData(UpdateUserRequestSchema, formData);

    const userRepository = UserFactory.updateUserRepository();
    const result = await updateUserService(data, userRepository);

    return result;
  });
}

export async function updateUserActionHttp() {
  const payload: ActionHttpType = {
    action: updateUserAction,
    method: "PUT",
    url: "/users",
    type: "multipart/form-data",
    schema: UpdateUserRequestSchema
  };
  return payload;
}
