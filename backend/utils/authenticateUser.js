import jwt from "jsonwebtoken";

const JWT_SECRETKEY = "suvam48351455";

export const authenticateUser = (req, res, next) => {
  // const token = req.cookies.access_token;

  const authHeader = req.headers.authorization;
  if(authHeader){
    const token = authHeader && authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRETKEY),(err,user)=>{
      if(err){
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.user = user;
      next();
    }
  }else{
    return res.status(401).json({ message: "Unauthorized" });
  }
 
  // if (!token) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }

  // try {
  //   const decoded = jwt.verify(token, JWT_SECRETKEY);
  //   req.user = decoded;
  //   next();
  // } catch (error) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }
};
