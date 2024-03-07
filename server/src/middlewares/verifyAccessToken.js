import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
const validateToken = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    try {
      const decoded = await jwt.verify(token, process.env.SECRET_KEY);
      req.userId = decoded.userId;
      next();
    } catch (err) {
      if (err.name === "JsonWebTokenError") {
        console.log("Token is invalid or has expired:");
      }
      console.error("Error: ", err);
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Token is invalid or has expired" });
    }
  } else {
    console.error("User is not authorized or token is missing");
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "User is not authorized or token is missing" });
  }
};

export default validateToken;
