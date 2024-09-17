import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { useFormik } from "formik";
import { registerValidate } from "../validations/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userStore } from "../store/userStore";
function Register() {
  const navigate = useNavigate();
  const { register } = userStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      phone: "",
    },
    validationSchema: registerValidate,
    onSubmit: async (values) => {
      try {
        await register(values);
        toast.success("Đăng kí thành công");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        if (error.response.status === 500) {
          toast.error("Mật khẩu không đúng");
        }
      }
    },
  });

  return (
    <div
      style={{
        backgroundImage:
          "url(https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg)",
      }}
      className="max-w-[100%] h-screen flex flex-wrap justify-center items-center p-[15px] bg-no-repeat bg-center bg-cover"
    >
      <div className="w-[500px] bg-white rounded-xl overflow-hidden px-[30px]">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <span className="block text-[39px] text-center pb-[12px] mt-4">
            Register
          </span>
          <div className="relative w-full border-b-2 border-solid  mb-[8px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Email:
            </span>
            <p className="flex">
              <MdOutlineEmail className="text-2xl mt-[12px] mx-2" />
              <input
                className="text-base text-black block w-full h-[48px] pl-2 focus:outline-none "
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </p>
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 mb-2 text-center">
              {formik.errors.email}
            </div>
          )}
          <div className="relative w-full border-b-2 border-solid  mb-[8px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Password:
            </span>
            <p className="flex">
              <CiLock className="text-2xl mt-[12px] mx-2" />
              <input
                className="text-base text-black block w-full h-[48px] pl-2 focus:outline-none"
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </p>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 mb-2 text-center">
              {formik.errors.password}
            </div>
          )}
          <div className="relative w-full border-b-2 border-solid  mb-[8px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Username:
            </span>
            <p className="flex">
              <IoPersonOutline className="text-2xl mt-[12px] mx-2" />
              <input
                className="text-base text-black block w-full h-[48px] pl-2 focus:outline-none "
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </p>
          </div>
          {formik.touched.username && formik.errors.username && (
            <div className="text-red-500 mb-2 text-center">
              {formik.errors.username}
            </div>
          )}
          <div className="relative w-full border-b-2 border-solid  mb-[8px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Phone:
            </span>
            <p className="flex">
              <MdOutlineLocalPhone className="text-2xl mt-[12px] mx-2" />
              <input
                className="text-base text-black block w-full h-[48px] pl-2 focus:outline-none "
                type="text"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </p>
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 mb-2 text-center">
              {formik.errors.phone}
            </div>
          )}
          <button
            type="submit"
            className="text-white font-medium bg-blue-800 w-full text-xl my-6 px-4 py-3 rounded-2xl hover:opacity-80"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
