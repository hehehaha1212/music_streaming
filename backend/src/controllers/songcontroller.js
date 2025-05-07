//import {v2 as firebase} from firebase;
import { v2 as cloudinary } from "cloudinary";
//import songModel from "../models/songmodel";
const addsong = async(req,res)=>
    {
    try {
        const name= req.body.name;
        const desc= req.body.desc;
        const album= req.body.album;
        const audioFile= req.files.audio[0];
        const imageFile = req.files.image[0];
        const audioUpload = await cloudinary.uploader.uplaod(audioFile.path,{resource_type:"video"});
        const imageUpload = await cloudinary.uploader.uplaod(imageFile.path,{resource_type:"image"});
        
        console.log(name,desc,album,audioUpload,imageUpload);
    } catch(error){
    } 
}
const listsong = async(req,res) =>{
}
export {addsong,listsong}
