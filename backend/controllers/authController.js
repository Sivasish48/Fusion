//import { json } from "express";
import User from "../models/userModel.js"

const signup = async (req,res)=>{
   
    const {username,email,password} = req.body

    if(!username || username === "" || !email || email === "" || !password || password === ""){
        res.status(400).json({message:"All fields are required"})
    }


    const newUser = new User({
        username,
        email,
        password
    })

    await newUser.save()

    try {
        
        res.json("Signup successfully")
    } catch (error) {
        
        res.status(500).json({message:error})
    }
}

export default signup