const universityService = require('../services/university.service');

exports.getUniversities = async function (req, res, next) {
    try {
        const universitiesResponse = await universityService.getUniversities(req, res, next);
        const universities = universitiesResponse;
        //return res.status(200).json(universities);
        res.render('index', { universities });

        //return universityService.getUniversities(req, res, next);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}