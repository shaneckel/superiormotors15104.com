import { Router } from 'express'

import articles from './articles'

var router = Router()

router.use(articles)

export default router
