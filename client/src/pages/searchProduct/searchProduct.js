import React from "react";
import Discount from "../../components/discount";
import WishList from "../../components/wishList";
import styles from "./searchProduct.module.scss";
function searchProduct() {
  return (
    <div
      style={{ backgroundColor: "rgba(10, 10, 10, 0.01)" }}
      className="w-full "
    >
      <div className="max-w-[1050px] mx-auto">
        <div className="flex justify-between my-4">
          <div className="flex gap-2 text-gray-400 text-lg ">
            <a href="/">
              <p className="cursor-pointer hover:text-black">HOME</p>
            </a>
            <span className="">/</span>
            <a href="/">
              <p className="cursor-pointer hover:text-black">SHOP</p>
            </a>
            <span>/</span>

            <p className="text-black  font-semibold">SEARCH RESULTS FOR " "</p>
          </div>
          <div className="text-black flex gap-4">
            <p>Showing all 10 results</p>
            <form method="get">
              <select
                className="py-[5px] border-2 border-solid border-gray-400"
                name="orderby"
              >
                <option value="selected" selected="selected">
                  Relevance
                </option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </form>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.container}>
            <img
              src="https://www.sporter.vn/wp-content/uploads/2020/09/Ao-real-madrid-san-khach-mau-ba-0-300x400.jpg"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2020/09/Ao-real-madrid-san-khach-mau-ba-5-300x400.jpg"
                alt="2"
              />
            </div>
            <div className={styles.box_text_item}>
              <div>
                <p className="py-2 pl-16 pr-20 hover:opacity-65">
                  Áo bóng đá Real Madrid sân khách mẫu ba 23/24 hàng Thái Lan
                </p>
              </div>
              <div>
                <p className="mx-auto text-center">
                  <del className="text-gray-400 font-semibold">330,000đ</del>
                </p>
                <p className="mx-auto text-center">
                  <ins className="text-orange-500">
                    <strong>280,000đ</strong>
                  </ins>
                </p>
              </div>
            </div>
            <Discount pecentDiscount={15} />
            <WishList className=" absolute right-56 top-2" />
          </div>
          <div className={styles.container}>
            <img
              src="https://www.sporter.vn/wp-content/uploads/2020/09/Ao-real-madrid-san-khach-mau-ba-0-300x400.jpg"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2020/09/Ao-real-madrid-san-khach-mau-ba-5-300x400.jpg"
                alt="2"
              />
            </div>
            <div className="  text-orange-500 uppercase">
              <p className="py-2 pl-16 pr-20 hover:opacity-65">
                Áo bóng đá Real Madrid sân khách mẫu ba 23/24 hàng Thái Lan
              </p>
              <p className="mx-auto text-center">
                <del className="text-gray-400">330,000đ</del>
              </p>
              <p className="mx-auto text-center">
                <ins className="text-orange-500">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount pecentDiscount={15} />
            <WishList className=" absolute right-56 top-2" />
          </div>
          <div className={styles.container}>
            <img
              src="https://www.sporter.vn/wp-content/uploads/2020/09/Ao-real-madrid-san-khach-mau-ba-0-300x400.jpg"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2020/09/Ao-real-madrid-san-khach-mau-ba-5-300x400.jpg"
                alt="2"
              />
            </div>
            <div className="  text-orange-500 uppercase">
              <p className="py-2 pl-16 pr-20 hover:opacity-65">
                Áo bóng đá Real Madrid sân khách mẫu ba 23/24 hàng Thái Lan
              </p>
              <p className="mx-auto text-center">
                <del className="text-gray-400">330,000đ</del>
              </p>
              <p className="mx-auto text-center">
                <ins className="text-orange-500">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount pecentDiscount={15} />
            <WishList className=" absolute right-56 top-2" />
          </div>
          <div className={styles.container}>
            <img
              src="https://www.sporter.vn/wp-content/uploads/2020/09/Ao-real-madrid-san-khach-mau-ba-0-300x400.jpg"
              alt="1"
            />
            <div className={styles.overlay}>
              <img
                src="https://www.sporter.vn/wp-content/uploads/2020/09/Ao-real-madrid-san-khach-mau-ba-5-300x400.jpg"
                alt="2"
              />
            </div>
            <div className="  text-orange-500 uppercase">
              <p className="py-2 pl-16 pr-20 hover:opacity-65">
                Áo bóng đá Real Madrid sân khách mẫu ba 23/24 hàng Thái Lan
              </p>
              <p className="mx-auto text-center">
                <del className="text-gray-400">330,000đ</del>
              </p>
              <p className="mx-auto text-center">
                <ins className="text-orange-500">
                  <strong>280,000đ</strong>
                </ins>
              </p>
            </div>
            <Discount pecentDiscount={15} />
            <WishList className=" absolute right-56 top-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default searchProduct;
