import * as mongoose from 'mongoose'
import * as mockgoose from 'mockgoose'

export async function connect () {
  if (process.env.NODE_ENV === 'test') {
    const mockDB = new mockgoose.Mockgoose(mongoose)
    await mockDB.prepareStorage()
  }
  await mongoose.connect(process.env.DB_CONN_STR as string)
}
