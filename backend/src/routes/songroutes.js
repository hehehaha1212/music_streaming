import { addsong } from "../controllers/songcontroller.js";
import { listsong } from "../controllers/songcontroller.js";
import express from "express";
import upload from "../middleware/multer.js";

const songrouter = express.Router();
songrouter.post('/addsong',upload.fields([{name:'image',maxcount:1},{name:'audio',maxcount:1}]),addsong);
songrouter.get('/list',listsong);


export default songrouter;
