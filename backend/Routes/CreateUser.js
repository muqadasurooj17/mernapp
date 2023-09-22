const express= require ('express')
const router=express.Router()
const User= require('../models/User')
const {body,validationResult}=require('express-validator');
router.post("/createuser",

[body('email').isEmail(),
body('name').isLength({min:5}),
body('password','Please put 5 character').isLength({min:5})]
, async(req,res)=>{
    const errors=validationResult(req);
if(!errors.isEmpty()){
return res.status(400).json({errors:errors.array()})
}

    try {
        await User.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location,

        })
        res.json({success:true});

    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})


router.post("/loginuser",[
    body('email').isEmail(),
    body('password','Incorrect Password').isLength({min:5})]

,async(req,res)=>{
    const errors=validationResult(req);
if(!errors.isEmpty()){
return res.status(400).json({errors:errors.array()})
}
    let email=req.body.email;
    try{
        let userDta=await User.findOne({email});
        if(!userDta){
            return res.status(400).json({errors:"try logging with  coreect email"})     
          }
            return res.json({success:true})
    }
    catch(error){
        console.log(error)
        res.json({success:false})
    }
})
module.exports=router;