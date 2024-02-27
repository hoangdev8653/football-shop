import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function discount({ className, pecentDiscount }) {
  const classNameDeafaut = twMerge(
    clsx("text-white bg-orange-500 font-bold", className)
  );
  return <div className={classNameDeafaut}>{pecentDiscount}%</div>;
}

export default discount;
