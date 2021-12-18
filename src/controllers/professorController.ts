/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import * as professorService from '../services/professorService';

export async function getProfessors(req: Request, res: Response) {
    try {
        const professors = await professorService.getProfessors();

        return res.status(200).send(professors);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro desconhecido!');
    }
}
