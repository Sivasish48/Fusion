import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
const Port = 4000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database is connected");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// For internal errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

app.listen(Port, () => {
    console.log(`App is running on port ${Port}`);
});
