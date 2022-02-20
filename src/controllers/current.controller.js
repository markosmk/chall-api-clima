const getCurrentWeather = (req, res, next) => {
  res.json({
    msg: 'datos de ubicacion de city o ubicacion actual, y el estado actual',
    city: req.params.city || null,
    api: process.env.API_KEY || 'nada', // only try
  });
};

module.exports = getCurrentWeather;
