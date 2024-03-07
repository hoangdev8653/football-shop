import jwt from "jsonwebtoken";

const generateTokens = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  const refreshToken = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

export { generateTokens };
