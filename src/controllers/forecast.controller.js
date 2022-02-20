const fetch = require('node-fetch');
const { API_URL_ONECALL } = require('../services/getApiData');

const getForecast = async (req, res, next) => {
  // 1) get location of current or city
  const location = req.location;
  // 2) get weather for 5 days
  const response = await fetch(
    `${API_URL_ONECALL}&lat=${location.lat}&lon=${location.lon}`
  );
  const daily = await response.json();

  res.json({
    msg: 'success',
    location,
    daily: daily.daily,
  });
};

module.exports = getForecast;
