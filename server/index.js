const express = require("express");
const app = express();

app.get('/', (req, res) => {
  console.log(req.query);
  res.send('GET / saluditos');
});

app.listen(3000, () => {
 console.log("Server initialized on port 3000");
});