import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  MdOutlineMailOutline,
  MdOutlineAccountCircle,
  MdOutlinePhone,
} from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import ModalSearch from "../components/modal/modal";
import Logo from "../assets/logo.png";

function header() {
  return (
    <div className="w-full h-auto">
      <div className="bg-black text-right ">
        <div className="text-white flex gap-2 justify-end mx-[15px]  ">
          <a href="/" title="FaceBook">
            <FaFacebookF />
          </a>
          <a href="/" title="Instagram">
            <FaInstagram />
          </a>
          <a href="/" title="Youtube">
            <FaYoutube />
          </a>
          <a href="/" title="Mail">
            <MdOutlineMailOutline />
          </a>
          <a href="/" title="Phone">
            <MdOutlinePhone />
          </a>
        </div>
      </div>
      <div className="w-full flex justify-between ">
        <div className="opacity-0">a</div>
        <div>
          <a
            href="/"
            title="Hệ Thống Bán Lẻ Đồ Thể Thao Sporter.vn - Chuyên cung cấp Quần áo bóng đá, thảm tập yoga, quần áo tập GYM – Yoga chất lượng cao"
          >
            <img className="w-[300px] mt-2 ml-32" src={Logo} alt="logo" />
          </a>
        </div>
        <div className="flex gap-4 mr-4 justify-center my-auto">
          <ModalSearch />
          <MdOutlineAccountCircle className="text-3xl cursor-pointer hover:opacity-60 " />
          <BsCart2 className="text-2xl cursor-pointer  hover:opacity-60" />
        </div>
      </div>
      <div className="bg-black text-white font-bold  justify-center flex gap-4 text-xs">
        <a className="my-2" href="/">
          <span className="opacity-80 hover:opacity-100">
            ÁO BÓNG ĐÁ CÂU LẠC BỘ
          </span>
        </a>
        <a className="my-2" href="/">
          <span className="opacity-80 hover:opacity-100">
            ÁO BÓNG ĐÁ ĐỘI TUYỂN
          </span>
        </a>
        <a className="my-2" href="/">
          <span className="opacity-80 hover:opacity-100">
            ÁO BÓNG ĐÁ KHÔNG LOGO
          </span>
        </a>
        <a className="my-2" href="/">
          <span className="opacity-80 hover:opacity-100">ĐỒ THỂ THAO</span>
        </a>
      </div>
    </div>
  );
}

export default header;
