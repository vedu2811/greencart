// Middleware for decoding the login token
const authUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return resizeBy.json({ success: false, message: "Not Authorized" });
  }
};
