/**
 * Author: Mayur
 */

import { Router } from "express";

const router = Router();

import controller from "../../controller/v1/game.controller";

router.post('/', controller.addGame)

module.exports = router;

export default router