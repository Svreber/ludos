import * as winston from 'winston';

/**
 * File logging
 */

 export const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

// Write to all logs with level `debug` and below to `combined.log` 
export const fileCombinedTransport = new winston.transports.File({
  filename: './logs/combined.log',
  format: fileFormat
});

// Write all logs error (and below) to `error.log`.
export const fileErrorTransport = new winston.transports.File({
  filename: './logs/error.log',
  format: fileFormat,
  level: 'error'
});

/**
 * Console logging
 */

// you can do that to change the label when logging logger.info('my log', { label: 'user-test' });
const displayFormat = winston.format.printf((args) => {
  const {
    level,
    message,
    label = 'ludos',
    timestamp
  } = args;

  return `${timestamp} [${label}] ${level}: ${message}`;
});

export const consoleFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.colorize(),
  displayFormat
);

export const consoleTransport =  new winston.transports.Console({
  format: consoleFormat
});

export const logger = winston.createLogger({
  level: 'debug', // FIXME for production
  transports: [
    fileCombinedTransport,
    fileErrorTransport,
    consoleTransport
  ]
});
