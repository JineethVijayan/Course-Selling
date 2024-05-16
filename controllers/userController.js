import bcrypt from "bcrypt";
import User from "../models/usermodel.js";
import { generateToken } from "../utils/generateToken.js";


const signUp = async (req, res) => {

    try {

        const { email, password, firstName, lastName } = req.body;

        console.log(email);
      
        const userExist = await User.find({ email });

        if (!userExist) {
            return res.send("user is already exist")
        }

        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            email,
            hashPassword,
            firstName,
            lastName
        })

        const newUserCreated = await newUser.save();

        if (!newUserCreated) {
            res.send("user is not created")
        }

        const token = generateToken(email);

        res.cookie("token", token);
        res.send("signed successfully!")

    } catch (error) {

        console.log(error, "something wrong");
        res.status(500).send("Internal Server Error")

    }

};


const signIn = async (req, res) => {


    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            res.send("user not found")
        }

        const matchPassword = await bcrypt.compare(password, user.hashPassword)

        if (!matchPassword) {
            res.send("Invalid Password")
        }

        const token = generateToken(email);

        res.cookie("token", token)
        res.send("Login successful")

    } catch (error) {

        console.log(error, "something wrong");
        res.status(500).send("Internal Server Error")

    };


}


export{signUp,signIn};