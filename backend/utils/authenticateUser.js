import jwt from "jsonwebtoken";

const JWT_SECRETKEY = "suvam48351455";

export const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRETKEY, (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
