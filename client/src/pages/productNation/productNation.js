import React from "react";
import BannerNation from "../../assets/Banner-ao-doi-tuyen-2024.jpg";
import { CiStar } from "react-icons/ci";
import { MdOutlineNavigateNext } from "react-icons/md";
import Discount from "../../components/discount";
import WishList from "../../components/wishList";
import styles from "./productNation.module.scss";

function productNation() {
  return (
    <div className="product_nation ">
      <div className="bg-white text-center justify-center w-full">
        <p className="text-orange-500 font-bold text-2xl py-4">
          TRANG PHỤC THI ĐẤU BÓNG ĐÁ ĐỘI TUYỂN MỚI NHẤT 2024
        </p>
      </div>
      <div className="relative">
        <img
          className="w-full object-cover mb-4"
          src={BannerNation}
          alt="banner-doi-tuyen"
        />

        <div
          style={{ backgroundColor: "rgba(0,0,0,0.51)" }}
          className={styles.text_banner}
        >
          <p className="font-bold text-center justify-center py-2 text-xl">
            ÁO BÓNG ĐÁ ĐỘI TUYỂN HÀNG ĐẦU
          </p>
          <p className="text-center justify-center py-2 text-base ">
            Những đội tuyển quốc gia hàng đầu như Anh, Bồ đào nha, Đức, Brazil,
            Pháp, Tây ban nha,...
          </p>
        </div>
      </div>
      <div className="max-w-[1050px] mx-auto my-8">
        <div className=" flex">
          <b className="block flex-1 h-[2px] bg-current font-bold mt-6 opacity-30 text-orange-300"></b>
          <div className="text-gray-800 font-bold flex border-solid border-2 border-gray-400">
            <p className=" flex mx-2 my-2">
              <CiStar className=" text-2xl " />
              <span>NHỮNG MẪU ÁO ĐỘI TUYỂN QUỐC GIA ĐẸP NHẤT</span>
            </p>
          </div>
          <b className="block flex-1 h-[2px] bg-current font-bold mt-6 opacity-30 text-orange-300"></b>
        </div>
        <div className={styles.grid}>
          <div className={styles.container}>
            <img
              className={styles.image}
              src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
                alt="2"
              />
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
              }}
              className="absolute bottom-0 w-full text-center text-white"
            >
              <p className="mx-4 text-xs pt-2 hover:opacity-60">
                Áo bóng đá Dortmund sân nhà 23/24 hàng thái lan
              </p>
              <p className="mb-6 mt-1 text-xs">
                <del className="text-gray-400 mx-2">330,000đ</del>
                <ins className="mx-2 text-white">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount
              className="absolute top-1 left-2 px-3 py-4 rounded-full"
              pecentDiscount={15}
            />
            <WishList className="absolute top-2 right-2" />
          </div>
          <div className={styles.container}>
            <img
              className={styles.image}
              src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
                alt="2"
              />
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
              }}
              className="absolute bottom-0 w-full text-center text-white"
            >
              <p className="mx-4 text-xs pt-2 hover:opacity-60">
                Áo bóng đá Dortmund sân nhà 23/24 hàng thái lan
              </p>
              <p className="mb-6 mt-1 text-xs">
                <del className="text-gray-400 mx-2">330,000đ</del>
                <ins className="mx-2 text-white">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount
              className="absolute top-1 left-2 px-3 py-4 rounded-full"
              pecentDiscount={15}
            />
            <WishList className="absolute top-2 right-2" />
          </div>
          <div className={styles.container}>
            <img
              className={styles.image}
              src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
                alt="2"
              />
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
              }}
              className="absolute bottom-0 w-full text-center text-white"
            >
              <p className="mx-4 text-xs pt-2 hover:opacity-60">
                Áo bóng đá Dortmund sân nhà 23/24 hàng thái lan
              </p>
              <p className="mb-6 mt-1 text-xs">
                <del className="text-gray-400 mx-2">330,000đ</del>
                <ins className="mx-2 text-white">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount
              className="absolute top-1 left-2 px-3 py-4 rounded-full"
              pecentDiscount={15}
            />
            <WishList className="absolute top-2 right-2" />
          </div>
          <div className={styles.container}>
            <img
              className={styles.image}
              src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
                alt="2"
              />
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
              }}
              className="absolute bottom-0 w-full text-center text-white"
            >
              <p className="mx-4 text-xs pt-2 hover:opacity-60">
                Áo bóng đá Dortmund sân nhà 23/24 hàng thái lan
              </p>
              <p className="mb-6 mt-1 text-xs">
                <del className="text-gray-400 mx-2">330,000đ</del>
                <ins className="mx-2 text-white">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount
              className="absolute top-1 left-2 px-3 py-4 rounded-full"
              pecentDiscount={15}
            />
            <WishList className="absolute top-2 right-2" />
          </div>
        </div>
      </div>

      <div className="max-w-[1050px] mx-auto my-8">
        <div className=" flex">
          <b className="block flex-1 h-[2px] bg-current font-bold mt-6 opacity-30 text-orange-300"></b>
          <div className="text-gray-800 font-bold flex border-solid border-2 border-gray-400">
            <p className=" flex mx-2 my-2">
              <CiStar className=" text-2xl " />
              <span>NHỮNG MẪU ÁO ĐỘI TUYỂN QUỐC GIA ĐẸP NHẤT</span>
            </p>
          </div>
          <b className="block flex-1 h-[2px] bg-current font-bold mt-6 opacity-30 text-orange-300"></b>
        </div>
        <div className={styles.grid}>
          <div className={styles.container}>
            <img
              className={styles.image1}
              src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                className={styles.image2}
                src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
                alt="2"
              />
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
              }}
              className="absolute bottom-0 w-full text-center text-white"
            >
              <p className="mx-4 text-xs pt-2 hover:opacity-60">
                Áo bóng đá Dortmund sân nhà 23/24 hàng thái lan
              </p>
              <p className="mb-6 mt-1 text-xs">
                <del className="text-gray-400 mx-2">330,000đ</del>
                <ins className="mx-2 text-white">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount
              className="absolute top-1 left-2 px-3 py-4 rounded-full"
              pecentDiscount={15}
            />
            <WishList className="absolute top-2 right-2" />
          </div>
          <div className={styles.container}>
            <img
              className={styles.image}
              src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
                alt="2"
              />
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
              }}
              className="absolute bottom-0 w-full text-center text-white"
            >
              <p className="mx-4 text-xs pt-2 hover:opacity-60">
                Áo bóng đá Dortmund sân nhà 23/24 hàng thái lan
              </p>
              <p className="mb-6 mt-1 text-xs">
                <del className="text-gray-400 mx-2">330,000đ</del>
                <ins className="mx-2 text-white">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount
              className="absolute top-1 left-2 px-3 py-4 rounded-full"
              pecentDiscount={15}
            />
            <WishList className="absolute top-2 right-2" />
          </div>
          <div className={styles.container}>
            <img
              className={styles.image}
              src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
                alt="2"
              />
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
              }}
              className="absolute bottom-0 w-full text-center text-white"
            >
              <p className="mx-4 text-xs pt-2 hover:opacity-60">
                Áo bóng đá Dortmund sân nhà 23/24 hàng thái lan
              </p>
              <p className="mb-6 mt-1 text-xs">
                <del className="text-gray-400 mx-2">330,000đ</del>
                <ins className="mx-2 text-white">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount
              className="absolute top-1 left-2 px-3 py-4 rounded-full"
              pecentDiscount={15}
            />
            <WishList className="absolute top-2 right-2" />
          </div>
          <div className={styles.container}>
            <img
              className={styles.image}
              src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
                alt="2"
              />
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
              }}
              className="absolute bottom-0 w-full text-center text-white"
            >
              <p className="mx-4 text-xs pt-2 hover:opacity-60">
                Áo bóng đá Dortmund sân nhà 23/24 hàng thái lan
              </p>
              <p className="mb-6 mt-1 text-xs">
                <del className="text-gray-400 mx-2">330,000đ</del>
                <ins className="mx-2 text-white">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount
              className="absolute top-1 left-2 px-3 py-4 rounded-full"
              pecentDiscount={15}
            />
            <WishList className="absolute top-2 right-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default productNation;
