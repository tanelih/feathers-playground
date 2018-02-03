import { Service } from 'feathers-mongoose'
import { Model } from '../models/driver'

export function create (app: any) {
  app.use('drivers', new Service({ Model }))
  app.service('drivers').hooks({
    after: {
      find (context: any) {
        context.result = context.result.map((result: any) =>{
          return {
            id: result._id,
            name: result.name
          }
        })
      }
    }
  })
}

new Model({ name: 'pentti' }).save()
new Model({ name: 'markku' }).save()
