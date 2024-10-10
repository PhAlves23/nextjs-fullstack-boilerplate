import { ResponseHandlerType } from "@/schemas";
import responseHandler from "./response-handler";
import { AppError } from "./errors";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { fromError } from "zod-validation-error";

export async function actionHandlerHOF<T>(
  action: () => Promise<T>
): Promise<ResponseHandlerType<T>> {
  try {
    const result = await action();
    return responseHandler({ data: result });
  } catch (error) {
    if (error instanceof AppError) {
      return responseHandler({
        status: error.statusCode,
        message: error.message,
        errors: error.message
      });
    }

    if (error instanceof z.ZodError) {
      return {
        status: 400,
        data: null,
        errors: fromError(error).toString(),
        message: "Validation Error"
      };
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      return responseHandler({
        status: 500,
        message: error.message
      });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return responseHandler({
          status: 500,
          message: error.message
        });
      }
    }

    return responseHandler({
      status: 500,
      message: "Internal Server Error."
    });
  }
}
