const express = require('express');
const mongoose = require('mongoose');

const app = express();

// db config
const db = require('./config/keys').mongoURI;

//conect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Welcome to the dev- info'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
