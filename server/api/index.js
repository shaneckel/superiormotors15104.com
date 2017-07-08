import { Router } from 'express'

import articles from './articles'
import supporters from './supporters'

var router = Router()

router.use(articles)
router.use(supporters)

export default router
