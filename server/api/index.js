import { Router } from 'express'

import articles from './articles'
import supporters from './supporters'
import menu from './menu'

var router = Router()

router.use(articles)
router.use(supporters)
router.use(menu)

export default router
