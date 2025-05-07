import express from "express"
import cors from "cors"
import 'dotenv/config'
import songrouter from "./src/routes/songroutes.js";
import connectDB from "./src/config/monogodb.js";
import connectcloudinary from "./src/config/firebase.js";
const app =express();
const port = process.env.PORT || 4000;
connectDB();
//connectfirebase();
connectcloudinary();
app.use(express.json());
app.use(cors());
app.use("/api/song",songrouter);
app.get('/',(req,res)=> res.send("API working"))
app.listen(port,()=>console.log(`server started on ${port}`))