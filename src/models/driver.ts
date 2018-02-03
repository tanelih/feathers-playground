import * as mongoose from 'mongoose'

export const Model = mongoose.model('driver', new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String
  }
}))
