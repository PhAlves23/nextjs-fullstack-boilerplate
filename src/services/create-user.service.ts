import { CreateUserRequestType } from "@/schemas";
import { UserAlreadyExistsError } from "@/utils/errors";
import { IUserRepository } from "@/repositories/interfaces";

export async function createUserService(
  data: CreateUserRequestType,
  userRepository: IUserRepository,
) {
  const existingUser = await userRepository.findUserByEmail(data.email);

  if (existingUser) {
    throw new UserAlreadyExistsError();
  }

  const newUser = await userRepository.createUser(data);

  return newUser;
}
