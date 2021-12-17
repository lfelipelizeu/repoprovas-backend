/* eslint-disable import/no-unresolved */
import './setup';
import express, { Request, Response } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import * as classController from './controllers/classController';
import * as testController from './controllers/testController';
import * as subjectController from './controllers/subjectController';

import connectDatabase from './database';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req: Request, res: Response) => res.status(200).send('It\'s alive!'));

app.get('/subjects', subjectController.getSubjects);
app.get('/classes', classController.getClasses);
app.post('/tests', testController.createTest);

export async function init() {
    await connectDatabase();
}

export default app;
