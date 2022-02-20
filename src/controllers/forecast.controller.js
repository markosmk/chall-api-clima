const getForecast = (req, res, next) => {
  res.json({
    msg: 'datos de ubicacion de city o ubicacion actual, y el estado tiempo a 5 dias',
    city: req.params.city || null,
  });
};

module.exports = getForecast;
