export class CustomError extends Error {
  statusCode: number;
  code: string;

  constructor(message: string, statusCode: number, code: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.name = "CustomError.";
  }
}

export class UserAlreadyExistsError extends CustomError {
  constructor() {
    super("User already exists.", 400, "USER_ALREADY_EXISTS");
    this.name = "UserAlreadyExistsError.";
  }
}

export class InternalServerError extends CustomError {
  constructor(message: string = "Internal Server Error.") {
    super(message, 500, "INTERNAL_SERVER_ERROR");
    this.name = "InternalServerError.";
  }
}
