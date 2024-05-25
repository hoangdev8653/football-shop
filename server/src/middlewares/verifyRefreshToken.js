import jwt from "jsonwebtoken";

export const verifyRefreshToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(refreshToken, process.env.SECRET_KEY, (err, payload) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(payload);
      }
    });
  });
};
