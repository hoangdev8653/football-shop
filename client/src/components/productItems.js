import React, { useState } from "react";
import Discount from "./discount";
import WishList from "./wishList";
import { formatPrice } from "../utils/forrmatPriceVn";
import product_coming from "../assets/product_coming-soon.jpg";
import SliderConfig from "./slider";

function ProductItems({ itemToShow = 4, data }) {
  const [idWhishList, setIdWhishList] = useState(null);

  const handleWishListClick = (id) => {
    setIdWhishList(id);
  };
  return (
    <div className="overflow-hidden bg-black">
      <SliderConfig itemToShow={itemToShow}>
        {data &&
          data?.map((item, index) => (
            <div
              key={index}
              className="relative w-1/2 cursor-pointer overflow-y-hidden"
            >
              <a href={`/product/${item.slug}`}>
                <img
                  className="block w-full h-[400px] px-[2px] object-cover"
                  src={item.image[0] || product_coming}
                  alt={item.slug}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full opacity-0 transition ease-in-out duration-500 hover:opacity-100">
                  <img
                    className="block w-full h-[400px] px-[2px] object-cover"
                    src={item.image[1] || product_coming}
                    alt={item.slug}
                  />
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
                    <del className="text-gray-400 mx-2">
                      {formatPrice(250000)}
                    </del>
                    <ins className="mx-2 text-white">
                      <strong>{formatPrice(Number(item.price))}</strong>
                    </ins>
                  </p>
                </div>
                <Discount
                  className="absolute top-1 left-2 px-3 py-4 rounded-full"
                  pecentDiscount={15}
                />
              </a>
              <div onClick={() => handleWishListClick(item._id)}>
                <WishList
                  id={item._id}
                  onClick={handleWishListClick}
                  className="absolute top-2 right-2"
                />
              </div>
            </div>
          ))}
      </SliderConfig>
    </div>
  );
}

export default ProductItems;
