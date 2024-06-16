const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connection = require("./config/db");
const userRoute = require("./route/user.route")

const  app = express();
const port = process.env.PORT

app.use(express.json());
app.use("/user",userRoute)

app.get("/home", (req,res) => {
    res.send("Welcome to Home Page.")
})

app.listen(port,async() => {
    try{
        await connection
        console.log(`Server is running on port ${port} and DB is connected.`)
    }catch(err){
        console.log(err)
    }
})