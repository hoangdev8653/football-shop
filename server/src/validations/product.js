import joi from "joi";

const productValidation = joi.object({
  name: joi.string().required(),
  description: joi.string().min(3).required(),
  price: joi.string().required(),
  stockQuality: joi.number().required(),
  image: joi.string().required(),
  slug: joi.string().required(),
});

export { productValidation };
