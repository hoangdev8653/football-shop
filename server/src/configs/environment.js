import "dotenv/config";

export const env = {
  PORT: process.env.PORT || 3001,
  CONNECTION_STRING: process.env.CONNECTION_STRING,
};
