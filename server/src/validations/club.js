import joi from "joi";

const clubValidation = joi.object({
  name: joi.string().required(),
  slug: joi.string().required(),
  image: joi.array().default(""),
  banner: joi.string().default(""),
  stadium: joi.string().required(),
  establish: joi.string().required(),
  nickname: joi.string().required(),
});

export { clubValidation };
