import { Router } from 'express'
import Prismic from 'prismic.io'

const router = Router()
const API = 'https://superiormotors.prismic.io/api'

router.get('/shortArticles', (req, res) => {
  Prismic.api(API, (err, api) => {
    api.query(
      [ Prismic.Predicates.at("document.type", "articles")],
      { pageSize: 2, orderings :'[my.articles.date desc]' }
    )
    .then((data) => res.send(data.results))
    .catch((err) => console.log(err))
  })
})

router.get('/articles', (req, res) => {
  Prismic.api(API, (err, api) => {
    api.query(
      [ Prismic.Predicates.at("document.type", "articles")],
      { pageSize: 10, orderings :'[my.articles.date desc]' }
    )
    .then((data) => res.send(data.results))
    .catch((err) => console.log(err))
  })
})

router.get('/articles/:uid', (req, res) => {
  Prismic.api(API, (err, api) => {
    api.getByUID('articles', req.params.uid)
      .then((data) => {
        var body = data.getStructuredText('articles.body').asHtml()
        if (data)
          res.send({data: data, body: body});
        else
          res.sendStatus(404)
      })
      .catch((err) => console.log(err))
  })
})

export default router
