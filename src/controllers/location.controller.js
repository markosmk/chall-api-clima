const getLocation = (req, res, next) => {
  res.json({ msg: 'datos de ubicacion segun ip-api' });
};

module.exports = getLocation;
