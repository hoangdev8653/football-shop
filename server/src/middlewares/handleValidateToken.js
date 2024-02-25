import jwt from "jsonwebtoken";
import util from "util";
import StatusCodes from "http-status-codes";

const verifyAsync = util.promisify(jwt.verify);

const validateToken = async (req, res, next) => {
  const secretKey = "your-secret-key";
  let token;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    console.log(token);
    try {
      const decoded = await verifyAsync(
        token,
        process.env.ACCESS_TOKEN_SECRET || secretKey
      );
      // console.log(decoded.userId);
      req.user = decoded.userId;
      next();
    } catch (err) {
      console.error("Token is invalid or has expired");
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
