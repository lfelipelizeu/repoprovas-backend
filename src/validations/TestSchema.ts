/* eslint-disable import/no-unresolved */
import joi from 'joi';
import ValidationError from '../errors/ValidationError';

const TestSchema = joi.object({
    year: joi.number()
        .integer()
        .min(2000)
        .max((new Date()).getFullYear())
        .required()
        .error(new ValidationError('O ano deve ser um número inteiro entre 2000 e o ano atual')),
    semester: joi.number()
        .integer()
        .min(1)
        .max(2)
        .required()
        .error(new ValidationError('O semestre deve ser 1 ou 2')),
    categoryId: joi.number()
        .integer()
        .required()
        .error(new ValidationError('O id da categoria deve ser um número inteiro')),
    classId: joi.number()
        .integer()
        .required()
        .error(new ValidationError('O id da turma deve ser um número inteiro')),
    link: joi.string()
        .uri()
        .required()
        .error(new ValidationError('O link deve ser um link válido')),
});

export default TestSchema;
