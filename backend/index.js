// 
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://muqadasurooj:gOtkpUexqWb6xdoY@ac-eovanbl-shard-00-00.f0qegyz.mongodb.net:27017,ac-eovanbl-shard-00-01.f0qegyz.mongodb.net:27017,ac-eovanbl-shard-00-02.f0qegyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-c22rte-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    startServer();
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define routes and middleware here

function startServer() {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}
