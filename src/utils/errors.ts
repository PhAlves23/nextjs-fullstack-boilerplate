export class AppError extends Error {
  statusCode: number;
  code: string;

  constructor(message: string, statusCode: number, code: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.name = "CustomError.";
  }
}

export class UserAlreadyExistsError extends AppError {
  constructor() {
    super("User already exists.", 400, "USER_ALREADY_EXISTS");
    this.name = "UserAlreadyExistsError.";
  }
}
