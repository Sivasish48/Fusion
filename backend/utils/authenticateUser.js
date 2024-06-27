import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const authenticateUser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    console.log('No token provided');
    return next(errorHandler(401, "Unauthorizeddddd"));
  }

  jwt.verify(token, process.env.JWT_SECRETKEY, (err, user) => {
    if (err) {
      console.log('Token verification failed:', err.message);
      return next(errorHandler(401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};
