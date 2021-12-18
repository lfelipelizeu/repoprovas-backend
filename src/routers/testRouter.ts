/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import * as testController from '../controllers/testController';

const router = Router();

router.post('/', testController.createTest);
router.get('/professor/:id', testController.getTestsByProfessor);
router.get('/subject/:id', testController.getTestsBySubject);

export default router;
