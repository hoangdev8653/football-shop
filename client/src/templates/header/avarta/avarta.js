import React, { useState } from "react";
import {
  getLocalStorage,
  clearLocalStorage,
} from "../../../utils/LocalStorage";
import UserDeafaute from "../../../assets/user_deafaute.jpg";
import { logout } from "../../../apis/auth";
import { useNavigate } from "react-router-dom";
import styles from "./avarta.module.scss";

function Avarta() {
  const [isOpen, setIsOpen] = useState(false);
  const user = getLocalStorage("user");
  const navigate = useNavigate();
  console.log(user.image);
  const handleAvartaHover = () => {
    setIsOpen(true);
  };
  const handleAvartaLeave = () => {
    setIsOpen(false);
  };
  // console.log(user);
  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.status === 200) {
        clearLocalStorage();
        navigate("/login");
      }
    } catch (error) {
      console.log("Logout Failed: ", error.message);
    }
  };
  return (
    <div className={styles.avarta}>
      <div
        onMouseEnter={handleAvartaHover}
        onMouseLeave={handleAvartaLeave}
        className="relative"
      >
        <a href={user ? "/profile" : "/login"}>
          <img
            className="w-[50px] h-[50px] rounded-full cursor-pointer object-cover hover:opacity-60 "
            src={user?.image || UserDeafaute}
            alt="avarta"
          />
        </a>
        {user && isOpen ? (
          <>
            <div
              style={{ right: "-16px" }}
              className="absolute z-50 overflow-hidden "
            >
              <div className="  mt-2 w-36 p-2 bg-gray-800">
                <a href="/profile">
                  <p className="text-white font-semibold hover:bg-gray-400 cursor-pointer mt-[2px] text-lg">
                    Profile
                  </p>
                </a>
                <a href="/whishList">
                  <p className="text-white font-semibold cursor-pointer border-b-[1px] text-lg border-gray-400 hover:bg-gray-400">
                    WhishList
                  </p>
                </a>
                <div onClick={handleLogout}>
                  <p className="text-white font-semibold hover:bg-gray-400 cursor-pointer mt-[2px] text-lg">
                    Sign Out
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Avarta;
