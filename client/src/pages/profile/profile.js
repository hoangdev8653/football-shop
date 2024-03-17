import React, { useEffect, useRef, useState } from "react";
import styles from "./profile.module.scss";
import { Tabs, Tab } from "./Tabs/Tabs";
import Button from "../../components/button";
import { getLocalStorage } from "../../utils/LocalStorage";
import avarta_deafaute from "../../assets/user_deafaute.jpg";
import { getHistoryOrder } from "../../apis/auth";
import formatDate from "../../utils/formatDate";

function Profile() {
  const user = getLocalStorage("user");
  const token = getLocalStorage("accessToken");
  const [userName, setUserName] = useState(user?.username);
  const [phone, setPhone] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);
  const fileInputRef = useRef(null);
  const avatarImageRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHistoryOrder(token);
        setData(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // console.log(data);
  const item = data?.map((item) => item.cart);
  const cart = item?.map((cart) => cart[0].productId);
  console.log(cart);

  // console.log(item.length);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Assuming you have a URL.createObjectURL function to create a URL for the selected file
      const fileUrl = URL.createObjectURL(file);

      // Update the avatar image source
      avatarImageRef.current.src = fileUrl;
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.profile}>
      <div className="max-w-[1050px] mx-auto my-8 ">
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          className="text-center w-[80%] mx-auto"
        >
          <div className="flex">
            <Tabs>
              <Tab label="Thông tin tài khoản">
                <div className="py-1">
                  <p className="text-gray-700">
                    <form className="max-w-[40rem] mx-auto">
                      <div className="">
                        <div className=" pb-́4 mb-2">
                          <div className="mt-2 flex items-center justify-center gap-x-3">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              ref={fileInputRef}
                              style={{ display: "none" }}
                            />

                            <img
                              ref={avatarImageRef}
                              className="w-16 h-16 object-cover rounded-full"
                              src={user?.avarta ? user.avarta : avarta_deafaute}
                              alt="avarta"
                            />

                            <button
                              type="button"
                              onClick={handleButtonClick}
                              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              Change
                            </button>
                          </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-4 mt-0">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Personal Information
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            Use a permanent address where you can receive mail.
                          </p>

                          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="name"
                                className="block text-left text-sm font-medium leading-6 text-gray-900"
                              >
                                User name:
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  value={userName}
                                  onChange={(e) => {
                                    setUserName(e.target.value);
                                  }}
                                  className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                for="phone"
                                className="text-left block text-sm font-medium leading-6 text-gray-900"
                              >
                                Phone:
                              </label>
                              <div className="mt-2">
                                <input
                                  type="phone"
                                  name="phone"
                                  id="phone"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                for="email"
                                className="text-left  block text-sm font-medium leading-6 text-gray-900"
                              >
                                Email address:
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autocomplete="email"
                                  value={email}
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                  className=" block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <a href="/changePassword">
                                <Button className="text-black bg-blue-600 mt-4 rounded">
                                  Change Password
                                </Button>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-full mt-2">
                          <label
                            for="about"
                            className="text-left block text-sm font-medium leading-6 text-gray-900"
                          >
                            About:
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="about"
                              name="about"
                              rows="3"
                              className=" block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-gray-600">
                            Write a few sentences about yourself.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <a href="/">
                          <Button
                            type="button"
                            className="text-sm font-semibold leading-6 rounded-md text-white bg-red-500 hover:opacity-80"
                          >
                            Cancel
                          </Button>
                        </a>
                        <Button
                          type="submit"
                          className="rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </Button>
                      </div>
                    </form>
                  </p>
                </div>
              </Tab>
              <Tab label="Lịch Sử đặt hàng">
                <div className="py-4 w-full">
                  <table className="table-auto w-full">
                    <thead>
                      <tr className="text-gray-600">
                        <th className="text-center">Sản phẩm</th>
                        <th className="text-center">Địa chỉ nhận hàng</th>
                        <th className="text-center">Tổng tiền</th>
                        <th className="text-center">Trạng thái </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((item, index) => (
                          <tr key={index}>
                            <td className=" items-center">
                              {item.cart.map((item, idx) => (
                                <div key={idx} className="flex items-center">
                                  <img
                                    className="h-[50px] w-[50px] object-cover my-1"
                                    src={item.productId.image[0]}
                                    alt={item.productId.name}
                                  />
                                  <div className="block">
                                    <p className="mx-[10px] font-semibold uppercase">
                                      {item.productId.name}
                                    </p>
                                    <p className="text-red-500 mx-2">
                                      {item.productId.price}$ * {item.quantity}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </td>
                            <td className="text-center">{item.address}</td>
                            <td className="text-center">{item.totalAmount}$</td>
                            <td className="text-center">
                              <p>{item.status}</p>
                              <p> {formatDate(item.orderDate)}</p>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
