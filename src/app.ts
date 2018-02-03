import * as express from '@feathersjs/express'

import feathers from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'

export const app = express.default(feathers())
  .configure(configuration())
  .use(express.json())
  .use(express.errorHandler())
