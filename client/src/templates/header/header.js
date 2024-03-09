import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import ModalSearch from "../../components/modal/modal";
import Logo from "../../assets/logo.png";
import UserDeafaute from "../../assets/user_deafaute.jpg";
import { IoMdMenu } from "react-icons/io";
import styles from "./header.module.scss";
import Cart from "../../components/cart/cart";
import { getLocalStorage } from "../../utils/LocalStorage";

function Header() {
  const user = getLocalStorage("user");

  return (
    <div className="w-full h-auto">
      <div className="bg-black text-right ">
        <div className={styles.socal_media}>
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
      <div className="w-full flex justify-between">
        <div className={styles.menu_mobile}>
          <IoMdMenu />
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
          <a href={user?.avarta ? "/profile" : "/login"}>
            <img
              className={styles.avarta}
              src={user?.avarta || UserDeafaute}
              alt="avarta"
            />
          </a>
          {/* modal cart */}
          <Cart />
        </div>
      </div>
      <div className={styles.nav_header}>
        <a className="my-2" href="/ao-bong-da-clb/">
          <span className="opacity-80 hover:opacity-100">
            ÁO BÓNG ĐÁ CÂU LẠC BỘ
          </span>
        </a>
        <a className="my-2" href="/ao-bong-da-doi-tuyen">
          <span className="opacity-80 hover:opacity-100">
            ÁO BÓNG ĐÁ ĐỘI TUYỂN
          </span>
        </a>
        <a className="my-2" href="/ao-bong-da-khong-logo">
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

export default Header;
