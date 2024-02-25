import joi from "joi";

const review = joi.object({
  productId: joi.string().hex().length(24).required,
  userId: joi.string().hex().length(24).required(),
  rating: joi.string().required(),
  comment: joi.string().min(3).required(),
});

export const validation = {
  review,
};
