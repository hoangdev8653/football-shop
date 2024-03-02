import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function discount({ className, pecentDiscount }) {
  const classNameDeafaut = twMerge(
    clsx(
      "text-white bg-orange-500 font-bold px-3 py-4 rounded-full absolute",
      className
    )
  );
  return <div className={classNameDeafaut}>{pecentDiscount}%</div>;
}

export default discount;
