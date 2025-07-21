import express from 'express';
const app = express()
const port = 3000


import mongoose from "mongoose";


import cors from "cors"
// const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const userRouter = require("./Routers/userRouter.js");

// const userRouter = require("./Routers/userRouter");

import userRouter from "./Routers/userRouter.js"

app.use("/", userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



mongoose
  .connect('mongodb://127.0.0.1:27017/Shop')
  .then(() => {
    console.log("Connected successfully...");
    app.listen(3000, () => {
      console.log("Port is listening at 5000");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });


