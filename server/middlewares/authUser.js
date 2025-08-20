import jwt from "jsonwebtoken";

// Middleware for decoding the login token
const authUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return resizeBy.json({ success: false, message: "Not Authorized" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res.json({ success: false, message: "Not authorized" });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
