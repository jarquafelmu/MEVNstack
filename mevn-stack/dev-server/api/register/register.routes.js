import express from 'express';
const router = express.Router();
import * as controller from './registrer.controller'

router.post(`/register`, controller.index);

export default router;
