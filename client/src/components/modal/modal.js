import React, { useState, useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./modal.module.scss";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const modalRef = useRef();

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
  };

  return (
    <div className="relative">
      <BsSearch
        className="text-2xl cursor-pointer hover:opacity-60 mt-1"
        onClick={handleModalToggle}
      />

      {isModalOpen && (
        <>
          <div className="" ref={modalRef}>
            <div className={`${styles.positionModal} absolute z-50`}>
              <input
                placeholder="Search"
                style={{
                  backgroundColor: "rgba(255,255,255, 0.2)",
                  borderColor: "rgba(255,255,255, 0.09)",
                }}
                className="w-[452px] border-2 border-solid rounded-full px-4 py-3 focus:outline-none placeholder-white placeholder:text-lg text-white font-semibold"
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <a href={`/search/?s=${valueSearch}&post_type=product`}>
              <BsSearch
                className={`${styles.positionModal} absolute z-50 text-white font-bold text-3xl mt-2 mr-3 cursor-pointer hover:opacity-60`}
              />
            </a>
          </div>
          <div className={styles.overlay}></div>
        </>
      )}
    </div>
  );
}

export default Modal;
