import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv"

dotenv.config();

console.log(`name:${process.env.CLOUDINARY_CLOUD_NAME}  key:${process.env.CLOUDINARY_API_KEY} secret:${process.env.CLOUDINARY_API_SECRET}`);

const cloudinaryInstance = cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET
  });
  

  export default cloudinaryInstance;