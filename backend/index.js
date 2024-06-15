const express = require("express")
const mongoose = require("mongoose")
const app = express()

require('dotenv').config(); 


mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });


app.listen(()=>{
    console.log("App is running on 4000");
})