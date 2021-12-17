/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import * as classService from '../services/classService';
import NotFound from '../errors/NotFound';

export async function getClasses(req: Request, res: Response) {
    const subjectId = Number(req.query.subject);
    const isIdValid = !subjectId || subjectId % 1 === 0;

    if (!isIdValid) return res.status(400).send('O id precisa ser um número inteiro!');

    try {
        const classes = await classService.getClasses(subjectId);

        return res.status(200).send(classes);
    } catch (error) {
        if (error instanceof NotFound) return res.status(404).send(error.message);

        console.error(error);
        return res.sendStatus(500);
    }
}
