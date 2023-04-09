const axios = require("axios").create({ baseUrl: "https://jsonplaceholder.typicode.com/" });

exports.getUniversities = async function (req, res) {
    try {
        const response = await axios.get(
            "http://universities.hipolabs.com/search?country=morocco"
        );
        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}