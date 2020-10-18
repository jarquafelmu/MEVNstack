import express from 'express';
const router = express.Router();
import * as controller from './auth.controller'

router.post(`/auth`, (req, res) => {
  res.send(`post.auth - login`)
});

export default router;
