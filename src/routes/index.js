const express = require('express');
const router = express.Router();

router.get('/location', (req, res, next) => {
  res.json({ msg: 'datos de ubicacion segun ip-api' });
});
router.get('/current/:city?', (req, res, next) => {
  res.json({
    msg: 'datos de ubicacion de city o ubicacion actual, y el estado actual',
    city: req.params.city || null,
  });
});
router.get('/forecast/:city?', (req, res, next) => {
  res.json({
    msg: 'datos de ubicacion de city o ubicacion actual, y el estado tiempo a 5 dias',
    city: req.params.city || null,
  });
});

module.exports = router;
