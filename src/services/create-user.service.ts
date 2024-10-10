import { CreateUserRequestType } from "@/schemas";
import { UserAlreadyExistsError } from "@/utils/errors";
import { IUserRepository } from "@/repositories/interfaces";
import { UserType } from "@/entities";

export async function createUserService(
  data: CreateUserRequestType,
  userRepository: IUserRepository
): Promise<UserType> {
  const existingUser = await userRepository.findUserByEmail(data.email);

  if (existingUser) {
    throw new UserAlreadyExistsError();
  }

  const newUser = await userRepository.createUser(data);

  return newUser;
}
