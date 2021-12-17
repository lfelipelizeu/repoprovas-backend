/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import SubjectEntity from '../entities/SubjectEntity';

export async function getSubjects(): Promise<any[]> {
    const subjects = await getRepository(SubjectEntity).find();

    return subjects;
}
