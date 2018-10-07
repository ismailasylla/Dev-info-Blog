const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// importing routes api for the account informations such users profile posts
const user = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;

//conect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Welcome to the dev- info'));

// Use Routes
app.use('/api/users', user);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
