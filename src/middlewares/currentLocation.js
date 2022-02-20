const fetch = require('node-fetch');
const { API_URL_GEOCODING } = require('../services/getApiData');

const currentLocation = async (req, res, next) => {
  const city = req.params.city;
  if (!city) {
    const response = await fetch('http://ip-api.com/json/');
    const location = await response.json();
    if (!location) {
      return res.json({ status: 404, msg: 'Ciudad No encontrada' });
    }
    req.location = location;
  } else {
    const response = await fetch(`${API_URL_GEOCODING}&q=${city}`);
    const geolocation = await response.json();

    if (!geolocation || geolocation.length === 0) {
      return res.json({ status: 404, msg: 'Ciudad No encontrada' });
    }
    req.location = geolocation[0]; // only first data of array
  }
  next();
};

module.exports = currentLocation;
