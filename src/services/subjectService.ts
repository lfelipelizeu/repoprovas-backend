/* eslint-disable import/no-unresolved */
import { getRepository } from 'typeorm';
import SubjectEntity from '../entities/SubjectEntity';
import TestEntity from '../entities/TestEntity';

export async function getSubjects(): Promise<any[]> {
    const subjects = await getRepository(SubjectEntity).find();

    return subjects;
}

export async function countTestsOnDatabase(subjects: SubjectEntity[]) {
    const tests = await getRepository(TestEntity).find();

    return subjects.map((subject) => ({
        ...subject,
        testCount: tests.filter((test) => test.class.subject.id === subject.id).length,
    }));
}
