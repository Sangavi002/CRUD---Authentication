const express = require("express");
const UserModel = require("../model/user.model")
const userRoute = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth.middleware");

userRoute.post("/register",async(req,res) => {
    const userData = req.body;
    try{
       const user = new UserModel(userData);
       await user.save();
       res.status(200).send({"msg": "New user has been registerd."})
    }catch(err){
        res.status(404).send({"msg": "Registration is failed."})
    }
})

userRoute.post("/login",async(req,res) => {
    const {email,password} = req.body;
    try{
       const user = await UserModel.findOne({email,password});
       if(user){
        let accessToken = jwt.sign({name: user.name,email: user.email},"customer",{expiresIn: "1h"})
            res.status(200).send({"msg": "Logged In successfully.", "accessToken": accessToken})
       }else{
        res.status(404).send({"msg": "LogIn is failed."})
       }
    }catch(error){
        res.status(404).send({"msg": "Wrong credential."})
    }
})

userRoute.get("/product", auth, (req,res) => {
    res.send("Product Page.")
})

module.exports = userRoute;