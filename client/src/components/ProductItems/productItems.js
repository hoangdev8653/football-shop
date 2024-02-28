import React from "react";
import Slider from "react-slick";
import styles from "./productItems.module.scss";
import Discount from "../discount";
import WishList from "../wishList";

function productItems({ itemToShow = 5 }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: itemToShow,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden bg-black">
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
}

export default productItems;
