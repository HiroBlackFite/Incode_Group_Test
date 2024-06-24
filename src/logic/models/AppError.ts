export class ServerError extends Error {
  constructor(message: string) {
    super(`UnknownError : ${message}`);
    this.name = 'ServerError';
  }
}

export class UnknownError extends Error {
  constructor(message: string) {
    super(`UnknownError : ${message}`);
    this.name = 'UnknownError';
  }
}
