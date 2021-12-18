/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import ProfessorEntity from '../entities/ProfessorEntity';

export async function getProfessors(): Promise<any[]> {
    const professors = await getRepository(ProfessorEntity).find();

    return professors;
}
