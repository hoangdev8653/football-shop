import React from "react";
import styles from "./profile.module.scss";
import userDefaute from "../../assets/user_deafaute.jpg";
import { CiStar } from "react-icons/ci";
function profile() {
  return (
    <div className={styles.profile}>
      <div className="max-w-[1050px] mx-auto justify-center ">
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          className="text-center "
        >
          <div className="text-center my-4">
            <img
              className="w-[80px] mx-auto rounded hover:opacity-80 cursor-pointer mt-2"
              src={userDefaute}
              alt="avarta"
            />
            <div className="flex justify-center ">
              <p className="font-medium text-xl">Huy Hoàng</p>
            </div>
          </div>
          <div className="flex">
            <p>History</p>
            <p>Info</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
