import { Request, Response } from 'express';
import { isEmpty } from 'lodash';
import { GraphQLParams } from '../utils/GraphQLParams';
import { consoleTransport, fileCombinedTransport, fileErrorTransport } from '../utils/logger';

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

    if (isGraphQLPostRequest(req)) {
      message = message + "\n" + prettyPrintGraphlQLPostRequest(req.body);
    }

    return message;
  }
});

function isGraphQLPostRequest(req: Request): boolean {
  // FIXME: Do something more beautiful
  return !isEmpty(req.body) && req.url.endsWith('/graphql') && req.method === 'POST';
}

function prettyPrintGraphlQLPostRequest(body: GraphQLParams): string {
  // FIXME: Do something more beautiful
  return JSON.stringify(body, null, 2);
}
