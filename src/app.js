const express = require('@feathersjs/express')
const feathers = require('@feathersjs/feathers')

module.exports = express.default(feathers.default())
  .use(express.json())
  .configure(express.rest())
  .configure(require('./services/driver').configure)
  .use(express.errorHandler())
