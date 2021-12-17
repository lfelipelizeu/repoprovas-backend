/* eslint-disable import/no-unresolved */
import { getConnection, getRepository } from 'typeorm';
import supertest from 'supertest';
import faker from 'faker';
import TestEntity from '../../src/entities/TestEntity';
import app, { init } from '../../src/app';
import { createTest } from '../factories/testFactory';

const agent = supertest(app);

beforeAll(async () => {
    await init();
});

describe('POST /tests', () => {
    const newTest = createTest();

    beforeAll(async () => {
        await getRepository(TestEntity).insert({
            name: `${newTest.year}.${newTest.semester}`,
            class: {
                id: newTest.classId,
            },
            category: {
                id: newTest.categoryId,
            },
            link: newTest.link,
        });
    });

    afterAll(async () => {
        await getRepository(TestEntity).clear();
    });

    it('should returns 400 for invalid body', async () => {
        const body = createTest();
        body.year = faker.datatype.number({ max: 1999 });

        const result = await agent.post('/tests').send(body);
        const { status } = result;
        expect(status).toEqual(400);
    });

    it('should returns 404 for inexistent category', async () => {
        const body = createTest();
        body.categoryId = faker.datatype.number({ min: 10 });

        const result = await agent.post('/tests').send(body);
        const { status } = result;
        expect(status).toEqual(404);
    });

    it('should returns 409 for link conflict', async () => {
        const body = newTest;

        const result = await agent.post('/tests').send(body);
        const { status } = result;
        expect(status).toEqual(409);
    });

    it('should returns 201 for valid body', async () => {
        const body = createTest();

        const result = await agent.post('/tests').send(body);
        const { status } = result;
        expect(status).toEqual(201);
    });
});

afterAll(async () => {
    await getConnection().close();
});
