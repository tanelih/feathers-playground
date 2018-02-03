import { app } from './app'

const service = app.listen(app.get('port'), (err: Error) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const { port } = service.address()
  console.log(`Listening at ${port}`)
})
