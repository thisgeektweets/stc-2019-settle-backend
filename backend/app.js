const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 7077;
require('dotenv').config();

const hello = require('./server/routes/hello.js');

app.use(bodyParser({ limit: '500mb' }));
app.use('/api', hello);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => console.log(`Listening at localhost:${port}`));
