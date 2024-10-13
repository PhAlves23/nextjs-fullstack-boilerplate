import { UserType } from "@/entities";
import { CreateUserRequestType, UpdateUserRequestType } from "@/schemas";

export interface IUserRepository {
  findUserByEmail(email: string): Promise<UserType | null>;
  createUser(data: CreateUserRequestType): Promise<UserType>;
  updateUser(data: UpdateUserRequestType): Promise<UserType>;
}
