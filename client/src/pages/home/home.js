import React from "react";
import { CiStar } from "react-icons/ci";
import BannerDestop from "../../assets/Home-banner.jpg";
import BannerMobile from "../../assets/Banner-homepage-mobile-1.jpg";
import Button from "../../components/button";
import Section from "../../components/section";
import ProductItems from "../../components/ProductItems/productItems";
import { MdOutlineNavigateNext } from "react-icons/md";
import Slider from "react-slick";
import { FaAngleDown } from "react-icons/fa";
import styles from "./home.module.scss";

function home() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full  h-auto">
      <div className="relative">
        <img
          className={styles.banner_destop}
          src={BannerDestop}
          alt="banner-destop"
        />
        <img
          className={styles.banner_mobile}
          src={BannerMobile}
          alt="banner-destop"
        />
        <div className="absolute bottom-2 w-full">
          <div
            className="items-center justify-center text-center "
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className={styles.text_box_destop}>
              <p className="text-white p-4">
                <span className="text-orange-600 font-bold">HHSport</span> là
                nơi bạn có thể đặt áo bóng đá với giá tốt nhất tại{" "}
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
            <div className={styles.text_box_mobile}>
              <p className="uppercase text-center text-2xl font-bold py-4 px-2">
                quần áo bóng đá
              </p>
              <p className="text-xs mx-2">
                HHSport là nơi bạn có thể đặt áo bóng đá với giá tốt nhất tại
                TPHCM mà bạn không thể bỏ qua…
              </p>
              <div className="flex text-center text-xs gap-4 justify-center font-semibold my-4">
                <a href="/">
                  <span className="hover:opacity-80">CÂU LẠC BỘ</span>
                </a>
                <a href="/">
                  <span className="hover:opacity-80">DỘI TUYỂN</span>
                </a>
                <a href="/">
                  <span className="hover:opacity-80">HÀNG THÁI LAN</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionMobile}>
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
        <ProductItems />
        <div
          style={{
            backgroundImage:
              "url('https://www.sporter.vn/wp-content/uploads/2023/11/2023_Homepage_Banner_2c.jpg')",
          }}
          className="overflow-x-hidden object-cover"
        >
          <div className="max-w-[1050px] mx-auto ">
            <div className="text-orange-500 py-4 flex">
              <b className="block flex-1 h-[2px]  bg-current font-bold mt-6 opacity-30"></b>
              <p className=" flex mx-2 my-2">
                <CiStar className="text-white text-4xl " />
                <span className={styles.title_newBlog}>
                  NHỮNG BÀI VIẾT MỚI NHẤT
                </span>
              </p>
              <b className="block flex-1 h-[2px] bg-current font-bold mt-6 opacity-30"></b>
              <a href="/">
                <div className="text-orange-500 flex hover:text-white">
                  <span className="font-bold text-xl ml-2 mt-2">Xem Thêm</span>
                  <MdOutlineNavigateNext className=" text-3xl mt-2" />
                </div>
              </a>
            </div>
          </div>
          <Slider {...settings}>
            <div className="w-1/4 cursor-pointer mb-4 ">
              <img
                className={styles.size}
                src="https://www.sporter.vn/wp-content/uploads/2024/02/Tiet-lo-ao-doi-tuyen-argentina-san-nha-copa-america-2024-6.jpg"
                alt="agr"
              />
              <div className="items-center justify-center text-center cursor-pointer">
                <p className="text-orange-500 font-bold mx-2 my-2 ">
                  Tiết lộ áo đội tuyển Argentina sân nhà Copa America 2024
                </p>
                <span className="text-white hover:opacity-60 mx-2 my-2">
                  Chúng ta đã có hình ảnh thực tế đầu tiên các mẫu áo đội [..]
                </span>
              </div>
            </div>
            <div className="w-1/4 cursor-pointer mb-4 ">
              <img
                className={styles.size}
                src="https://www.sporter.vn/wp-content/uploads/2024/02/Tiet-lo-ao-doi-tuyen-argentina-san-nha-copa-america-2024-6.jpg"
                alt="agr"
              />
              <div className="items-center justify-center text-center cursor-pointer">
                <p className="text-orange-500 font-bold mx-2 my-2 ">
                  Tiết lộ áo đội tuyển Argentina sân nhà Copa America 2024
                </p>
                <span className="text-white hover:opacity-60 mx-2 my-2">
                  Chúng ta đã có hình ảnh thực tế đầu tiên các mẫu áo đội [..]
                </span>
              </div>
            </div>
            <div className="w-1/4 cursor-pointer mb-4 ">
              <img
                className={styles.size}
                src="https://www.sporter.vn/wp-content/uploads/2024/02/Tiet-lo-ao-doi-tuyen-argentina-san-nha-copa-america-2024-6.jpg"
                alt="agr"
              />
              <div className="items-center justify-center text-center cursor-pointer">
                <p className="text-orange-500 font-bold mx-2 my-2 ">
                  Tiết lộ áo đội tuyển Argentina sân nhà Copa America 2024
                </p>
                <span className="text-white hover:opacity-60 mx-2 my-2">
                  Chúng ta đã có hình ảnh thực tế đầu tiên các mẫu áo đội [..]
                </span>
              </div>
            </div>
            <div className="w-1/4 cursor-pointer mb-4 ">
              <img
                className={styles.size}
                src="https://www.sporter.vn/wp-content/uploads/2024/02/Tiet-lo-ao-doi-tuyen-argentina-san-nha-copa-america-2024-6.jpg"
                alt="agr"
              />
              <div className="items-center justify-center text-center cursor-pointer">
                <p className="text-orange-500 font-bold mx-2 my-2 ">
                  Tiết lộ áo đội tuyển Argentina sân nhà Copa America 2024
                </p>
                <span className="text-white hover:opacity-60 mx-2 my-2">
                  Chúng ta đã có hình ảnh thực tế đầu tiên các mẫu áo đội [..]
                </span>
              </div>
            </div>
          </Slider>
          <div className="text-center items-center justify-center py-2 ">
            <FaAngleDown className="text-white mx-auto text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
