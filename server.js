require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./db.js');
const productRouter = require('./routes/product.js');

require('colors');

const port = process.env.PORT || 8765;

const app = express();
app.use(cors());
app.use(express.json());

db();

app.get('/', (req, res) => {
  res.send('up and running');
});

app.use('/product', productRouter);

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`.rainbow);
});
