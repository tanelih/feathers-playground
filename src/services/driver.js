const service = require('feathers-mongoose')
const Model = require('../models/driver')

module.exports.configure = function configure (app) {
  const paginate = {
    default: 1
  }
  app.use('drivers', service({ Model, paginate }))
  app.service('drivers').hooks({
    after: {
      find (context) {
        console.log(context.result)
      }
    }
  })
  return app
}

new Model({ name: 'pentti' }).save()
new Model({ name: 'markku' }).save()
