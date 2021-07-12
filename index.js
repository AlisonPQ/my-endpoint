const express = require('express');
const app = express();

app.get('/api/get-health', (req, res) => {
  const today = new Date();
  res.send({
    time: `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`,
    date: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080...');
});
