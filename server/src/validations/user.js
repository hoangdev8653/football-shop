import joi from "joi";

const UserValidation = joi.object({
  email: joi.string().email().lowercase().required(),
  password: joi
    .string()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
  username: joi.string().min(3).max(30).required(),
  phone: joi
    .string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  role: joi.string().default("user"),
  image: joi.string().default(""),
});

const LoginValidation = joi.object({
  email: joi.string().email().lowercase().required(),
  password: joi
    .string()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
});

export { UserValidation, LoginValidation };
