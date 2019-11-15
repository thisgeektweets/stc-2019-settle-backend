const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 7077;
require('dotenv').config();

const message = require('./server/routes/messages.js');
const payments = require('./server/routes/payments.js');

app.use(bodyParser({ limit: '500mb' }));
app.use('/api/notifications', message);
app.use('/api/payments', payments);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => console.log(`Listening at localhost:${port}`));
