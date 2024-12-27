import React, { useEffect } from "react";
import { CiStar } from "react-icons/ci";
import BannerDestop from "../assets/Home-banner.jpg";
import BannerMobile from "../assets/Banner-homepage-mobile-1.jpg";
import Button from "../components/button";
import Section from "../components/section";
import ProductItems from "../components/productItems";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { blogStore } from "../store/blogStore";
import { productStore } from "../store/productStore";
import SliderConfig from "../components/slider";

function Home() {
  const blog = blogStore();
  const productClub = productStore();
  useEffect(() => {
    blog.getAllBlog();
    productClub.getProductClub();
  }, []);

  return (
    <div className="w-full h-auto">
      <div className="relative">
        <img
          className=" hidden sx:block sx:w-full"
          src={BannerDestop}
          alt="banner-destop"
        />
        <img
          className="block w-full sx:hidden sx:w-full sx:mx-auto"
          src={BannerMobile}
          alt="banner-destop"
        />
        <div className="absolute bottom-2 w-full ">
          <div
            className="items-center justify-center text-center "
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="mb-[60px] hidden sx:block">
              <p className="text-white p-4 text-xs sm:text-lg">
                <span className="text-orange-600 font-bold">H7Sport</span> là
                nơi bạn có thể đặt áo bóng đá với giá tốt nhất tại{" "}
                <span className="text-orange-600 font-bold">HỘI AN</span> mà bạn
                không thể bỏ qua...
              </p>
              <div className="justify-between items-center ">
                <div className="ml-6 sm:pb-8 ">
                  <a href="/ao-bong-da-clb/">
                    <Button className="text-orange-600 my-1 text-xs sm:text-base bg-transparent mx-2 hover:text-white hover:bg-orange-500 border-orange-600 border-solid border-2 font-semibold ">
                      CÂU LẠC BỘ 23/24
                    </Button>
                  </a>
                  <a href="/ao-bong-da-doi-tuyen">
                    <Button className="text-orange-600 my-1 text-xs sm:text-base bg-transparent mx-2 hover:text-white hover:bg-orange-500 border-orange-600 border-solid border-2 font-semibold ">
                      ĐỘI TUYỂN QUỐC GIA 2024
                    </Button>
                  </a>
                  <a href="/ao-bong-da-khong-logo">
                    <Button className="text-orange-600 my-1 text-xs sm:text-base bg-transparent mx-2 hover:text-white hover:bg-orange-500 border-orange-600 border-solid border-2 font-semibold ">
                      BÓNG ĐÁ KHÔNG LOGO
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-[60px] block sx:text-white sx:items-center sx:mx-2 sx:hidden">
              <p className="uppercase text-center text-2xl font-bold py-4 px-2">
                quần áo bóng đá
              </p>
              <p className="text-xs mx-2">
                H7Sport là nơi bạn có thể đặt áo bóng đá với giá tốt nhất tại
                TPHCM mà bạn không thể bỏ qua…
              </p>
              <div className="flex text-center text-xs gap-4 justify-center font-semibold my-4">
                <a href="/ao-bong-da-clb/">
                  <span className="hover:opacity-60">CÂU LẠC BỘ</span>
                </a>
                <a href="/ao-bong-da-doi-tuyen">
                  <span className="hover:opacity-60">ĐỘI TUYỂN</span>
                </a>
                <a href="/ao-bong-da-khong-logo">
                  <span className="hover:opacity-60">KHÔNG LOGO</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sx:block">
        <Section />
      </div>
      <div className=" w-full bg-black">
        <div className="max-w-[1050px] mx-auto  ">
          <div className="text-orange-500 py-4 flex">
            <b className="block flex-1 h-[2px] bg-current font-bold mt-5 opacity-30"></b>
            <p className=" flex mx-2 my-2">
              <CiStar className="text-orange-500 text-2xl" />
              <span className="text-lg font-bold">MÙA GIẢI 23/24 MỚI NHẤT</span>
            </p>
            <b className="block flex-1 h-[2px] bg-current font-bold mt-5 opacity-30"></b>
          </div>
        </div>
        <ProductItems data={productClub.data} />
        <div
          style={{
            backgroundImage:
              "url('https://www.sporter.vn/wp-content/uploads/2023/11/2023_Homepage_Banner_2c.jpg')",
          }}
          className="overflow-x-hidden object-cover"
        >
          <div className="max-w-[1050px] mx-auto ">
            <div className="text-orange-500 py-4 flex">
              <b className="block flex-1 h-[2px] bg-current font-bold mt-6 opacity-30 "></b>
              <p className=" flex mx-2 my-2">
                <CiStar className="text-white text-4xl " />
                <span className="sx:text-white sx:font-bold sx:text-2xl text-base mt-1">
                  NHỮNG BÀI VIẾT MỚI NHẤT
                </span>
              </p>
              <b className="block flex-1 h-[2px] bg-current font-bold mt-6 opacity-30"></b>
              <a className="flex" href="/blog">
                <div className="text-orange-500 flex hover:text-white">
                  <span className="font-bold text-xl ml-2 mt-2">Xem Thêm</span>
                  <MdOutlineNavigateNext className=" text-3xl mt-2" />
                </div>
              </a>
            </div>
          </div>
          <SliderConfig>
            {blog.data &&
              blog.data.map((item, index) => (
                <div key={index} className="w-1/4 cursor-pointer mb-4 ">
                  <a href="/blog">
                    <img
                      className="w-full h-[217px] object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="items-center justify-center text-center cursor-pointer">
                      <p className="text-orange-500 font-bold mx-2 my-2 lg:text-lg text-base">
                        {item.title}
                      </p>
                      <span className="text-white hover:opacity-60 mx-2 my-2 lg:text-base text-sm">
                        {item.content}
                      </span>
                    </div>
                  </a>
                </div>
              ))}
          </SliderConfig>
          <div className="text-center items-center justify-center py-2 ">
            <FaAngleDown className="text-white mx-auto text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
