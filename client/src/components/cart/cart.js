import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from "./cart.module.scss";
import Button from "../../components/button";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconCartHover = () => {
    setIsOpen(true);
  };

  const handleIconCartLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={handleIconCartHover}
      onMouseLeave={handleIconCartLeave}
      className="relative"
    >
      <BsCart2 className="text-2xl cursor-pointer hover:opacity-60 " />
      {isOpen && (
        <div className={styles.fill}>
          {/* <p>hoang</p> */}
          <div className={styles.cart}>
            <div className="mx-4">
              <div className="max-h-[400px] overflow-y-auto">
                <div className="flex mt-4 border-b-[1px] border-gray-400 border-solid mb-2">
                  <img
                    className="w-16 object-cover mx-4 h-[70px]"
                    src="https://www.sporter.vn/wp-content/uploads/2023/06/Chi-tiet-ao-bong-da-manchester-united-2324-1.png"
                    alt="item"
                  />
                  <div className="">
                    <p className="text-orange-500 font-medium hover:text-white cursor-pointer">
                      Áo bóng đá MU sân nhà 23/24 hàng Thái Lan
                    </p>
                    <p className="text-gray-300 font-medium mb-1">
                      1 * 280,000đ
                    </p>
                  </div>
                  <IoIosCloseCircleOutline className={styles.icon_close} />
                </div>
                <div className="flex mt-4 border-b-[1px] border-gray-400 border-solid mb-2">
                  <img
                    className="w-16 object-cover mx-4 h-[70px]"
                    src="https://www.sporter.vn/wp-content/uploads/2023/06/Chi-tiet-ao-bong-da-manchester-united-2324-1.png"
                    alt="item"
                  />
                  <div className="">
                    <p className="text-orange-500 font-medium hover:text-white cursor-pointer">
                      Áo bóng đá MU sân nhà 23/24 hàng Thái Lan
                    </p>
                    <p className="text-gray-300 font-medium mb-1">
                      1 * 280,000đ
                    </p>
                  </div>
                  <IoIosCloseCircleOutline className={styles.icon_close} />
                </div>
              </div>
              <div className="text-center mx-auto border-b-[1px] border-t-[1px] border-gray-400">
                <p className="font-bold text-gray-500 my-2">
                  <span className="">Subtotal: </span>
                  <span className="">560,000₫</span>
                </p>
              </div>

              <div className="mt-2 pb-8">
                <Button className="bg-gray-400 text-white font-bold block w-full hover:opacity-80 my-1">
                  VIEW CART
                </Button>
                <Button className="bg-orange-500 text-white font-bold block w-full hover:opacity-80 my-1">
                  CHECK OUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="absolute">
        <div className={styles.quantity}>3</div>
      </div>
    </div>
  );
}

export default Cart;
