const universityService = require('../services/university.service');

exports.getUniversities = async function (req, res, next) {
    try {
        const universitiesResponse = await universityService.getUniversities(req, res, next);
        const universities = universitiesResponse;
        res.render('index', { universities });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}