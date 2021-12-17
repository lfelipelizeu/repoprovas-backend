/* eslint-disable import/prefer-default-export */
import faker from 'faker';

export function createTest() {
    const newTest = {
        year: faker.datatype.number({ min: 2000, max: (new Date().getFullYear()) }),
        semester: faker.datatype.number({ min: 1, max: 2 }),
        categoryId: 1,
        classId: 1,
        link: faker.internet.url(),
    };

    return newTest;
}
