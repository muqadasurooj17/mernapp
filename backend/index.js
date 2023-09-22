// 
const express = require('express');
//const mongoose = require('mongoose');
const mongoDB=require("./db");
mongoDB();

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Connect to MongoDB using Mongoose
//mongoose.connect('mongodb+srv://muqadasurooj:gOtkpUexqWb6xdoY@gofoodmern.f0qegyz.mongodb.net/gofoodmern?retryWrites=true&w=majority', {
//mongoose.connect('mongodb://muqadasurooj:gOtkpUexqWb6xdoY@ac-eovanbl-shard-00-00.f0qegyz.mongodb.net:27017,ac-eovanbl-shard-00-01.f0qegyz.mongodb.net:27017,ac-eovanbl-shard-00-02.f0qegyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-c22rte-shard-0&authSource=admin&retryWrites=true&w=majority', {
  
