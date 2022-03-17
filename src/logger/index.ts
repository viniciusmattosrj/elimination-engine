export interface Logger {
    info(message: string);
    error(message: string);
    warn(message: string);
}

export class Log implements Logger {
  info(message: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }

  warn(message: string) {
    console.warn(message);
  }
}
