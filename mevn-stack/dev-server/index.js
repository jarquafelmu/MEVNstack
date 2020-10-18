
import express from 'express'
const app = express()
const port = 3000
import { registerRoutes } from './routes'

registerRoutes(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example apps listening at http://localhost:${port}`)
})
