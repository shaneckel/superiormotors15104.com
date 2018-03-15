import { Router } from 'express'
import Prismic from 'prismic.io'

const router = Router()
const API = 'https://superiormotors.prismic.io/api'

router.get('/menu', (req, res) => {
  Prismic.api(API, (err, api) => {
    api.query(
      [ Prismic.Predicates.at("document.type", "menu")],
      { pageSize: 1, orderings : '[document.last_publication_date desc]'  }
    )
    .then((data) => res.send(data.results))
    .catch((err) => console.log(err))
  })
})
router.get('/hearthmenu', (req, res) => {
  Prismic.api(API, (err, api) => {
    api.query(
      [ Prismic.Predicates.at("document.type", "hearth_menu")],
      { pageSize: 1, orderings : '[document.last_publication_date desc]'  }
    )
    .then((data) => res.send(data.results))
    .catch((err) => console.log(err))
  })
})

export default router
