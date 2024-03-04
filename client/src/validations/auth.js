import * as Yub from "yub";

export const login = Yub.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is Required"),
});
