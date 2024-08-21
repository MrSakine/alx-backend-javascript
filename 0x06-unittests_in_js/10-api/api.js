const express = require('express');
const app = express();
app.use(express.json());
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

app.get('/available_payments', (_, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  console.log(req.body)
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Username is required');
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
