const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
