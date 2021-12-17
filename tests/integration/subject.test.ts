import { getConnection } from 'typeorm';
import supertest from 'supertest';
import app, { init } from '../../src/app';

const agent = supertest(app);

beforeAll(async () => {
    await init();
});

describe('GET /subjects', () => {
    it('should returns 200', async () => {
        const result = await agent.get('/subjects');
        const { status } = result;
        expect(status).toEqual(200);
    });
});

afterAll(async () => {
    await getConnection().close();
});
