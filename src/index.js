const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use('/v1', routes);

app.listen(8080, () => {
  console.log(`servidor conectado en http://localhost:8080`);
});
