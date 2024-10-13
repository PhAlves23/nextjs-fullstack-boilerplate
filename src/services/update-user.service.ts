import { UpdateUserRequestType } from "@/schemas";
import { IUserRepository } from "@/repositories/interfaces";
import { UserType } from "@/entities";
import { UserNotExistsError } from "@/utils/errors";

export async function updateUserService(
  data: UpdateUserRequestType,
  userRepository: IUserRepository
): Promise<UserType> {
  const existingUser = await userRepository.findUserByEmail(data.email);

  if (!existingUser) {
    throw new UserNotExistsError();
  }

  const updateUser = await userRepository.updateUser(data);

  return updateUser;
}
