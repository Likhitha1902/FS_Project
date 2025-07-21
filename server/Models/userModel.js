import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
    },
    password: {
      type: "String",
      required: true, 
    },
    
    address: {
      type: "Mixed",
      required: true,
    },
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    // orders: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "products",
    //   },
    // ],
    purchased: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
      
    ],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);
export default userModel;