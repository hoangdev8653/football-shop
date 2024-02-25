import GooglePlusTokenStrategy from "passport-google-plus-token";
import passport from "passport";
import UserModel from "../models/user.js";
import FacebookStrategy from "passport-facebook";

passport.use(
  new GooglePlusTokenStrategy(
    {
      clientID:
        "477485170401-g8eq5gf3536hebml4hmlbvvao4ucvf4p.apps.googleusercontent.com",
      clientSecret: "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",
    },
    async (accessToken, refreshToken, profile, next) => {
      try {
        console.log("accessToken: ", accessToken);
        console.log("refreshToken: ", refreshToken);
        console.log("profile: ", profile);
        const user = await UserModel.findOne({
          authGoogleId: profile.id,
          authType: "google",
        });
        if (user) {
          console.log("đã tồn tại");
          return await user;
        }
        const newUser = await UserModel.create({
          authType: "google",
          authGoogleId: profile.id,
          email: profile.emails[0].value,
        });
        console.log(newUser);
        return await newUser;
      } catch (error) {
        console.log("Lỗi: .......");
        console.log(error);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "1514340146075162",
      clientSecret: "0b8f38e8f13455d2fe92adb19ee19e22",
    },
    async (accessToken, refreshToken, profile, next) => {
      try {
        console.log("accessToken: ", accessToken);
        console.log("refreshToken: ", refreshToken);
        console.log("profile: ", profile);
        // const user = await UserModel.findOne({
        //   authGoogleId: profile.id,
        //   authType: "facebook",
        // });
        // if (user) {
        //   console.log("đã tồn tại");
        //   return await user;
        // }
        // const newUser = await UserModel.create({
        //   authType: "facebook",
        //   authGoogleId: profile.id,
        //   email: profile.emails[0].value,
        // });
        // console.log(newUser);
        // return await newUser;
      } catch (error) {
        console.log("Lỗi: .......");
        console.log(error);
      }
    }
  )
);

export default passport;
