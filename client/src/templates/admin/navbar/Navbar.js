import React from "react";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdLockReset } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiProductHuntLine } from "react-icons/ri";
import { TbBrandBlogger } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { PiFlagBanner } from "react-icons/pi";

import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="w-full max-w-[20%] border-r-[2px] h-screen overflow-auto border-solid border-gray-300 ">
      <Link to="/dashboard/">
        <div
          className={`${
            location.pathname === "/dashboard/" ? "bg-gray-300" : ""
          }  m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
        >
          <GoHome className="text-2xl" />
          <span>Dashboard</span>
        </div>
      </Link>
      <Link to="/dashboard/product">
        <div
          className={`${
            location.pathname === "/dashboard/product" ? "bg-gray-300" : ""
          }  m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
        >
          <RiProductHuntLine className="text-2xl" />
          <span>Product</span>
        </div>
      </Link>
      <Link to="/dashboard/category">
        <div
          className={`${
            location.pathname === "/dashboard/category" ? "bg-gray-300" : ""
          }  m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
        >
          <BiCategoryAlt className="text-2xl" />
          <span>Category</span>
        </div>
      </Link>
      <Link to="/dashboard/blog">
        <div
          className={`${
            location.pathname === "/dashboard/blog" ? "bg-gray-300" : ""
          }  m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
        >
          <TbBrandBlogger className="text-2xl" />
          <span>Blog</span>
        </div>
      </Link>
      <Link to="/dashboard/banner">
        <div
          className={`${
            location.pathname === "/dashboard/banner" ? "bg-gray-300" : ""
          }  m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
        >
          <PiFlagBanner className="text-2xl" />
          <span>Banner</span>
        </div>
      </Link>

      <div className="my-2">
        <p className="m-2 p-3">Authentication</p>
        {/* <Link to="/register">
          <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
            <IoPersonAddOutline className="text-2xl" />
            <span to="/register">Sign Up</span>
          </div>
        </Link>
        <Link to="/login">
          <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
            <IoMdLogIn className="text-2xl" />
            <sapn>Sign In</sapn>
          </div>
        </Link> */}
        <Link to="/forgot-password">
          <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
            <RiLockPasswordFill className="text-2xl" />
            <sapn>Forgot Password</sapn>
          </div>
        </Link>
        <Link to="/reset-password">
          <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
            <MdLockReset className="text-2xl" />
            <span>Reset Password</span>
          </div>
        </Link>
      </div>
      <div className="my-2">
        <p className="m-2 p-3">Settings</p>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <CgProfile className="text-2xl" />
          <Link to="/dashboard/user">Person Settings</Link>
        </div>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <GoQuestion className="text-2xl" />
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
