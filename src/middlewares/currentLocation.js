const fetch = require('node-fetch');

const currentLocation = async (req, res, next) => {
  const city = req.params.city;
  if (!city) {
    const response = await fetch('http://ip-api.com/json/');
    const location = await response.json();
    req.location = location;
  }
  next();
};

module.exports = currentLocation;
