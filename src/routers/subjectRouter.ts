/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import * as subjectController from '../controllers/subjectController';

const router = Router();

router.get('/', subjectController.getSubjects);

export default router;
