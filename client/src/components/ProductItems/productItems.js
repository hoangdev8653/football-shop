import React from "react";
import Slider from "react-slick";
import styles from "./productItems.module.scss";

function productItems() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  return (
    <div className="overflow-x-hidden">
      <Slider {...settings}>
        {/* <div className="relative mx-[6px]"> */}
        <div className={`${styles.imgItems} relative mx-[6px]`}>
          <img
            className={styles.imgAffter}
            src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
            alt=""
          />
          <img
            className={styles.imgBefore}
            src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
            alt=""
          />
        </div>
        <div className="relative mx-[6px]">
          <img
            className=""
            src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
            alt=""
          />
          <img
            src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
            alt=""
          />
        </div>
        <div className="relative mx-[6px]">
          <img
            className=""
            src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
            alt=""
          />
          <img
            src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
            alt=""
          />
        </div>
        <div className="relative mx-[6px]">
          <img
            className=""
            src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
            alt=""
          />
          <img
            src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
            alt=""
          />
        </div>
        <div className="relative mx-[6px]">
          <img
            className=""
            src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-2-300x400.png"
            alt=""
          />
          <img
            src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-dortmund-san-nha-2324-1-300x400.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default productItems;
