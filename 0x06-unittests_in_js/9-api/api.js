const express = require('express');
const app = express();

const PORT = 7865;

app.get('/', (_, res) => {
  return res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.use('/cart/:id', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
