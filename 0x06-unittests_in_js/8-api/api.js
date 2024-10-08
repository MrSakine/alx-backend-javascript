const express = require('express');
const app = express();

const PORT = 7865;

app.get('/', (_, res) => {
  return res.status(200).send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
