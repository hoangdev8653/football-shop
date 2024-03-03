import React from "react";
import { CiStar } from "react-icons/ci";

function section() {
  return (
    <div className="w-full bg-black relative h-auto  ">
      <div className=" max-w-[1050px] mx-auto ">
        <div className="text-orange-500 py-4 flex">
          <b className="block flex-1 h-[2px]  bg-current font-bold mt-5 opacity-30"></b>
          <p className=" flex mx-2 my-2">
            <CiStar className="text-orange-500 text-2xl" />
            <span className="text-lg font-bold">
              CLICK CHUỘT VÀO LOGO CLB ĐỂ XEM CHI TIẾT ÁO ĐẤU
            </span>
          </p>
          <b className="block flex-1 h-[2px] bg-current font-bold mt-5 opacity-30"></b>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-[126px] relative flex ">
            <div className="ml-auto p-[15px] relative ">
              <a className="" href="/club/:slug" target="_blank">
                <img
                  src="https://www.sporter.vn/wp-content/uploads/2023/11/Logo-arsenal-white.png"
                  alt="logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default section;
