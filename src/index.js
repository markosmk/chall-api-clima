const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.json({ msg: 'rutas de clima por aqui' });
});

app.listen(8080, () => {
  console.log('servidor conectado');
});
