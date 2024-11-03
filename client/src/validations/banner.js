import * as Yup from "yup";

export const bannerValidate = Yup.object().shape({
  title: Yup.string().min(3).required(" Title is Required"),
});
