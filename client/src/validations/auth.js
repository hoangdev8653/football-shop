import * as Yup from "yup";

export const loginValidate = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password at least 6 character ")
    .required("Password is Required"),
});
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const registerValidate = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
  phonenumber: Yup.string()
    .required("Phone number is Required")
    .matches(phoneRegExp, "Phone number is not valid"),
  username: Yup.string().min(3).required("User name is Required"),
});

export const changePasswordValidate = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password at least 6 character ")
    .required("Password is Required"),
  newPassword: Yup.string()
    .min(6, "New Password at least 6 character ")
    .required("Password is Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Passwords must match"
  ),
});
