const express    = require('express');
const mongoose   = require('./db/mongoose');
const bodyParser = require('body-parser');
const path       = require('path');
const cors       = require('cors');
const helmet     = require('helmet');
const morgan     = require('morgan');

require('dotenv').config()

const server     = express();

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // dojo sends X-Requested-With and If-None-Match (for insert)
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, If-None-Match');

  next();
}

server.use(allowCrossDomain);

server.use(express.static(path.join(__dirname, 'client/build')));
server.use(cors());
server.use(helmet());
server.use(morgan('combined'))


server.get('/', (req, res ) => {
    res.status(200).json({api: 'app and running'})
})

server.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'client/build'))
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
}); 