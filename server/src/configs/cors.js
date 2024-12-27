import { whitelist_origin } from "../Utils/constans.js";

export const corsOptions = {
  origin: function (origin, callback) {
    if (
      whitelist_origin.includes(origin) ||
      !origin ||
      isRequestFromPostman()
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
