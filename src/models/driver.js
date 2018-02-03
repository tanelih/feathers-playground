const mongoose = require('mongoose')

module.exports = mongoose.model('driver', new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String
  }
}))
