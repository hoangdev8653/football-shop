import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { IoIosSearch } from "react-icons/io";
import Avarta from "../user/header/avarta/avarta";

import logo from "../../assets/logo-h7.png";

function LayoutAdmin({ children }) {
  return (
    <div>
      <div
        style={{
          boxShadow: "rgba(21, 34, 50, 0.08) 0px 1px 4px 0px",
        }}
        className="w-full bg-white"
      >
        <div className="mx-8 justify-between items-center flex py-2">
          <a className="w-14 h-14 object-cover" href="/">
            <img className="w-full h-full object-cover" src={logo} alt="logo" />
          </a>
          <div className=" flex">
            <IoIosSearch className="justify-center text-center items-center text-3xl mx-1 opacity-60 hover:opacity-30 cursor-pointer" />
            <input className="" type="text" placeholder="Search...." />
          </div>
          <div className="avarta">
            <Avarta />
          </div>
        </div>
      </div>
      <div className="flex bg-gray-50 ">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
