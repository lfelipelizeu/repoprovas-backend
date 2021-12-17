/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import { getRepository } from 'typeorm';
import TestEntity from '../entities/TestEntity';
import NotFound from '../errors/NotFound';
import Conflict from '../errors/Conflict';
import CategoryEntity from '../entities/CategoryEntity';
import ClassEntity from '../entities/ClassEntity';

interface NewTest {
    year: number;
    semester: number;
    categoryId: number;
    classId: number;
    link: string;
}

export async function createTest(test: NewTest): Promise<void> {
    const classResult = await getRepository(ClassEntity).findOne({
        id: test.classId,
    });
    if (!classResult) throw new NotFound('Turma não encontrada');

    const category = await getRepository(CategoryEntity).findOne({
        id: test.categoryId,
    });
    if (!category) throw new NotFound('Categoria inválida!');

    const linkConflict = await getRepository(TestEntity).findOne({
        link: test.link,
    });
    if (linkConflict) throw new Conflict('Essa prova já está registrada!');

    await getRepository(TestEntity).insert({
        name: `${test.year}.${test.semester}`,
        class: {
            id: test.classId,
        },
        category: {
            id: test.categoryId,
        },
        link: test.link,
    });
}
