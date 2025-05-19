import userModle from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateJwtTokenAndSetCookie from "../utils/generateJwtToken.js";
import e from "express";

export const Signup = async (req, res) => {
  const { fullName, email, password, confirmPassword, profileImage } = req.body;

  try {
    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await userModle.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModle({
      fullName,
      email,
      password: hashedPassword,
      profileImage,
    });
    await newUser.save();
    
    const token = generateJwtTokenAndSetCookie(newUser, res);
    res.status(201).json({
      message: "User created successfully",user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profileImage: newUser.profileImage,
      },});


  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: "Server error" });
  }
};


export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const user = await userModle.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateJwtTokenAndSetCookie(user, res);
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: "Server error" });
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: "Server error" });
  }
}