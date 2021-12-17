/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import * as subjectService from '../services/subjectService';

export async function getSubjects(req: Request, res: Response) {
    try {
        const subjects = await subjectService.getSubjects();

        return res.status(200).send(subjects);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}
