const express    = require('express');
const mongoose   = require('./db/mongoose');
const bodyParser = require('body-parser');
const path       = require('path');

const server     = express();

server.use(express.static(path.join(__dirname, 'build')));

server.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'build', 'index.html'))
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
}); 