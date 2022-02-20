const getLocation = (req, res, next) => {
  const location = req.location;

  res.json({ msg: 'datos de ubicacion segun ip-api', location });
};

module.exports = getLocation;
