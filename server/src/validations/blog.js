import joi from "joi";

const blog = joi.object({
  title: joi.string().required(),
  content: joi.string().min(10).required(),
  image: joi.string(),
});

export const validation = {
  blog,
};
