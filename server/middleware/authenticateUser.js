const jwt =  require("jsonwebtoken");
const User = require("../models/UserModel");

const protect = async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            // console.log(decoded);
            req.user = await User.findById(decoded.id).select("-password");
            // console.log(req.user);
            if (!req.user) {
                return res.status(401).json({ message: "User not found" });
            }
            next();
        } catch (error) {
            res.status(401).json({message:"Not Authorized token failed"});
        }
    }
    if(!token){
        res.status(401).json({message:"Not Authorized Token not found"});
    }
}

module.exports = {protect};