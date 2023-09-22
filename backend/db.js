
//const mongoURI="mongodb+srv://muqadasurooj:gOtkpUexqWb6xdoY@gofoodmern.f0qegyz.mongodb.net/?retryWrites=true&w=majority";

// const mongoURI="mongodb+srv://GoFoodMern:gOtkpUexqWb6xdoY@gofoodmern.f0qegyz.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require('mongoose')
const mongoURI="mongodb://gofoodmern:gOtkpUexqWb6xdoY@ac-eovanbl-shard-00-00.f0qegyz.mongodb.net:27017,ac-eovanbl-shard-00-01.f0qegyz.mongodb.net:27017,ac-eovanbl-shard-00-02.f0qegyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-c22rte-shard-0&authSource=admin&retryWrites=true&w=majority"
const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},(err, result) => {
        if(err)
        console.log("----",err)
    else{
        console.log("connected")
    }
})
}
module.exports=mongoDB;