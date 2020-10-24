
import express from 'express'
const app = express()
const port = 3000
import { registerRoutes } from './routes'
import { setEnvironment } from './config/env'
import { connectToDB } from './config/db'

if (process.env.NODE_ENV)
  process.env.NODE_ENV = process.env.NODE_ENV.trim()

setEnvironment(app);
connectToDB();
registerRoutes(app);

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== `production`)
    return res.send(
      `Running server in development mode`
    )
  else
    return res.sendFile(`index.html`, { root: `${__dirname}/../dist/` })
})

app.listen(port, () => {
  console.log(
    `MEVN app listening at http://localhost:${port}${(process.env.NODE_ENV) ? ` in ${process.env.NODE_ENV}` : ''}`
  )
})
