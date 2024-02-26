import React from "react";
import { CiStar } from "react-icons/ci";
import Banner from "../assets/Home-banner.jpg";
import Button from "../components/button";
import Section from "../components/section";
import ProductItems from "../components/productItems";
function home() {
  return (
    <div className="w-full h-auto">
      <div className="relative">
        <img className="w-full" src={Banner} alt="banner" />
        <div className="absolute bottom-2 left-[30%]">
          <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <p className="text-white p-4">
              <span className="text-orange-600 font-bold">HHSport</span> là nơi
              bạn có thể đặt áo bóng đá với giá tốt nhất tại{" "}
              <span className="text-orange-600 font-bold">HỘI AN</span> mà bạn
              không thể bỏ qua...
            </p>
            <div className="justify-between items-center ">
              <div className="ml-6 pb-8">
                <Button className="text-orange-600 bg-transparent mx-2 hover:text-white hover:bg-orange-500 border-orange-600 border-solid border-2 font-semibold ">
                  CÂU LẠC BỘ 23/24
                </Button>
                <Button className="text-orange-600 bg-transparent mx-2 hover:text-white hover:bg-orange-500 border-orange-600 border-solid border-2 font-semibold ">
                  ĐỘI TUYỂN QUỐC GIA 2024
                </Button>
                <Button className="text-orange-600 bg-transparent mx-2 hover:text-white hover:bg-orange-500 border-orange-600 border-solid border-2 font-semibold ">
                  BÓNG ĐÁ KHÔNG LOGO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section />
      <div className=" w-full">
        <div className="max-w-[1050px] mx-auto ">
          <div className="text-orange-500 py-4 flex">
            <b className="block flex-1 h-[2px]  bg-current font-bold mt-5 opacity-30"></b>
            <p className=" flex mx-2 my-2">
              <CiStar className="text-orange-500 text-2xl" />
              <span className="text-lg font-bold">MÙA GIẢI 23/24 MỚI NHẤT</span>
            </p>
            <b className="block flex-1 h-[2px] bg-current font-bold mt-5 opacity-30"></b>
          </div>
        </div>
        <ProductItems />
      </div>
    </div>
  );
}

export default home;
