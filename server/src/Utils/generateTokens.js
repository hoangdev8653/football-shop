import jwt from "jsonwebtoken";

const generateTokens = (userId) => {
  const secretKey = "your-secret-key";

  const accessToken = jwt.sign({ userId }, secretKey, { expiresIn: "1h" });
  const refreshToken = jwt.sign({ userId }, secretKey, { expiresIn: "7d" });

  return { accessToken, refreshToken };
};

export { generateTokens };
