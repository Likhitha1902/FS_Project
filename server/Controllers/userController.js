// import userRouter from "../Routers/userRouter.js"; 
import express from "express";  
const app = express();
import cors from "cors"; 
import user from "../Models/userModel.js";
app.use(cors());

// dotenv.config();

// app.use(cookieParser());




export const login = async (req, res) => {
  let { email, password } = req.body;
  let userFind = await user.findOne({ email });
  
  if (!userFind) {
    return res.status(400).json({ message: "User not found , plz sigin first" });
  }

  if(password != userFind.password){
    return res.status(400).json({ message: "password is wrong" });
  }

  // const checkUser = await bcrypt.compare(password, userFind.password);
  // console.log(checkUser);
 

   return  res.status(200).json({message :"Login completed"});
  
};


export const register = async (req, res) => {
  let { name, email, password, address } = req.body;
  let userData = await user.findOne({ email }); 
  console.log(userData,"userData")

  if (userData) {
    return res
      .status(400)
      .json({ message: "user already exist", status: false });
  }

   try {
        let userRegistered = await user.create({
          name,
          email,
          password,
          address,
        });

          res.status(200).json({
          userRegistered,
          message: "User Registered Successsfully",
          status: true,
          });
   }
       catch (error) {
        res.status(400).json({
          message: `${error}`,
          status: false,
        });
      }
};



export default { register, login };