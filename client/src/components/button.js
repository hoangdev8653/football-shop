import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
function button({ children, className, handleOnClick, type = "button" }) {
  const buttonClassName = twMerge(clsx("py-2 px-4 "), className);
  return (
    <button type={type} onClick={handleOnClick} className={buttonClassName}>
      {children}
    </button>
  );
}

export default button;
