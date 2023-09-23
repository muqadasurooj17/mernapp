// 
const express = require('express');
//const mongoose = require('mongoose');
// global.foodData = require('./db')(function call(err, data, CatData) {
//   // console.log(data)
//   if(err) console.log(err);
//   global.foodData = data;
//   global.foodCategory = CatData;
// })

const cors = require('cors'); // Import the cors middleware
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
app.use(cors());
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));

app.use('/api',require("./Routes/DisplayData"));


// // Enable CORS for all routes
// app.use(cors());

// // ... Other middleware and routes ...
app.get('/',(req,res)=>{
  res.send('hello world')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
