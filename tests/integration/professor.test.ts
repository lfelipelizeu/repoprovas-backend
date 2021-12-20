/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import { getConnection } from 'typeorm';
import supertest from 'supertest';
import app, { init } from '../../src/app';

const agent = supertest(app);

beforeAll(async () => {
    await init();
});

describe('GET /professors', () => {
    it('should returns 200', async () => {
        const result = await agent.get('/professors');
        const { status } = result;
        expect(status).toEqual(200);
    });
});

afterAll(async () => {
    await getConnection().close();
});
