const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let path = require('path');

const port = process.env.PORT || 5001;
const mongoose = require('mongoose');

app.listen(port, '127.0.0.1', () => {
  console.log(`Listening on port ${port}`);
});
app.set('etag', false);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  }),
);
app.use(cookieParser());

// DB Config
const db = require('./config/keys').mongoURI;

//connect to mongodb Atlas
mongoose
  .connect(db, {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

let booking = require('./routes/api');
app.use('/api/', booking);

//CORS middleware
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Request-Headers', '*');
  res.header('Content-Type', 'text/html; charset=utf-8');
  next();
};

app.use(allowCrossDomain);

/*app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'Access-Control-Allow-Headers');

  next();
});*/

// Server static assets if in dev

/*if (process.env.NODE_ENV !== 'development') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'unblur-calendar')));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'unblur-calendar', 'build', 'index.html'),
    );
  });
}*/

module.exports = app;
