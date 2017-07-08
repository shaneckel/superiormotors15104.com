import { Router } from 'express'

const router = Router()

router.get('/supporters/', (req, res) => {
  let supporters = JSON.parse(require('fs').readFileSync('static/supporters.json', 'utf8'))
  res.json(supporters)
})

router.get('/supporters/:id', (req, res) => {
  let supporters = JSON.parse(require('fs').readFileSync('static/supporters.json', 'utf8'))
  var supporter = supporters.filter((item) => {
    if(Object.getOwnPropertyNames(item)[0] == req.params.id)
      return item;
  })
  if(supporter.length > 0)
    res.json(supporter)
  else
    res.sendStatus(404)
})

export default router
