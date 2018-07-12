const express    = require('express');
const mongoose   = require('./db/mongoose');
const bodyParser = require('body-parser');

const server     = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({api: 'up and running'})
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
}); 