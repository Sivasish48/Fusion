//import { json } from "express";
import User from "../models/userModel.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"


const signup = async (req,res,next)=>{
   
    const {username,email,password} = req.body

    if(!username || username === "" || !email || email === "" || !password || password === ""){
       next(errorHandler(400,"All fields are required"))
    }


    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({
        username,
        email,
        password:hashedPassword
    })

    await newUser.save()

    try {
        
        res.json("Signup successfully")
    } catch (error) {
        
       next(error)
    }
}

export default signup