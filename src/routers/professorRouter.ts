/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import * as professorController from '../controllers/professorController';

const router = Router();

router.get('/', professorController.getProfessors);

export default router;
