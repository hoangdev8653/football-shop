import React from "react";

function club() {
  return (
    <div className="club">
      <div className="w-full bg-gray-700">
        <div className="max-w-[1050px] mx-auto text-white text-2xl font-bold uppercase py-4 text-center">
          áo bóng đá man city mùa giải mới 23/24 sân nhà và sân khách
        </div>
        <img
          className="w-full object-cover"
          src="https://www.sporter.vn/wp-content/uploads/2023/01/Banner-manchester-city.jpg"
          alt="banner"
        />
      </div>
      <div className="max-w-[1050px] mx-auto my-8">
        <div className="flex">
          <div className="w-1/3 mx-[2px] relative">
            <img
              className="w-full"
              src="https://www.sporter.vn/wp-content/uploads/2023/05/Ao-bong-da-man-city-san-nha-1.png"
              alt="1"
            />
          </div>
          <div className="w-1/3 mx-[2px] relative">
            <img
              className="w-full"
              src="https://www.sporter.vn/wp-content/uploads/2023/05/Ao-bong-da-man-city-san-nha-1.png"
              alt="1"
            />
          </div>
          <div className="w-1/3 mx-[2px] relative">
            <img
              className="w-full"
              src="https://www.sporter.vn/wp-content/uploads/2023/05/Ao-bong-da-man-city-san-nha-1.png"
              alt="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default club;
