const mongoose = require('mongoose')
const mockgoose = require('mockgoose')

module.exports.connect = async function connect () {
  if (process.env.NODE_ENV === 'test') {
    const mockDB = new mockgoose.Mockgoose(mongoose)
    await mockDB.prepareStorage()
  }
  await mongoose.connect(process.env.DB_CONN_STR)
}
