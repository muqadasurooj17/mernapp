const express= require ('express')
const router=express.Router();

router.post('/foodData',(req,res)=>{
    try {
        //console.log(global.FoodItems,)
        res.send([global.FoodItems, global.FoodCategory])
    } catch (error) {
        console.log(error.message);
        res.send("server eros")
    }
})
module.exports=router;