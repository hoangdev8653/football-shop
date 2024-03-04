import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const checkoutValidate = Yup.object({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name Required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name Required"),
  street: Yup.string().required("Street is Required"),
  city: Yup.string().required("City is Required"),
  phonenumber: Yup.string()
    .required("Phone number is Required")
    .matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
});
