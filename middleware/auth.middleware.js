const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token,"customer",(err,decoded) => {
        if(err){
            res.send("Please login first.")
        }else{
            console.log(decoded)
            next()
        }
    })
}

module.exports = auth