import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const connectDB = async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("connectection established")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/Cluster0`);

}

export default connectDB;