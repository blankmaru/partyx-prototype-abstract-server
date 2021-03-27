const awsServerlessExpress = require('aws-serverless-express');

import { bootstrapServer } from '../../../../../src/lambda';

exports.handler = (event, context) => {
  cachedServer = await bootstrapServer();
  return awsServerlessExpress.proxy(cachedServer, event, context, 'PROMISE').promise;
};