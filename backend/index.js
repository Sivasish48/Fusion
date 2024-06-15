
import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
const app = express()
const Port = 4000
import dotenv from "dotenv"


dotenv.config()

app.use(express.json())
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

  app.use("/api/user", userRouter)
  app.use("/api/auth", authRouter)

app.listen((Port),()=>{
    console.log("App is running on 4000");
})