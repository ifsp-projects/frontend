/**
 * Custom application error class for handling API and business logic errors.
 * @class AppError
 * @extends Error
 */
export class AppError extends Error {
  public readonly message: string
  public readonly statusCode: number

  /**
   * Creates an instance of AppError.
   * @param {string} message - The error message
   * @param {number} [statusCode=400] - The HTTP status code (defaults to 400)
   */
  constructor(message: string, statusCode = 400) {
    super(message)
    this.name = 'AppError'
    this.message = message
    this.statusCode = statusCode
    Object.setPrototypeOf(this, AppError.prototype)
  }
}
