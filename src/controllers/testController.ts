/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import TestSchema from '../validations/TestSchema';
import * as testService from '../services/testService';

export async function createTest(req: Request, res: Response) {
    try {
        await TestSchema.validateAsync(req.body);

        await testService.createTest(req.body);

        return res.sendStatus(201);
    } catch (error) {
        if (error.name === 'ValidationError') return res.status(400).send(error.message);
        if (error.name === 'NotFound') return res.status(404).send(error.message);
        if (error.name === 'Conflict') return res.status(409).send(error.message);

        console.error(error);
        return res.status(500).send('Erro desconhecido!');
    }
}

export async function getTestsByProfessor(req: Request, res: Response) {
    const professorId = Number(req.params.id);

    if (professorId % 1 !== 0) return res.status(400).send('O id precisa ser um número inteiro!');

    try {
        const tests = await testService.getTestsByProfessor(professorId);

        return res.status(200).send(tests);
    } catch (error) {
        if (error.name === 'NotFound') return res.status(404).send(error.message);

        console.error(error);
        return res.status(500).send('Erro desconhecido!');
    }
}

export async function getTestsBySubject(req: Request, res: Response) {
    const subjectId = Number(req.params.id);

    if (subjectId % 1 !== 0) return res.status(400).send('O id precisa ser um número inteiro!');

    try {
        const tests = await testService.getTestsBySubject(subjectId);

        return res.status(200).send(tests);
    } catch (error) {
        if (error.name === 'NotFound') return res.status(404).send(error.message);

        console.error(error);
        return res.status(500).send('Erro desconhecido!');
    }
}
