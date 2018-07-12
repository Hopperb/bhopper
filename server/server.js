const express  = require('express');
const mongoose = require('mongoose');

const server   = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({api: 'up and running'})
});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/BHOPPER');

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
}); 