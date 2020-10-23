import express from 'express';
const router = express.Router();
import * as controller from './tasks.controller'

router.post(`/task`, constroller.create);
router.get(`/task`, constroller.index);
router.get(`/task/:id`, constroller.show);
router.put(`/task`, constroller.update);
router.delete(`/task`, constroller.remove);

export default router;
