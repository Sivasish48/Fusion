import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
//import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
//import dotenv from "dotenv";

//dotenv.config();
const JWT_SECRETKEY = "suvam48351455"
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json("All fields are required");
    }

    const user = await User.findOne({ email });

    if (user) {
        return res.status(400).json("User already exists");
    }

    else{
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        const token = jwt.sign({email: email}, JWT_SECRETKEY, { expiresIn: '1h' })
        res.json("Signup successfully",token);
    } catch (error) {
        next(error);
    }
};
}



export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json("All fields are required");
    }

    try {
        const validUser = await User.findOne({ email});
        if (!validUser) {
            return res.status(404).json("User is not valid");
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(400).json("Invalid password");
        }
      
        if(validUser && validPassword){
            const token = jwt.sign({email: email}, JWT_SECRETKEY, { expiresIn: '1h' })
            res.status(200).json({ id: validUser._id, email: validUser.email, name: validUser.username, token  });
        }
    }
        catch (error) {
            next(error);
        }
    
    }
        // const token = jwt.sign(
        //     {
        //         id: validUser._id,
        //     },
        //    JWT_SECRETKEY
        // );

       
  
console.log(JWT_SECRETKEY);