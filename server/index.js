import Nuxt from 'nuxt'
import express from 'express'

import api from './api'

const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

app.set('port', port)
app.use('/api', api)

async function start() {
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  const nuxt = new Nuxt(config)
  app.use(nuxt.render)
  app.listen(port, host)
  console.log('sm15104 ' + host + ':' + port)
}

start()
