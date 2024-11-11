import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { productStore } from "../store/productStore";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function WishList({ className, id, onClick }) {
  const whishList = productStore();
  const [click, setClick] = useState(true);
  const [idWhishList, setIdWhishList] = useState();

  console.log(id);

  const handleAddToWishlist = () => {
    // whishList.addProductWhishList(id);

    setClick(!click);
  };

  return (
    <p href="/" title="Add to WishList">
      <CiHeart
        onClick={handleAddToWishlist}
        className={twMerge(
          clsx(
            "text-4xl rounded-3xl p-2 cursor-pointer transition-colors duration-200",
            {
              "bg-white hover:bg-red-600": click,
              "bg-red-500 text-white hover:bg-red-600": !click,
            },
            className
          )
        )}
      />
    </p>
  );
}

export default WishList;
