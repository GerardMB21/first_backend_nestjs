/* eslint-disable prettier/prettier */

export class AppError extends Error {
  statusCode: any;
  error: string;
  constructor(message: string, statusCode: any) {
    super(message);

    this.message = message;
    this.error = message;
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { AppError };
