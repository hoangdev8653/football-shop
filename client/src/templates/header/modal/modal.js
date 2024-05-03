import React, { useState, useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./modal.module.scss";
import { getProductByKey } from "../../../apis/product";
function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [data, setData] = useState([]);
  const modalRef = useRef();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getProductByKey(valueSearch);
  //       if (data) {
  //         console.log(data);
  //       } else {
  //         console.log("Thất bại");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [valueSearch]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleSearch = (value) => {
    setValueSearch(value);
    console.log(value);
  };
  const elol = document.getElementById("list_results");
  const handleShowResults = (searchValue) => {
    const searchResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (searchResults.length > 0) {
      let renderUi = "";
      searchResults.forEach((item) => {
        renderUi += `<li>${item.name}</li>`;
      });
    } else {
      elol.innerHTML = "Không tìm thấy sản phẩm";
    }
  };

  function useDebounce(callback, delay) {
    let timeoutId;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback();
      }, delay);
    };
  }

  return (
    <div className="relative">
      <BsSearch
        className="text-2xl cursor-pointer hover:opacity-60 mt-1"
        onClick={handleModalToggle}
      />
      {isModalOpen && (
        <>
          <div className="relative" ref={modalRef}>
            <div className={`${styles.positionModal} absolute z-50`}>
              <input
                placeholder="Search"
                style={{
                  backgroundColor: "rgba(255,255,255, 0.2)",
                  borderColor: "rgba(255,255,255, 0.09)",
                  color: "white",
                }}
                className="w-[452px]  border-2 border-solid rounded-full px-4 py-3 focus:outline-none placeholder-white placeholder:text-lg  font-semibold"
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <a href={`/search/?s=${valueSearch}&post_type=product`}>
              <BsSearch
                className={`${styles.positionModal} absolute z-50 text-white font-bold text-3xl mt-2 mr-3 cursor-pointer hover:opacity-60`}
              />
            </a>
            <div className={`${styles.positionresults} absolute z-50 w-full`}>
              <div className="w-[452px] text-white max-h-[20rem] overflow-y-auto">
                <div className="w-full flex mt-2 mb-4 items-center cursor-pointer">
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src="https://www.sporter.vn/wp-content/uploads/2020/09/Ao-bong-da-real-madrid-san-khach-mau-ba-0-280x280.jpg"
                    alt="text"
                  />
                  <p className="mx-4 text-3xl">
                    Áo bóng đá Real Madrid sân khách mẫu ba 23/24 hàng Thái Lan
                  </p>
                  <p className="font-medium text-2xl">
                    <del className="font-normal text-gray-300 mx-1">
                      <span>300.000$</span>
                    </del>
                    <span>200.000$</span>
                  </p>
                </div>
                <div className="w-full flex mt-2 items-center">
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src="https://www.sporter.vn/wp-content/uploads/2020/09/Ao-bong-da-real-madrid-san-khach-mau-ba-0-280x280.jpg"
                    alt="text"
                  />
                  <p className="mx-4 text-3xl">
                    Áo bóng đá Real Madrid sân khách mẫu ba 23/24 hàng Thái Lan
                  </p>
                  <p className="font-medium text-2xl">
                    <del className="font-normal text-gray-300 mx-1">
                      <span>300.000$</span>
                    </del>
                    <span>200.000$</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.overlay}></div>
        </>
      )}
    </div>
  );
}

export default Modal;
