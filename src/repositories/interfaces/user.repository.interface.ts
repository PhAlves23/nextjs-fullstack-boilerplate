import { UserType } from "@/entities";
import { CreateUserRequestType } from "@/schemas";

export interface IUserRepository {
  findUserByEmail(email: string): Promise<UserType | null>;
  createUser(data: CreateUserRequestType): Promise<UserType>;
}
