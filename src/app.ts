import * as express from'@feathersjs/express'
import * as feathers from'@feathersjs/feathers'

export function create () {
  const app = express.default(feathers.default())
    .use(express.json())
    .use(express.errorHandler())
    .configure(express.rest())
  require('./services/driver').create(app)
  return app
}
