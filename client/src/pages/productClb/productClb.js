import React, { useEffect, useState } from "react";
import Banner from "../../assets/Banner-bong-da-clb.png";
import BannerMobile from "../../assets/Banner_Bong-da-clb_thailan.webp";
import Section from "../../components/section/section";
import ProductItems from "../../components/ProductItems/productItems";
import { BsCart2 } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import styles from "./productClub.module.scss";
import Discount from "../../components/discount";
import WishList from "../../components/wishList";
import { getProductFromVn, getProductNoLogo } from "../../apis/product";
import { formatPrice } from "../../utils/forrmatPriceVn";

function ProductClb() {
  const [data, setData] = useState([]);
  const [productNoLogo, setProductNoLogo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resonse = await getProductFromVn();
        setData(resonse.data.content);

        const resNoLogo = await getProductNoLogo();
        setProductNoLogo(resNoLogo.data.content);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="productClub w-full">
      <div className="bg-gray-800 ">
        <div className={styles.title}>
          QUẦN ÁO BÓNG ĐÁ ĐẸP NHẤT MÙA GIẢI MỚI 23/24 HÀNG VIỆT NAM VÀ THÁI LAN{" "}
        </div>
      </div>
      <div className="w-full relative mb-8">
        <img className={styles.banner} src={Banner} alt="banner" />
        <img
          className={styles.bannerMobile}
          src={BannerMobile}
          alt="bannerMobile"
        />
        <div className={styles.box_text}>
          <div className="text-center text-white">
            <p className="text-2xl pt-4 py-2 font-bold">
              ÁO BÓNG ĐÁ MÙA GIẢI MỚI
            </p>
            <p className="px-10 pb-8 text-base ">
              Bạn có thể lựa chọn những mẫu áo đấu đội tuyển mạnh, áo bóng đá -
              áo đá banh của các câu lạc bộ hàng đầu hiện nay
            </p>
          </div>
        </div>
      </div>
      <Section />
      <ProductItems />
      <div className="w-full bg-white text-center">
        <p className="text-center my-2 text-lg text-gray-500 flex justify-center font-semibold hover:opacity-60 cursor-pointer">
          <span>
            <BsCart2 className="text-xl mx-2" />
          </span>{" "}
          XEM THÊM CÁC MẪU QUẦN ÁO BÓNG ĐÁ THÁI LAN
        </p>
      </div>
      <div className="bg-black">
        <div className="max-w-[1050px] mx-auto">
          <div className="text-white py-4 flex mt-4 mb-4">
            <b className="block flex-1 h-[2px] bg-current font-bold mt-5 opacity-30"></b>
            <p className=" flex mx-2 my-2">
              <CiStar className="text-white text-2xl" />
              <span className="text-lg font-bold">
                ÁO BÓNG ĐÁ CÂU LẠC BỘ HÀNG VIỆT NAM
              </span>
            </p>
            <b className="block flex-1 h-[2px] bg-current font-bold mt-5 opacity-30"></b>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
            {data &&
              data.map((item, index) => (
                <a
                  key={index}
                  href={`/product/${item.slug}`}
                  className="relative"
                >
                  <img className="w-full" src={item.image[0]} alt={item.slug} />
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.55)",
                      textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
                    }}
                    className="absolute bottom-0 w-full"
                  >
                    <p className="text-center mx-4 text-lg text-white mt-2 hover:opacity-60 uppercase">
                      {item.name}
                    </p>
                    <p className="flex justify-center text-center">
                      <del className="text-gray-400 mx-1">
                        {formatPrice(150000)}
                      </del>
                      <ins className="font-medium text-white mx-1">
                        <strong>{formatPrice(Number(item.price))}</strong>
                      </ins>
                    </p>

                    <div className="text-center mt-2 mb-2">
                      <p className=" text-white flex items-center justify-center gap-2 ">
                        <button className="bg-gray-800 rounded-2xl px-[10px] pb-[2px] font-medium hover:text-black hover:bg-white">
                          Quick view
                        </button>
                      </p>
                    </div>
                  </div>
                  <Discount
                    className="absolute top-2 px-3 py-4 rounded-full"
                    pecentDiscount={17}
                  />
                  <WishList className="top-2 right-2 absolute" />
                </a>
              ))}
          </div>
          <div className="text-white py-4 flex mt-4 mb-4">
            <b className="block flex-1 h-[2px] bg-current font-bold mt-5 opacity-30"></b>
            <p className=" flex mx-2 my-2">
              <CiStar className="text-white text-2xl" />
              <span className="text-lg font-bold">ÁO BÓNG ĐÁ KHÔNG LOGO</span>
            </p>
            <b className="block flex-1 h-[2px] bg-current font-bold mt-5 opacity-30"></b>
          </div>
        </div>
        <div className="max-w-[1080px] mx-auto">
          <ProductItems data={productNoLogo} itemToShow={3} />
        </div>
        <div className="w-full bg-white text-center">
          <a
            href="/ao-bong-da-khong-logo"
            className="text-center my-2 text-lg text-gray-500 flex justify-center font-semibold hover:opacity-60 cursor-pointer"
          >
            <span>
              <BsCart2 className="text-xl " />
            </span>{" "}
            <p className="sm:text-base">
              {" "}
              XEM THÊM CÁC MẪU QUẦN ÁO BÓNG ĐÁ KHÔNG LOGO{" "}
            </p>
          </a>
        </div>
        <div className="text-white py-4  mt-4  w-full mx-auto ">
          <p className="  my-2 text-center justify-center mx-auto">
            <span className="text-lg font-bold">
              MUA QUẦN ÁO BÓNG ĐÁ ĐẸP 23/24
            </span>
          </p>
          <div className="mx-auto text-center max-w-[1080px]">
            <p className="my-6">
              {" "}
              Shop đồ thể thao <span className="font-bold">H7sport</span> chuyên
              Quần áo thi đấu bóng đá đẹp, áo đá banh các câu lạc bộ mạnh hàng
              đầu của các giải đấu lớn như Premier League, La Liga, Bundesliga,
              Serie A, Ligue1….bao gồm áo đấu sân nhà, áo sân khách và áo mẫu 3
              với các loại khác nhau, từ áo đấu hàng Việt Nam, áo bóng đá hàng
              Thái Lan, áo đá banh chính hãng,…Sporter luôn có những chương
              trình khuyến mãi, chế độ hậu mãi tốt để đồng hành lâu dài cùng
              người hâm mộ bóng đá Việt Nam.
            </p>
            <p>
              Trang tổng quan giới thiệu những áo đấu câu lạc bộ mạnh ở 5 giải
              đấu hấp dẫn nhất hiện nay cũng như những tin tức mới nhất về sự
              thay đổi mẫu áo của các hãng đồ thể thao cũng được cập nhật sớm
              nhất
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductClb;
