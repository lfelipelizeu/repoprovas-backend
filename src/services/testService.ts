/* eslint-disable import/no-unresolved */
import { getRepository } from 'typeorm';
import TestEntity from '../entities/TestEntity';
import NotFound from '../errors/NotFound';
import Conflict from '../errors/Conflict';
import CategoryEntity from '../entities/CategoryEntity';
import ClassEntity from '../entities/ClassEntity';
import ProfessorEntity from '../entities/ProfessorEntity';
import SubjectEntity from '../entities/SubjectEntity';

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

export async function getTestsByProfessor(professorId: number) {
    const professor = await getRepository(ProfessorEntity).findOne({
        id: professorId,
    });
    if (!professor) throw new NotFound('Professor não encontrado!');

    const tests = await getRepository(TestEntity).find();
    const testsFiltered = tests.filter((test) => test.class.professor.id === professor.id);

    return {
        ...professor,
        tests: testsFiltered.map((test) => ({
            id: test.id,
            name: test.name,
            subject: test.class.subject.name,
            category: test.category.name,
            link: test.link,
        })),
    };
}

export async function getTestsBySubject(subjectId: number) {
    const subject = await getRepository(SubjectEntity).findOne({
        id: subjectId,
    });
    if (!subject) throw new NotFound('Disciplina não encontrada!');

    const tests = await getRepository(TestEntity).find();
    const testsFiltered = tests.filter((test) => test.class.subject.id === subject.id);

    return {
        ...subject,
        tests: testsFiltered.map((test) => ({
            id: test.id,
            name: test.name,
            professor: test.class.professor.name,
            category: test.category.name,
            link: test.link,
        })),
    };
}
