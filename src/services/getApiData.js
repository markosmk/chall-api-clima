// Todo en una llamada
// https://openweathermap.org/api/one-call-api
const API_URL_ONECALL = `https://api.openweathermap.org/data/2.5/onecall?appid=${process.env.API_KEY}&units=metric&lang=es&exclude=hourly,minutely,alerts`;
//..&lat={lat}&lon={lon}

// Geocoding API
// https://openweathermap.org/api/geocoding-api
const API_URL_GEOCODING = `https://api.openweathermap.org/geo/1.0/direct?appid=${process.env.API_KEY}`;

// Current weather data
// https://openweathermap.org/current
const API_URL_CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&units=metric&lang=es`;
//..&lat={lat}&lon={lon}

module.exports = {
  API_URL_ONECALL,
  API_URL_GEOCODING,
  API_URL_CURRENT_WEATHER,
};
