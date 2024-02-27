import React from "react";
import Slider from "react-slick";
import Discount from "../components/discount";
import BannerIn from "../assets/Banner-keu-goi-in.png";
import Button from "../components/button";
import { IoMdArrowUp } from "react-icons/io";
import SizeVn from "../assets/Tu-van-size-viet-nam.png";
import SizeTL from "../assets/Tu-van-size-thai-lan.png";

function productDeatails() {
  var settings = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="product-deatail">
      <div className="w-full" style={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
        <div className="max-w-[1050px] mx-auto py-4 text-white uppercase text-lg font-medium flex text-center justify-center gap-2">
          <a className="hover:opacity-70" href="/">
            Home
          </a>{" "}
          /<p>đồ bóng đá </p> /<p>Quần áo bóng đá đẹp mùa giải mới 23/24 </p> /
          <p>Áo Ac Milan</p>
        </div>
      </div>
      <div className="max-w-[1050px] mx-auto">
        <div className=" flex my-8">
          <div className="w-1/2 bg-red-500 mx-2">
            <div className="w-full relative">
              <Slider {...settings}>
                <img
                  src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-ac-milan-san-khach-2023-1.webp"
                  alt="ac milan"
                />
                <img
                  src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-ac-milan-san-khach-2023-2.webp"
                  alt="ac milan2"
                />
              </Slider>
              <Discount
                pecentDiscount={15}
                className="absolute top-2 py-[18px] px-[14px] rounded-[30px] left-2 text-lg"
              />
            </div>
          </div>
          <div className="w-1/2  mx-2">
            <p className="uppercase text-orange-500 font-bold text-xl mb-2">
              Áo bóng đá AC Milan sân khách 23/24 hàng Thái Lan
            </p>
            <p className="text-xl flex gap-4">
              <del className="opacity-30">
                <span>
                  330,000
                  <span>đ</span>
                </span>
              </del>
              <ins className="text-orange-500 font-semibold">
                <span>280,000đ</span>
              </ins>
            </p>
            <p className="my-2">
              Áo bóng đá{" "}
              <span className="text-orange-500 font-semibold">AC Milan</span>{" "}
              sân khách mùa giải 23/24
            </p>
            <ul className="text-black my-2 list-disc ml-4">
              <li className="my-2">Size: S - M - L - XL - 2XL - 3XL</li>
              <li className="my-2">
                Thiết kế Form châu âu và Slim-fit ôm body
              </li>
              <li className="my-2">Logo thiết kế đúc PU 3D</li>
            </ul>
            <p className="mb-2">
              Hàng VN giá{" "}
              <span>
                <strong className="text-red-500">
                  Khuyến mãi còn 100.000 VNĐ /1 bộ{" "}
                </strong>
              </span>
              -
              <span className="text-red-500">
                <strong>Từ 5 bộ trở lên: 95.000VNĐ / 1 bộ</strong>
              </span>
              <p>
                Hàng Thái Lan giá{" "}
                <span className="text-red-500">
                  <strong>
                    Khuyến mãi còn 280.000 VNĐ /1 áo - 350.000 VNĐ /1 bộ
                  </strong>
                </span>
                -
                <span className="text-red-500">
                  <strong>
                    Từ 5 bộ trở lên: 270,000VNĐ/ 1 áo - 340,000VNĐ/ 1 bộ
                    <img src={BannerIn} alt="banner-keu-goi-in" />
                  </strong>
                </span>
              </p>
            </p>
            <p className="text-orange-500 uppercase font-semibold text-xl my-2">
              dịch vụ in ấn sporter
            </p>
            <div className="my-4 flex gap-4">
              <div className="flex">
                <button className="border-[1px] border-solid border-gray-300 px-2 py-2">
                  -
                </button>
                <input
                  type="text"
                  className="border-solid border-[1px] border-gray-300 text-center w-[50px] focus:outline-none"
                  value="1"
                />
                <button className="border-[1px] border-solid border-gray-300 px-2 py-2">
                  +
                </button>
              </div>
              <Button className="text-white bg-orange-500 font-semibold hover:bg-orange-700">
                ADD TO CART
              </Button>
            </div>
            <div className="flex mt-8 ml-4 gap-4 font-semibold ">
              <Button className="text-white bg-red-700 hover:bg-red-900">
                TƯ VẤN NGAY
              </Button>
              <Button className="text-red-700 border-2 border-red-700 border-solid hover:text-white hover:bg-red-700">
                HOTLINE: 0936777554
              </Button>
            </div>
          </div>
        </div>
        <div id="discription">
          <div
            style={{ backgroundColor: "rgba(0,0,0,0.03)" }}
            className="w-full font-bold"
          >
            <span className="text-gray-200 flex py-2 ml-4">
              <IoMdArrowUp className="font-bold text-2xl" />
              <span>Description</span>
            </span>
          </div>
          <p className="text-black font-semibold text-lg my-6 ml-8">
            Chi tiết áo thi đấu AC MIlan sân khách mùa giải 23/24
          </p>
          <ul className="text-black my-2 list-disc ml-4">
            <li className="my-2 ml-4">
              Giống 99% áo chính hãng, phiên bản Player (Bản cầu thủ thi đấu
              trên sân)
            </li>
            <li className="my-2 ml-4">
              Kiểu dáng: Bodyfit Form - Form ôm châu âu{" "}
            </li>
            <li className="my-2 ml-4">Size: S - M - L - XL - 2XL</li>
            <li className="my-2 ml-4">Logo Decal đúc PVC 3D</li>
          </ul>
          <div className="flex mx-2 my-4">
            <img
              className="w-1/2 mx-1"
              src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-ac-milan-san-khach-2023-1.webp"
              alt="anh1"
            />
            <img
              className="w-1/2 mx-1"
              src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-ac-milan-san-khach-2023-2.webp"
              alt="anh2"
            />
          </div>
          <ul className="text-black my-2 list-disc ml-4">
            <p className="text-orange-500 font-bold text-2xl my-6 ml-8">
              Áo AC Milan sân khách 23/24 hàng Thái Lan
            </p>
            <li className="my-2 ml-4">Không sử dụng chất tẩy</li>
            <li className="my-2 ml-4">Không sấy khô</li>
            <li className="my-2 ml-4">Không giặt khô</li>
            <li className="my-2 ml-4">Ủi với nhiệt độ thấp, dưới 40 độ C</li>
            <li className="my-2 ml-4">Giặt bằng nước lạnh</li>
          </ul>
          <ul className="text-black my-2 list-disc ml-4">
            <p className="text-orange-500 font-bold text-2xl my-6 ml-8">
              Lưu ý:
            </p>
            <li className="my-2 ml-4">
              Không ngâm trong nước giặt, xả vải quá lâu hoặc ngâm qua đêm.
            </li>
            <li className="my-2 ml-4">
              Lật ngược mặt bên trong áo và quần khi giặt và ủi
            </li>
          </ul>
          <p className="text-orange-500 font-bold text-2xl mb-2 mt-4 ml-8">
            Bảng size tư vấn áo đấu AC Milan sân khách mùa giải 23/24
          </p>
          <span className="ml-8">
            Bảng size tư vấn mang tình chất tham khảo dựa trên chiều cao và cân
            nặng chuẩn của người mẫu mặc trên cơ thể. Để được tư vấn chính xác
            hơn bạn có thể nhắn tin trực tiếp Sporter để được tư vấn kỹ hơn về
            bảng size hoặc ghé trực tiếp Sporter để thử size và mua trực tiếp
            nhé.
          </span>
          <div className="w-full flex my-4">
            <div className="w-1/2 mx-2">
              <img className="" src={SizeVn} alt="bang-size-vn" />
              <p className="mx-auto text-center">
                Bảng tư vấn size hàng Việt Nam
              </p>
            </div>
            <div className="w-1/2 mx-2">
              <img className="" src={SizeTL} alt="bang-size-thailan" />
              <p className="mx-auto text-center">
                Bảng tư vấn size hàng Thái Lan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productDeatails;
