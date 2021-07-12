const express = require('express');
const app = express();
const os = require("os");

app.get('/api/get-health', (req, res) => {
  const today = new Date();
  var forwardedIpsStr = req.header('x-forwarded-for');
  res.send({
    time: `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`,
    date: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
    IP: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    hostname:os.hostname(),
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080...');
});
