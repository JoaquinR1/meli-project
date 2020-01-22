// dependencies
const express = require("express");
const app = express();

const helmet = require('helmet');
var cors = require('cors');
var logger = require('morgan');

const itemsRouter = require('./routes/items');

app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('GET /');
});

app.use('/api', itemsRouter);

app.listen(3000, () => {
 console.log("Server initialized on port 3000");
});