import joi from "joi";

const categoryValidation = joi.object({
  name: joi.string().required(),
});

export { categoryValidation };
