/**
 * Author: Mayur
 */

import { Router } from 'express';

const router = Router();

import controller from '../../controller/v1/score.controller';

router.post('/', controller.addScore)

module.exports = router;

export default router