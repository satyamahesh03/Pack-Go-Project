const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routes/UserRouter");
const router = require("./routes/wishListRouter")
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Connected to DB")).catch((err)=> console.log("MongoDB connection Failed",err));

app.get("/",(req,res)=>{
    res.json({
        project:"Pack & Go",
        message:"Welcome to Pack & Go travel service",
        developedBy:"Satya Mahesh",
        website:"WWW.packandgo.com",
    });
});

app.use("/api",userRouter);
app.use("/api/wishlist",router);
const PORT = process.env.PORT || 6500;
app.listen(PORT, console.log("Server started",PORT));