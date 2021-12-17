/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import ClassEntity from '../entities/ClassEntity';
import NotFound from '../errors/NotFound';

interface Class {
    id: number;
    subject: {
        id: number;
        name: string;
        period: number;
    };
    professor: {
        id: number;
        name: string;
    };
}

// eslint-disable-next-line max-len
export async function getClasses(subjectId?: number):Promise<Class[]> {
    const filter = {
        subject: {
            id: subjectId,
        },
    };
    if (!subjectId) delete filter.subject;

    const classes = await getRepository(ClassEntity).find(filter);

    if (classes.length === 0) throw new NotFound('Não foi encontrada nenhuma turma!');

    return classes;
}
