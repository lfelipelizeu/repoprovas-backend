/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import * as subjectService from '../services/subjectService';

export async function getSubjects(req: Request, res: Response) {
    try {
        const subjects = await subjectService.getSubjects();

        const subjectsWithTestCount = await subjectService.countTestsOnDatabase(subjects);

        return res.status(200).send(subjectsWithTestCount);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro desconhecido!');
    }
}
