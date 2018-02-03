require('dotenv/config')

import 'dotenv/config'

import * as app from './app'
import * as database from './database'

database.connect().then(() => {
  const service = app.create().listen(process.env.PORT, (err: Error) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    const { port } = service.address()
    console.log(`Listening at ${port}`)
  })
})
