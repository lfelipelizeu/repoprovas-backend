/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import * as testController from '../controllers/testController';

const router = Router();

router.post('/', testController.createTest);

export default router;
