const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = 'mongodb+srv://muqadasurooj:gOtkpUexqWb6xdoY@gofoodmern.f0qegyz.mongodb.net/GoFoodMern?retryWrites=true&w=majority'; 
// Customer change url to your db you created in atlas

// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
//module.exports = function (callback) {
    const mongoDB=async()=>{
       await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
            if (err) console.log("---" + err)
            else {
                // var database =
                console.log("connected to mongo")
                const fetched_data=await mongoose.connection.db.collection("FoodItem");
                fetched_data.find({}).toArray(function(err,data){
                    if(err) console.log(err);
                    else 
                    global.FoodItem=data;
                console.log(global.FoodItem);

                });
            }
                // const foodCollection = await mongoose.connection.db.collection("food_items");
                // foodCollection.find({}).toArray(async function (err, data) {
                //     const categoryCollection = await mongoose.connection.db.collection("Categories");
                //     categoryCollection.find({}).toArray(async function (err, Catdata) {
                //         callback(err, data, Catdata);
    
                //     })}); }
}
        )}

        module.exports =mongoDB;


    //mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
       
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
    