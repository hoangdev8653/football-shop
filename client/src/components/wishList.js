import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { whishListStore } from "../store/wishListStore";

function WishList({ className, id, onClick }) {
  const whishList = whishListStore();
  const [clicked, setClicked] = useState(false);

  const idProduct = whishList.data.map((item) => item.productId?._id);

  useEffect(() => {
    if (idProduct.includes(id)) {
      setClicked(true);
    }
  }, [idProduct, id]);

  const handleAddToWishlist = async () => {
    try {
      if (clicked === false) {
        await whishList.addProductWhishList(id);
        setClicked(true);
      } else {
        return;
      }
    } catch (error) {
      console.error("Failed to add to wishlist:", error);
    }
  };

  return (
    <>
      {clicked ? (
        <a href="/whishlist" title="Browse WishList">
          <CiHeart
            onClick={handleAddToWishlist}
            className={twMerge(
              clsx(
                "text-4xl rounded-3xl p-2 cursor-pointer transition-colors duration-200  bg-red-500 text-white hover:bg-red-600",
                className
              )
            )}
          />
        </a>
      ) : (
        <p title="Add to WishList ">
          <CiHeart
            onClick={handleAddToWishlist}
            className={twMerge(
              clsx(
                "text-4xl rounded-3xl p-2 cursor-pointer transition-colors duration-200 bg-white hover:bg-red-600",
                className
              )
            )}
          />
        </p>
      )}
    </>
  );
}

export default WishList;
