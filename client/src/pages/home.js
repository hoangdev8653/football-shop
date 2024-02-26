import React from "react";
import Banner from "../assets/Home-banner.jpg";
import Button from "../components/button";
function home() {
  return (
    <div className="w-full h-auto">
      <div className="relative">
        <img className="w-full" src={Banner} alt="banner" />
        <div className="absolute bottom-32 left-[30%]">
          <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className=" ">
            <p className="text-white p-4">
              <span className="text-orange-600 font-bold">HHSport</span> là nơi
              bạn có thể đặt áo bóng đá với giá tốt nhất tại{" "}
              <span className="text-orange-600 font-bold">Hội AN</span> mà bạn
              không thể bỏ qua...
            </p>
            <Button borderColor="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
