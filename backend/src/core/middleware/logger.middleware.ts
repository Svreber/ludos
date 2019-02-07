
import { consoleTransport, fileCombinedTransport, fileErrorTransport } from '../utils/logger';
import { Request, Response } from 'express';
import {isEmpty} from 'lodash';
const expressWinston = require('express-winston');

const config = {
  expressFormat: false,
  meta: true,
  requestWhitelist: ['body'],
  responseWhitelist: ['body']
};

export const expressLoggerToFile = expressWinston.logger({
  ...config,
  transports: [fileCombinedTransport, fileErrorTransport]
});

export const expressLoggerToConsole = expressWinston.logger({
  ...config,
  transports: [consoleTransport],
  msg: (req: Request, res: Response) => {
    let message = `${req.method} ${req.url} ${res.statusCode} ${(res as any).responseTime}ms`;

    if (!isEmpty(req.body)) {
      message = message + "\n" + JSON.stringify(req.body, null, 2);
    }

    return message;
  }
});
