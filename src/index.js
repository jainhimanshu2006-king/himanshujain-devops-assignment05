const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the CodeHub DevOps Project!');
});

app.get('/health', (req, res) => {
  res.status(200).send('System is healthy and code is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
