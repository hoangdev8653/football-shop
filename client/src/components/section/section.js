import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import styles from "./section.module.scss";
import { getAllClub } from "../../apis/club";
function Section() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllClub();
        setData(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full bg-black relative h-auto">
      <div className={styles.position}>
        <div className="text-orange-500 py-4 flex">
          <b className="block flex-1 h-[2px] bg-current font-bold mt-5 opacity-30"></b>
          <p className=" flex mx-2 my-2">
            <CiStar className="text-orange-500 text-2xl" />
            <span className="text-lg font-bold justify-center text-center">
              CLICK CHUỘT VÀO LOGO CLB ĐỂ XEM CHI TIẾT ÁO ĐẤU
            </span>
          </p>
          <b className="block flex-1 h-[2px] bg-current font-bold mt-5 opacity-30"></b>
        </div>
        <div className="flex flex-wrap justify-center">
          {data &&
            data.map((item, index) => (
              <div key={index} className="max-w-[132px] relative flex ">
                <div className="ml-auto p-[15px] relative ">
                  <a href={`/club/${item.slug}`} target="_blank">
                    <img src={item.logo} alt="logo" />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
