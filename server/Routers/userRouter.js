import express from "express";  
const app = express();
const router = express.Router();
// import userRouter from "../Routers/userRouter.js"; 
// const jwt = require("jsonwebtoken");
import cors from "cors";
import { register, login } from "../Controllers/userController.js";

// const {register,login} = require("../Controllers/userController")

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/signup", register);

router.post("/login", login);





export default router;