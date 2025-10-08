const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('user'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/user/index.html');
});

app.listen(port, () => {
  console.log('Server running at http://localhost:${port}');
});