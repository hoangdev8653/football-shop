import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
function header() {
  return (
    <div className="w-full h-auto">
      <div className="bg-black text-right ">
        <div className="text-white mr-0 flex gap-2  ">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <MdOutlineMailOutline />
          <MdOutlinePhone />
        </div>
      </div>
    </div>
  );
}

export default header;
