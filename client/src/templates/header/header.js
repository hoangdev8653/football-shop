import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import ModalSearch from "./modalSearch/ModalSearch";
import Logo from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import styles from "./Header.module.scss";
import Cart from "./cart/Cart";
import Avarta from "./Avarta";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";
import { useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const user = getLocalStorage("user");
  const location = useLocation();

  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full h-auto">
      <div className="bg-black text-right ">
        <div
          // className={styles.socal_media}
          className="tablet:text-white tablet:flex tablet:gap-2 tablet:justify-end tablet:mx-[15px] hidden"
        >
          <a href="/" title="Facebook">
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
      <div className="w-full relative flex justify-between h-full ">
        <div className={styles.menu_mobile}>
          <IoMdMenu onClick={handleOpenMenu} />
          {isOpen ? (
            <>
              <div className="w-full absolute left-0 top-0 mt-[60px] z-50">
                <div className="text-center w-full  py-4 my-4">
                  <a href="/">
                    <p className="text-white font-bold opacity-80 hover:opacity-100">
                      ÁO BÓNG ĐÁ THÁI LAN
                    </p>
                  </a>
                </div>
                <div className="text-center w-full py-4 my-4">
                  <a href="/ao-bong-da-clb/">
                    <p
                      className={`text-white font-bold opacity-80 hover:opacity-100 ${
                        location.pathname === "/ao-bong-da-clb/" ??
                        "text-orange-400"
                      }`}
                    >
                      ÁO BÓNG ĐÁ CÂU LẠC BỘ
                    </p>
                  </a>
                </div>
                <div className="text-center w-full py-4 my-4">
                  <a href="/ao-bong-da-doi-tuyen">
                    <p
                      className={`text-white font-bold opacity-80 hover:opacity-100 ${
                        location.pathname === "/ao-bong-da-doi-tuyen" ??
                        "text-orange-400"
                      }`}
                    >
                      ÁO BÓNG ĐÁ ĐỘI TUYỂN
                    </p>
                  </a>
                </div>
                <div className="text-center w-full  py-4 my-4">
                  <a href="/ao-bong-da-khong-logo">
                    <p
                      className={`text-white font-bold opacity-80 hover:opacity-100 ${
                        location.pathname === "/ao-bong-da-khong-logo" ??
                        "text-orange-400"
                      }`}
                    >
                      ÁO BÓNG ĐÁ KHÔNG LOGO
                    </p>
                  </a>
                </div>
                <div className="text-center w-full py-4 my-4">
                  <a href="/sport">
                    <p
                      className={`text-white font-bold opacity-80 hover:opacity-100 ${
                        location.pathname === "/sport" ?? "text-orange-400"
                      }`}
                    >
                      ĐỒ THỂ THAO
                    </p>
                  </a>
                </div>
                <div className="text-center w-full py-4 my-4">
                  <a href={user ? "/profile" : "/login"}>
                    <p className="text-white font-bold opacity-80 hover:opacity-100">
                      {user ? <span> PROFILE </span> : <span>LOGIN</span>}
                    </p>
                  </a>
                </div>
                <div className="text-center w-full py-4 my-4 relative">
                  <a className="flex text-center justify-center gap-2" href="/">
                    <a href="/cart">
                      <span className="text-white font-bold opacity-80 hover:opacity-100 ">
                        Giỏ hàng
                      </span>
                    </a>
                  </a>
                </div>
                <div className="absolute top-0 right-0">
                  <IoMdClose
                    onClick={handleCloseMenu}
                    className="text-white opacity-60 text-2xl cursor-pointer hover:opacity-100 w-10 h-10"
                  />
                </div>
              </div>
              <div
                onClick={handleCloseMenu}
                style={isOpen ? { overflowY: "hidden" } : { overflowY: "auto" }}
                className={`${styles.overlay} ${
                  isOpen ? "overflow-y-hidden" : "overflow-y-auto"
                }`}
              ></div>
            </>
          ) : (
            <> </>
          )}
        </div>
        <div>
          <a
            href="/"
            title="Hệ Thống Bán Lẻ Đồ Thể Thao Sporter.vn - Chuyên cung cấp Quần áo bóng đá, thảm tập yoga, quần áo tập GYM – Yoga chất lượng cao"
          >
            <img className="w-[300px] mt-2 " src={Logo} alt="logo" />
          </a>
        </div>
        <div className="flex gap-4 mr-4 justify-center my-auto items-center">
          <ModalSearch />
          <Avarta />
          <Cart />
        </div>
      </div>
      <div className={styles.nav_header}>
        <a className="my-2" href="/ao-bong-da-clb/">
          <span
            className={`opacity-80 hover:opacity-100 ${
              location.pathname === "/ao-bong-da-clb/" ? "text-orange-400" : ""
            }`}
          >
            ÁO BÓNG ĐÁ CÂU LẠC BỘ
          </span>
        </a>
        <a className="my-2" href="/ao-bong-da-doi-tuyen">
          <span
            className={`opacity-80 hover:opacity-100 ${
              location.pathname === "/ao-bong-da-doi-tuyen"
                ? "text-orange-400"
                : ""
            }`}
          >
            ÁO BÓNG ĐÁ ĐỘI TUYỂN
          </span>
        </a>
        <a className="my-2" href="/ao-bong-da-khong-logo">
          <span
            className={`opacity-80 hover:opacity-100 ${
              location.pathname === "/ao-bong-da-khong-logo"
                ? "text-orange-400"
                : ""
            }`}
          >
            ÁO BÓNG ĐÁ KHÔNG LOGO
          </span>
        </a>
        <a className="my-2" href="/sport">
          <span
            className={`opacity-80 hover:opacity-100 ${
              location.pathname === "/sport" ? "text-orange-400" : ""
            }`}
          >
            ĐỒ THỂ THAO
          </span>
        </a>
      </div>
    </div>
  );
}

export default Header;
