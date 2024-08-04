import { IUserRepository } from "@/repositories/interfaces";
import { CreateUserRequestType } from "@/schemas";
import { InternalServerError, UserAlreadyExistsError } from "@/utils/errors";

export async function createUserService(
  data: CreateUserRequestType,
  userRepository: IUserRepository,
) {
  try {
    const existingUser = await userRepository.findUserByEmail(data.email);

    if (existingUser) {
      throw new UserAlreadyExistsError();
    }

    const newUser = await userRepository.createUser(data);

    return newUser;
  } catch (error) {
    throw new InternalServerError();
  }
}
