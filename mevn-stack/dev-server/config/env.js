import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyparser from 'body-parser'

export function setEnvironment(app) {

  if (process.env.NODE_ENV !== `production`) {
    setDevEnv(app)
  }
  else {
    setProdEnv(app)
  }
}

function setDevEnv(app) {
  process.env.NODE_ENV = `development`
  process.env.DB_URL = `mongodb://localhost:27017/vue-db`
  process.env.TOKEN_SECRET = 'my-development-secret'
  app.use(bodyparser.json())
  app.use(morgan(`dev`));
  app.use(cors())
}

function setProdEnv(app) {
  process.env.DB_URL = `mongodb://localhost:27017/prod-db`
  process.env.TOKEN_SECRET = 'my-production-secret'
  app.use(bodyparser.json())
  app.use(express.static(`${__dirname}/../dist`))
}
