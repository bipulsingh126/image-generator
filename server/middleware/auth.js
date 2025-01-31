import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized Login again" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.id) {
      req.body.userId = decoded.id;
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized Login again" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


