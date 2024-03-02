import React from "react";
import styles from "./checkout.module.scss";
import Logo from "../../assets/logo.png";
import { IoMdLock } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
import Button from "../../components/button";
import Footer from "../../templates/footer";

function checkout() {
  return (
    <div className={styles.checkout}>
      <div className="max-w-[1050px] mx-auto">
        <a className=" block mt-10" href="/">
          <img
            className={styles.logo}
            src={Logo}
            alt="logo"
            title="Hệ Thống Bán Lẻ Đồ Thể Thao Sporter.vn - Chuyên cung cấp Quần áo bóng đá, thảm tập yoga, quần áo tập GYM – Yoga chất lượng cao"
          />
        </a>
        <div className={styles.nav_items}>
          <a className="hover:opacity-100 hover:text-black" href="/cart">
            <span className="flex ">
              <IoMdLock className="text-2xl mt-[2px]" /> SHOPPING CART
            </span>
          </a>
          <span>
            <MdOutlineNavigateNext className="text-3xl" />
          </span>
          <a href="/checkout">
            <span className="text-black opacity-100">CHECKOUT DETAILS</span>
          </a>
          <span>
            <MdOutlineNavigateNext className="text-3xl" />
          </span>
          <span>ORDER COMPLETE</span>
        </div>
        <div className={styles.login}>
          <span>Returning customer?</span>
          <a href="/">
            <span className="text-orange-500 hover:opacity-60">
              Click here to login
            </span>
          </a>
        </div>
        <div className={styles.discount}>
          <span>Have a coupon?</span>
          <a href="/">
            <span className="text-orange-500 hover:opacity-60">
              Click here to enter your code
            </span>
          </a>
        </div>
        <div className={styles.content}>
          <div className={styles.info_user}>
            <p className="mt-4 mb-2 text-orange-500">BILLING DETAILS</p>
            <form className="w-full">
              <div className="my-2">
                <label>First name *</label>
                <input
                  className="w-full border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-2 placeholder:font-normal"
                  placeholder="Please your type first name"
                />
              </div>
              <div className="my-2">
                <label>Last name *</label>
                <input
                  className="w-full border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-2 placeholder:font-normal"
                  placeholder="Please your type last name"
                />
              </div>
              <div className="my-2">
                <label>Company name (optional)</label>
                <input className="w-full border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-2 placeholder:font-normal" />
              </div>
              <div className="my-2">
                <label>Street address *</label>
                <input
                  className="w-1/2 block border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-2 placeholder:font-normal"
                  placeholder="House number and street name"
                />
              </div>
              <div className="my-2">
                <label>Town / City *</label>
                <input className="w-full border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-2 placeholder:font-normal" />
                <label>Phone *</label>
                <input
                  type="phone"
                  className="w-full border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-2 placeholder:font-normal"
                />
              </div>
              <div className="my-2">
                <label>Email *</label>
                <input
                  type="email"
                  className="w-full border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-2 placeholder:font-normal"
                />
              </div>
              <p className="my-2 text-orange-500 font-bold ">
                ADDITIONAL INFORMATION
              </p>
              <p className="my-2">Order notes (optional)</p>
              <textarea
                className="w-full placeholder:font-normal px-2 py-2 font-normal border-solid border-2 border-gray-400 h-[100px]"
                role="2"
                cols="5"
                placeholder="Notes about your order, e.g. special notes for delivery"
              ></textarea>
            </form>
          </div>
          <div className={styles.info_payment}>
            <div className={styles.is_well}>
              <div className="my-2">
                <p className="font-bold text-orange-500">YOUR ORDER</p>

                <div className="font-medium justify-between flex border-b-[1px] border-solid border-gray-300 my-2">
                  <p className="my-1">PRODUCT</p>
                  <p className="my-1">CART</p>
                </div>
                <div className="justify-between font-medium flex border-b-[1px] border-solid border-gray-300">
                  <p className="my-1 font-normal opacity-60">
                    Áo bóng đá Liverpool sân khách 23/24 hàng Thái Lan{" "}
                    <span className="text-black opacity-100 font-bold">
                      {" "}
                      × 1{" "}
                    </span>
                  </p>
                  <p className="my-1 pl-4">280,000₫</p>
                </div>
                <div className="font-medium justify-between flex border-b-[1px] border-solid border-gray-300 my-1">
                  <p className="my-1 font-medium">Subtotal</p>
                  <p className="my-1">280,000₫</p>
                </div>
                <div className="font-medium justify-between flex border-b-[1px] border-solid border-gray-300 my-1">
                  <p className="my--1 font-medium">Total</p>
                  <p className="my-1">280,000₫</p>
                </div>
                <div className="border-b-[1px] border-solid border-gray-300">
                  <div className="flex ">
                    <input
                      type="radio"
                      name="payment_method"
                      defaultChecked
                      className="mx-2"
                    />
                    <label className="font-semibold mx-2 ">
                      Thanh toán trước bằng hình thức chuyển khoản
                    </label>
                  </div>
                  <p className=" my-[4px]">
                    Sau khi bạn đặt hàng thành công, Sporter sẽ liên hệ với bạn
                    để xác nhận đơn hàng và hướng dẫn chuyển khoản. Sau đó,
                    chung tôi sẽ tiến hành việc giao hàng trong thời gian sớm
                    nhất. Mọi chi tiết vui lòng liên hệ: {""}
                    <span className="text-orange-500 font-medium cursor-pointer hover:opacity-60">
                      0766 640 006{" "}
                    </span>
                  </p>
                </div>
                <div className="mt-2">
                  <div className="flex ">
                    <input
                      type="radio"
                      name="payment_method"
                      className="mx-2"
                    />
                    <label className="font-semibold mx-2 ">
                      COD: Thanh toán khi nhận hàng
                    </label>
                  </div>
                </div>
                <Button className="bg-orange-500 text-white font-medium hover:bg-orange-700 my-4">
                  PLACE ORDER
                </Button>
                <p className="my-4">
                  Sau khi hoàn tất đặt hàng. SPorter sẽ gọi điện để tư vấn size
                  và chốt đơn để tránh đơn hàng chọn nhầm Size. Hoặc khách hàng
                  nhắn Zalo (0936777554) cho SPorter nếu có nhu cầu đặt in cho
                  trang phục thi đấu nhé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default checkout;
