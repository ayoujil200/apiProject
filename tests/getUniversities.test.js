const getUniversities = require('../services/university.service');

describe("getUniversities function", () => {
    test('Should return universities list from Morocco', async () => {
        const universities = await getUniversities.getUniversities();
        expect(universities.length).toBe(30);
    });[]
});