const express    = require('express');
const mongoose   = require('./db/mongoose');
const bodyParser = require('body-parser');
const path       = require('path');
const cors       = require('cors');
const helmet     = require('helmet');

const server     = express();

server.use(express.static(path.join(__dirname, 'build')));
server.use(cors({origin: "localhost://3000"}));
server.use(helmet());

server.get('/', (req, res ) => {
    res.status(200).json({api: 'app and running'})
})

server.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'build', 'index.html'))
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
}); 