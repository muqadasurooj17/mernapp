
//const mongoURI="mongodb+srv://muqadasurooj:gOtkpUexqWb6xdoY@gofoodmern.f0qegyz.mongodb.net/?retryWrites=true&w=majority";

// const mongoURI="mongodb+srv://GoFoodMern:gOtkpUexqWb6xdoY@gofoodmern.f0qegyz.mongodb.net/?retryWrites=true&w=majority"

const mongoose = require('mongoose')
const mongoURI="mongodb://muqadasurooj:gOtkpUexqWb6xdoY@ac-eovanbl-shard-00-00.f0qegyz.mongodb.net:27017,ac-eovanbl-shard-00-01.f0qegyz.mongodb.net:27017,ac-eovanbl-shard-00-02.f0qegyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-c22rte-shard-0&authSource=admin&retryWrites=true&w=majority"
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
// // const mongoDbClient = require("mongodb").MongoClient
// //const mongoURI = 'mongodb://<!#@!#@>:"!@!@"@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/Customer?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority' // Customer change url to your db you created in atlas
// // mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//     console.log("connected");
//         }
//     })
// };