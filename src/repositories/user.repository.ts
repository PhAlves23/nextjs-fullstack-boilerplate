import prisma from "@/libs/db";
import { CreateUserRequestType, UpdateUserRequestType } from "@/schemas";
import { IUserRepository } from "./interfaces";

export class UserRepository implements IUserRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email }
    });
  }

  async createUser(data: CreateUserRequestType) {
    return prisma.user.create({
      data
    });
  }

  async updateUser(data: UpdateUserRequestType) {
    return prisma.user.update({
      where: {
        email: data.email
      },
      data: {
        name: data.name,
        image: data.image
      }
    });
  }
}
