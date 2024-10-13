import { UserRepository } from "@/repositories";
import { IUserRepository } from "@/repositories/interfaces";

export class UserFactory {
  static createUserRepository(): IUserRepository {
    return new UserRepository();
  }

  static updateUserRepository(): IUserRepository {
    return new UserRepository();
  }
}
