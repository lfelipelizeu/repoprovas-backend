/* eslint-disable import/no-unresolved */
import { getRepository } from 'typeorm';
import ProfessorEntity from '../entities/ProfessorEntity';
import TestEntity from '../entities/TestEntity';

export async function getProfessors(): Promise<any[]> {
    const professors = await getRepository(ProfessorEntity).find();

    return professors;
}

export async function countTestsOnDatabase(professors: ProfessorEntity[]) {
    const tests = await getRepository(TestEntity).find();

    return professors.map((professor) => ({
        ...professor,
        testCount: tests.filter((test) => test.class.professor.id === professor.id).length,
    }));
}
