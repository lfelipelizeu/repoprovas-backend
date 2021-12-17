/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import TestSchema from '../validations/TestSchema';
import * as testService from '../services/testService';
import NotFound from '../errors/NotFound';
import Conflict from '../errors/Conflict';
import ValidationError from '../errors/ValidationError';

export async function createTest(req: Request, res: Response) {
    try {
        await TestSchema.validateAsync(req.body);

        await testService.createTest(req.body);

        return res.sendStatus(201);
    } catch (error) {
        if (error instanceof ValidationError) return res.status(400).send(error.message);
        if (error instanceof NotFound) return res.status(404).send(error.message);
        if (error instanceof Conflict) return res.status(409).send(error.message);

        console.error(error);
        return res.status(500).send('Erro desconhecido!');
    }
}
