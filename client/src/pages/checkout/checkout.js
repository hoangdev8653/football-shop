import React, { useEffect, useState } from "react";
import styles from "./checkout.module.scss";
import Logo from "../../assets/logo.png";
import { IoMdLock } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
import Footer from "../../templates/footer";
import { useFormik } from "formik";
import { checkoutValidate } from "../../validations/checkout";
import { getUserCurrent } from "../../apis/auth";
import Payment from "./payment/payment";
import { formatPrice } from "../../utils/forrmatPriceVn";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [isDiscount, setIsDiscount] = useState();
  const [disabledDiscount, setDisabledDiscount] = useState(true);
  const [valueDiscount, setValueDiscount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserCurrent();
        setData(response.data.content);
        setCart(response.data.content.cart);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  const formik = useFormik({
    initialValues: {
      username: "",
      street: "",
      phonenumber: "",
      email: "",
      notes: "",
    },
    onSubmit: (values) => {
      // console.log(values);
    },
    validationSchema: checkoutValidate,
  });

  const handleDiscount = (price) => {
    setIsDiscount((price * 85) / 100);
  };

  const handleValueCode = (e) => {
    setValueDiscount(e.target.value);
  };
  useEffect(() => {
    setDisabledDiscount(valueDiscount.length < 6);
    if (valueDiscount.length < 6) {
      setIsDiscount(null);
    }
  }, [valueDiscount]);

  return (
    <div
      // className={styles.checkout}
      className="w-full bg-white"
    >
      <div className="max-w-[1050px] mx-auto p-2">
        <a className=" block mt-10" href="/">
          <img
            // className={styles.logo}
            className="tablet:w-[300px] w-[300px] tablet:text-left text-center mx-auto"
            src={Logo}
            alt="logo"
            title="Hệ Thống Bán Lẻ Đồ Thể Thao Sporter.vn - Chuyên cung cấp Quần áo bóng đá, thảm tập yoga, quần áo tập GYM – Yoga chất lượng cao"
          />
        </a>
        <div
          // className={styles.nav_items}
          style={{ color: "rgb(153 163 175 / var(1)" }}
          className="flex tablet:opacity-60 tablet:my-4 tablet:text-xl text-sm"
        >
          <a className="hover:opacity-100 hover:text-black" href="/cart">
            <p className="flex ">
              <IoMdLock className="text-2xl mt-[2px]" />
              <span className="">SHOPPING CART</span>
            </p>
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
          <a href="/checkout/coupon">
            <span className="text-orange-500 hover:opacity-60">
              Click here to enter your code
            </span>
          </a>
        </div>
        <form onSubmit={formik.handleSubmit} className={styles.content}>
          <div className={styles.info_user}>
            <p className="mt-4 mb-2 text-orange-500">BILLING DETAILS</p>
            <div className="w-full">
              <div className="">
                <label>User name *</label>
                <input
                  className="w-full border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-1 placeholder:font-normal"
                  placeholder="Please your type user name"
                  type="text"
                  name="username"
                  id="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.username && formik.errors.username && (
                <div className="text-red-500 text-center font-medium">
                  {formik.errors.username}
                </div>
              )}

              <div className="">
                <label>Street address *</label>
                <input
                  className="w-full block border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-1 placeholder:font-normal"
                  placeholder="House number and street name"
                  type="text"
                  name="street"
                  id="street"
                  value={formik.values.street}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.street && formik.errors.street && (
                <div className="text-red-500 text-center font-medium">
                  {formik.errors.street}
                </div>
              )}
              <div className="">
                <label>Phone *</label>
                <input
                  className="w-full border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-1 placeholder:font-normal"
                  type="phone"
                  value={formik.values.phonenumber}
                  name="phonenumber"
                  id="phonenumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phonenumber && formik.errors.phonenumber && (
                  <div className="text-red-500 text-center font-medium">
                    {formik.errors.phonenumber}
                  </div>
                )}
              </div>
              <div className="">
                <label>Email *</label>
                <input
                  className="w-full border-[2px] border-solid font-normal border-gray-300 py-1 px-3 my-1 placeholder:font-normal"
                  name="email"
                  id="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-center font-medium">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <p className="my-2 text-orange-500 font-bold ">
                ADDITIONAL INFORMATION
              </p>
              <p className="my-2">Order notes (optional)</p>
              <textarea
                type="text"
                value={formik.values.notes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="notes"
                id="notes"
                className="w-full placeholder:font-normal px-2 py-2 font-normal border-solid border-2 border-gray-400 h-[100px]"
                cols="5"
                placeholder="Notes about your order, e.g. special notes for delivery"
              ></textarea>
            </div>
          </div>
          <div className={styles.info_payment}>
            <div className={styles.is_well}>
              <div className="my-2">
                <p className="font-bold text-orange-500">YOUR ORDER</p>

                <div className="font-medium justify-between flex border-b-[1px] border-solid border-gray-300 my-2">
                  <p className="my-1">PRODUCT</p>
                  <p className="my-1">CART</p>
                </div>
                {cart &&
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="justify-between font-medium flex border-b-[1px] border-solid border-gray-300"
                    >
                      <p className="my-1 opacity-60 uppercase  font-bold">
                        {item.productId.name}
                        <span className="text-black opacity-100 font-bold">
                          × {item.quantity}
                        </span>
                      </p>
                      <p className="my-1 pl-4">
                        {formatPrice(
                          parseInt(item.productId.price) * item.quantity
                        )}
                      </p>
                    </div>
                  ))}

                <div className="font-medium justify-between flex border-b-[1px] border-solid border-gray-300 my-1">
                  <p className="my-1 font-medium">Subtotal</p>
                  <p className="my-1">{formatPrice(Number(data.totalPrice))}</p>
                </div>
                <div className="font-medium justify-between flex border-b-[1px] border-solid border-gray-300 my-1 ">
                  <input
                    onChange={(e) => handleValueCode(e)}
                    className="my-1 p-1 border border-gray-600 "
                    type="text"
                    placeholder="Enter Discount code"
                  />
                  <button
                    disabled={disabledDiscount}
                    onClick={() => handleDiscount(data.totalPrice)}
                    className={`rounded px-4 border-gray-600  text-white ${
                      disabledDiscount ? "bg-slate-500" : "bg-slate-800"
                    }`}
                  >
                    Apply
                  </button>
                </div>
                <div className="font-medium justify-between mb-8 flex border-b-[1px] border-solid border-gray-300 my-1">
                  <p className="my--1 font-medium">Total</p>
                  {isDiscount ? (
                    <>
                      <p className="my-1">{formatPrice(Number(isDiscount))}</p>
                    </>
                  ) : (
                    <p className="my-1">
                      {formatPrice(Number(data.totalPrice))}
                    </p>
                  )}
                </div>
                <Payment
                  address={formik.values.street}
                  totalPrice={isDiscount ? isDiscount : data.totalPrice}
                />
                <p className="my-4">
                  Sau khi hoàn tất đặt hàng. H7sport sẽ gọi điện để tư vấn size
                  và chốt đơn để tránh đơn hàng chọn nhầm Size. Hoặc khách hàng
                  nhắn Zalo (0766640006) cho H7sport nếu có nhu cầu đặt in cho
                  trang phục thi đấu nhé.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
