import jwt from "jsonwebtoken";

///////////////////////////////////////////////////////////////////////
// Seller Login : /api/seller/login
///////////////////////////////////////////////////////////////////////
export const sellerLogin = async (req, res) => {
  const { email, password } = req.body;
  if (
    password === process.env.SELLER_PASSWORD &&
    email === process.env.SELLER_EMAIL
  ) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  }
};
