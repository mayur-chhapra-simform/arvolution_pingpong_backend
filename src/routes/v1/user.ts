/**
 * Author: Mayur
 */

import { Router } from "express";

const router = Router();

import controller from "../../controller/v1/user.controller";

router

.post('/', controller.addUsers)
.get('/', controller.getUsers);

module.exports = router;

export default router