const fetch = require('node-fetch');
const { API_URL_CURRENT_WEATHER } = require('../services/getApiData');

const getCurrentWeather = async (req, res, next) => {
  // 1) get location of current or city
  const location = req.location;
  // 2) get weather current
  const responseWeather = await fetch(
    `${API_URL_CURRENT_WEATHER}&lon=${location.lon}&lat=${location.lat}`
  );
  const current = await responseWeather.json();

  res.json({
    msg: 'success',
    lat: location.lat,
    lon: location.lon,
    location,
    current,
  });
};

module.exports = getCurrentWeather;
