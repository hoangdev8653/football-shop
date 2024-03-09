import React, { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from "./cart.module.scss";
import Button from "../../components/button";
import { getLocalStorage } from "../../utils/LocalStorage";
import { getUserById } from "../../apis/auth";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState("");
  const user = getLocalStorage("user");
  const id = user?.id;
  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserById(id);
      setData(response.data.content);
      setCart(response.data.content.cart);
    };
    fetchData();
  }, [id]);
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
          <div className={styles.cart}>
            <div className="mx-4">
              {cart &&
                cart.map((item, index) => (
                  <div className="max-h-[400px] overflow-y-auto">
                    <div className="flex mt-4 border-b-[1px] border-gray-400 border-solid mb-2 justify-between">
                      <img
                        className="w-16 object-cover mx-4 h-[70px]"
                        src={item.productId.image[0]}
                      />
                      <div className="">
                        <p className="text-orange-500 font-medium hover:text-white cursor-pointer uppercase">
                          {item.productId.name}
                        </p>
                        <p className="text-gray-300 font-medium mb-1">
                          {item.productId.price} * {item.quantity}
                        </p>
                      </div>
                      <IoIosCloseCircleOutline className={styles.icon_close} />
                    </div>
                  </div>
                ))}
              <div className="text-center mx-auto border-b-[1px] border-t-[1px] border-gray-400">
                <p className="font-bold text-gray-500 my-2">
                  <span className="">Subtotal: </span>
                  <span className="">{data.totalPrice},000₫</span>
                </p>
              </div>

              <div className="mt-2 pb-8">
                <a href="/cart">
                  <Button className="bg-gray-400 text-white font-bold block w-full hover:opacity-80 my-1">
                    VIEW CART
                  </Button>
                </a>
                <a href="/checkout">
                  <Button className="bg-orange-500 text-white font-bold block w-full hover:opacity-80 my-1">
                    CHECK OUT
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="absolute">
        <div className={styles.quantity}>{cart.length}</div>
      </div>
    </div>
  );
}

export default Cart;
