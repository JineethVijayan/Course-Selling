import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SecretKey;

const generateToken = (email)=>{
    return jwt.sign({data:email},secretKey,{expiresIn:"1d"})
}

 const adminToken = (user) => {
    return jwt.sign({ data: user.id, role: user.role },secretKey, {
      expiresIn: "1d",
    });
  };

export {generateToken,adminToken} ;