import { HttpException, HttpStatus } from "@nestjs/common";

export class BusinessRuleException extends HttpException {
  constructor(message: string) {
    super(
      { message, error: 'Business Rule Violation', statusCode: 422 },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}