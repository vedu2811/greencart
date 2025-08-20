import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

////////////////////////////////////////////////////////////////////
// Register User : /api/user/register
////////////////////////////////////////////////////////////////////
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true, // Prevents JavaScript to access the cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF Protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie Expiration
    });

    return res.json({
      success: true,
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

///////////////////////////////////////////////////////////////////////
// Login User : /api/user/login
///////////////////////////////////////////////////////////////////////
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {}
};
