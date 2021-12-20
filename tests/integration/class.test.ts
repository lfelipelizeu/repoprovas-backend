/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { getConnection } from 'typeorm';
import supertest from 'supertest';
import faker from 'faker';
import app, { init } from '../../src/app';

const agent = supertest(app);

beforeAll(async () => {
    await init();
});

describe('GET /classes', () => {
    it('should returns 400 for invalid id type', async () => {
        const invalidId = faker.random.word();

        const result = await agent.get(`/classes?subject=${invalidId}`);
        const { status } = result;
        expect(status).toEqual(400);
    });

    it('should returns 404 for inexistent subject', async () => {
        const inexitentId = faker.datatype.number({ min: 100 });

        const result = await agent.get(`/classes?subject=${inexitentId}`);
        const { status } = result;
        expect(status).toEqual(404);
    });

    it('should returns 200', async () => {
        const result = await agent.get('/classes');
        const { status } = result;
        expect(status).toEqual(200);
    });
});

afterAll(async () => {
    await getConnection().close();
});
