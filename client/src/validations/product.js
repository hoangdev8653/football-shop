import * as Yup from "yup";

export const updateProuctValidate = Yup.object().shape({
  name: Yup.string().min(3).required(" Name Product is Required"),
  description: Yup.string().min(8).required("Description is Required"),
  price: Yup.number().required("Price is Required"),
  stockQuality: Yup.number().required("stockQuality is Required"),
  categoryId: Yup.string()
    .required("You Must select an Category")
    .notOneOf([""], "You must select an option"),
  slug: Yup.string().required("slug is Required"),
});
