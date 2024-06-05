import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";
// import { productStore } from "../store/productStore";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function WishList({ className, id }) {
  // const { addProductWhishList } = productStore();
  const [click, setClick] = useState(true);

  const handleAddWhishList = async () => {
    console.log(id);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // addProductWhishList(id);
    setClick(!click);
    toast.success("Thêm sản phẩm vào mục yêu thích");
  };

  return (
    <p onClick={handleAddWhishList} href="/" title="Add to WishList">
      <CiHeart
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
