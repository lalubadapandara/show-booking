import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const isUserAlreadyExists=await User.findOne({
    email
  })

  if(isUserAlreadyExists){
    return res.status(400).json({
      message:"User alreadt exists"
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  res.status(201).json(user);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json("Invalid credentials");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });

  res.status(200).json({
    message:"User logged in successfully"
  })
};

export const logout=async(req,res)=>{
  res.clearCookie("token");
  res.status(200).json({
    message:"User logged out successfully"
  });
}
