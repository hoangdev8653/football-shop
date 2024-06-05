import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./productItems.module.scss";
import Discount from "../discount";
import WishList from "../wishList";

function ProductItems({ itemToShow = 5, data }) {
  const [idProduct, setIdProduct] = useState(null);

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

  const handleId = (id) => {
    setIdProduct(id);
  };
  return (
    <div className="overflow-hidden bg-black">
      <Slider {...settings}>
        {data &&
          data.map((item, index) => (
            <div key={index} className={styles.container}>
              <a href={`/product/${item.slug}`}>
                <img
                  className={styles.image}
                  src={item.image[0]}
                  alt={item.slug}
                />
                <div className={styles.overlay}>
                  <img className="h-full" src={item.image[1]} alt={item.slug} />
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
                  }}
                  className="absolute bottom-0 w-full text-center text-white"
                >
                  <p className="mx-4 text-xs pt-2 hover:opacity-60 uppercase">
                    {item.name}
                  </p>
                  <p className="mb-6 mt-1 text-xs">
                    <del className="text-gray-400 mx-2">250.000$</del>
                    <ins className="mx-2 text-white">
                      <strong>{item.price}$</strong>
                    </ins>
                  </p>
                </div>
                <Discount
                  className="absolute top-1 left-2 px-3 py-4 rounded-full"
                  pecentDiscount={15}
                />
              </a>
              <div onClick={() => handleId(item._id)}>
                <WishList id={idProduct} className="absolute top-2 right-2 " />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default ProductItems;
