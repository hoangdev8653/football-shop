import React, { useState, useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./modal.module.scss";
import { getProductByKey } from "../../../../apis/product";
import { useDebounce } from "../../../../hooks/useDebounce";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const debounceSearch = useDebounce(valueSearch);
  const [data, setData] = useState([]);
  const modalRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      if (debounceSearch.trim() !== "") {
        try {
          const response = await getProductByKey(debounceSearch);
          if (response.status === 200) {
            setData(response.data.content);
          } else {
            console.log("Thất bại");
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [debounceSearch]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
      setValueSearch("");
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
  console.log(valueSearch);

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
                {data && data.length > 0 ? (
                  <>
                    {data?.map((item, index) => (
                      <>
                        <a href={`/product/${item.slug}`}>
                          <div
                            key={index}
                            className="w-full flex mt-2 mb-4 items-center cursor-pointer hover:opacity-75"
                          >
                            <img
                              className="w-[50px] h-[50px] rounded-full object-cover"
                              src={item.image[0]}
                              alt={item.slug}
                            />

                            <p className="mx-4 text-3xl">{item.name}</p>
                            <p className="font-medium text-2xl">
                              <del className="font-normal text-gray-300 mx-1">
                                <span>300.000$</span>
                              </del>
                              <span>{item.price}$</span>
                            </p>
                          </div>
                        </a>
                      </>
                    ))}
                  </>
                ) : (
                  <div className="w-full flex mt-2 mb-4 items-center mx-auto justify-center my-2">
                    <p className="font-semibold text-2xl">No Products Found</p>
                  </div>
                )}
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
