/**would try integrating firebase later
import {firebase as fire} from "firebase";

const connectfirebase = async () => {

    await fire.config({
        fire_name:process.env.name,
        api_key:process.env.key,
        api_secret
    })
}

export default connectfirebase
**/
import { v2 as cloudinary } from "cloudinary";
const connectcloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
    });
}
export default connectcloudinary;