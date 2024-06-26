import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

const test = (req, res) => {
  res.json({ message: "API is working" });
};

const updateUser = async (req, res, next) => {

try {
  if (req.user.id !== req.params.userId) {
    return res.status(403).json({ message: 'You are not allowed to update this user' });
  }

  if (req.body.password) {
    if (req.body.password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return res.status(400).json({ message: 'Username must be between 7 and 20 characters' });
    }
    if (req.body.username.includes(' ')) {
      return res.status(400).json({ message: 'Username cannot contain spaces' });
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return res.status(400).json({ message: 'Username must be lowercase' });
    }
    if (!/^[a-zA-Z0-9]+$/.test(req.body.username)) {
      return res.status(400).json({ message: 'Username can only contain letters and numbers' });
    }
  }

   const validUser = await User.findByIdAndUpdate(req.params.userId,req.body,{new:true});

   
   if(validUser){
   return  res.status(200).json(validUser,);
   }else{
    return res.status(404).json({ message: 'User not found' });
   }
  
  }
 catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ message: 'An error occurred while updating the user' });  
  }
};


const userSelf = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({
    email: user.email,
    username: user.username,
    id: user._id,
  });
  
}
export { test, updateUser,userSelf };
