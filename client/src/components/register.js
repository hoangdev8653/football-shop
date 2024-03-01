import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

function register() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg)",
      }}
      className="max-w-[100%] h-screen flex flex-wrap justify-center items-center p-[15px] bg-no-repeat bg-center bg-cover"
    >
      <div className="w-[500px] bg-white rounded-xl overflow-hidden px-[30px]">
        <form className="w-full">
          <span className="block text-[39px] text-center pb-[12px] mt-4">
            Register
          </span>
          <div className="relative w-full border-b-2 border-solid  mb-[24px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Email:
            </span>
            <p className="flex">
              <MdOutlineEmail className="text-2xl mt-[12px] mx-2" />
              <input
                className="text-base text-black block w-full h-[48px] pl-2 focus:outline-none "
                type="email"
                name="email"
                placeholder="Type your Email"
              />
            </p>
          </div>
          <div className="relative w-full border-b-2 border-solid  mb-[24px]">
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
          <div className="relative w-full border-b-2 border-solid  mb-[24px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Username:
            </span>
            <p className="flex">
              <IoPersonOutline className="text-2xl mt-[12px] mx-2" />
              <input
                className="text-base text-black block w-full h-[48px] pl-2 focus:outline-none "
                type="text"
                name="username"
                placeholder="Type your Username"
              />
            </p>
          </div>
          <div className="relative w-full border-b-2 border-solid  mb-[12px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Phone:
            </span>
            <p className="flex">
              <MdOutlineLocalPhone className="text-2xl mt-[12px] mx-2" />
              <input
                className="text-base text-black block w-full h-[48px] pl-2 focus:outline-none "
                type="text"
                name="phone"
                placeholder="Type your Phone"
              />
            </p>
          </div>

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

export default register;
