import clsx from "clsx";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { twMerge } from "tailwind-merge";
function wishList({ className }) {
  const className1 = twMerge(
    clsx(
      "bg-white text-4xl rounded-3xl p-2 cursor-pointer hover:bg-red-600 hover:text-white"
    ),
    className
  );
  return (
    <p href="/" title="Add to WishList">
      <CiHeart className={className1} />
    </p>
  );
}

export default wishList;
