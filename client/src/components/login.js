import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import Facebook from "../assets/fb_logo-512x512.png";
import Google from "../assets/google-search-3.png";

function login() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg)",
      }}
      className="max-w-[100%] h-screen flex flex-wrap justify-center items-center p-[15px] bg-no-repeat bg-center bg-cover"
    >
      <div className="w-[500px] bg-white rounded-xl overflow-hidden px-[55px] py-[65px]">
        <form className="w-full">
          <span className="block text-[39px]   text-center pb-[50px]">
            Login
          </span>
          <div className="relative w-full border-b-2 border-solid  mb-[24px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Email:
            </span>
            <p className="flex">
              <IoPersonOutline className="text-2xl mt-[12px] mx-2" />
              <input
                className="text-base text-black block w-full h-[48px] pl-2 focus:outline-none "
                type="email"
                name="email"
                placeholder="Type your Email"
              />
            </p>
          </div>
          <div className="relative w-full border-b-2 border-solid  mb-[10px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Password:
            </span>
            <p className="flex">
              <CiLock className="text-2xl mt-[12px] mx-2" />
              <input
                className="text-base text-black block w-full h-[48px] pl-2 focus:outline-none"
                type="password"
                name="Password"
                placeholder="Type your Password"
              />
            </p>
          </div>
          <p className="text-right hover:text-blue-600 cursor-pointer text-gray-600">
            Forgot Password?
          </p>
          <button
            type="submit"
            className="text-white font-medium bg-blue-800 w-full text-xl my-6 px-4 py-3 rounded-2xl hover:opacity-80"
          >
            LOGIN
          </button>
          <p className="text-center mx-auto text-gray-500">Or Sign Up Using </p>
          <div className="flex text-center items-center justify-center gap-6 my-2">
            <img
              className="w-[40px] h-[40px] rounded-3xl hover:opacity-60 cursor-pointer"
              src={Facebook}
              alt="facebook"
            />
            <img
              className="w-[40px] h-[40px] rounded-3xl hover:opacity-60 cursor-pointer"
              src={Google}
              alt="google"
            />
          </div>
          <a
            href="/register"
            className="text-gray-500 hover:text-blue-600 text-base cursor-pointer "
          >
            <p className="text-center mt-4">Sign Up</p>
          </a>
        </form>
      </div>
    </div>
  );
}

export default login;
