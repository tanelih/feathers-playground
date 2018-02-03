require('dotenv/config')

require('./database').connect().then(() => {
  const app = require('./app')
  const service = app.listen(process.env.PORT, (err) => {
    if (err) {
      console.error(err)
      return process.exit(1)
    }
    console.log(`Listening at ${service.address().port}`)
  })
})
