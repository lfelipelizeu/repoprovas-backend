/* eslint-disable import/no-unresolved */
import './setup';
import express, { Request, Response } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import subjectRouter from './routers/subjectRouter';
import classRouter from './routers/classRouter';
import testRouter from './routers/testRouter';
import professorRouter from './routers/professorRouter';

import connectDatabase from './database';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req: Request, res: Response) => res.status(200).send('It\'s alive!'));

app.use('/subjects', subjectRouter);
app.use('/classes', classRouter);
app.use('/tests', testRouter);
app.use('/professors', professorRouter);

export async function init() {
    await connectDatabase();
}

export default app;
