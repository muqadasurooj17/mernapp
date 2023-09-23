// 
const express = require('express');
//const mongoose = require('mongoose');

const app = express()
const port = 5000;
const mongoDB=require("./db");
mongoDB();
app.get('/',(req,res,next)=>{
  res.setHeader(
    "Access-Control-Allow-Origin", "http://localhost:3000");
res.header(
  "Access-Control-Allow-Origin",
  "Origin,X-Requested-With,Content-TypeError,Accept"
)


next();
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));

app.get('/',(req,res)=>{
  res.send('hello world')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Connect to MongoDB using Mongoose
//mongoose.connect('mongodb+srv://muqadasurooj:gOtkpUexqWb6xdoY@gofoodmern.f0qegyz.mongodb.net/gofoodmern?retryWrites=true&w=majority', {
//mongoose.connect('mongodb://muqadasurooj:gOtkpUexqWb6xdoY@ac-eovanbl-shard-00-00.f0qegyz.mongodb.net:27017,ac-eovanbl-shard-00-01.f0qegyz.mongodb.net:27017,ac-eovanbl-shard-00-02.f0qegyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-c22rte-shard-0&authSource=admin&retryWrites=true&w=majority', {
  
