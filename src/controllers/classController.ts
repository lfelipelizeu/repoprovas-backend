/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import * as classService from '../services/classService';

export async function getClasses(req: Request, res: Response) {
    const subjectId = req.query.subject;
    const isIdValid = !subjectId || Number(subjectId) % 1 === 0;

    if (!isIdValid) return res.status(400).send('O id precisa ser um número inteiro!');

    try {
        const classes = await classService.getClasses(Number(subjectId));

        return res.status(200).send(classes);
    } catch (error) {
        if (error.name === 'NotFound') return res.status(404).send(error.message);

        console.error(error);
        return res.status(500).send('Erro desconhecido!');
    }
}
