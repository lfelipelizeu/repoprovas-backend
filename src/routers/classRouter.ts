/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import * as classController from '../controllers/classController';

const router = Router();

router.get('/', classController.getClasses);

export default router;
