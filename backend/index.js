// // 
// const express = require('express');
// const mongoose = require('mongoose');
// global.foodData = require('./db')(function call(err, data, CatData) {
//   // console.log(data)
//   if(err) console.log(err);
//   global.foodData = data;
//   global.foodCategory = CatData;
// })

// const cors = require('cors'); // Import the cors middleware
// const app = express()
// const port = 5000;
// const mongoDB=require("./db");
// mongoDB();
// app.get('/',(req,res,next)=>{
//   res.setHeader(
//     "Access-Control-Allow-Origin", "http://localhost:3000");
// res.header(
//   "Access-Control-Allow-Origin",
//   "Origin,X-Requested-With,Content-TypeError,Accept"
// )


// next();
// })
// app.use(cors());
// app.use(express.json())
// app.use('/api',require("./Routes/CreateUser"));

// app.use('/api',require("./Routes/DisplayData"));


// // // Enable CORS for all routes
// // app.use(cors());

// // // ... Other middleware and routes ...
// app.get('/',(req,res)=>{
//   res.send('hello world')
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const cors = require('cors'); // Import the cors middleware
global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})

const express = require('express')
const app = express()
const port = 5000
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
