import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config();

console.log(process.env.DbUrl);


const ConnectDb = async()=>{

    try {
        await mongoose.connect(process.env.DbUrl)
        console.log("mongoose connected");
    } catch (error) {
        console.log("error",error);
    }

   

}

export {ConnectDb} ;