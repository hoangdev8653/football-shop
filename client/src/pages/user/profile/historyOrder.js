import React, { useEffect, useState } from "react";
import Button from "../../../components/button";
import { getLocalStorage } from "../../../utils/LocalStorage";
import formatDate from "../../../utils/formatDate";
import { userStore } from "../../../store/userStore";
import { formatPrice } from "../../../utils/forrmatPriceVn";
import Invoice from "../pdf/Invoice";

function HistoryOrder() {
  const token = getLocalStorage("accessToken");
  const { user, getHistoryOrder } = userStore();
  const [showMore, setShowMore] = useState(false);
  const [oneItem, setOneItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getHistoryOrder(token);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const sortDay = user?.sort(
    (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
  );
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const displayOrders = showMore ? sortDay : sortDay?.slice(0, 3);
  return (
    <div className="py-4 w-full max-h-[600px] overflow-y-auto">
      {user && user.length > 0 ? (
        <>
          <table className="table-auto w-full">
            <thead>
              <tr className="text-gray-600">
                <th className="text-center">Sản phẩm</th>
                <th className="text-center">Địa chỉ nhận hàng</th>
                <th className="text-center">Tổng tiền</th>
                <th className="text-center">Trạng thái </th>
                <th className="text-center">Hóa đơn </th>
              </tr>
            </thead>
            <tbody>
              {displayOrders.map((item, index) => (
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
                            {formatPrice(Number(item.productId.price))} *{" "}
                            {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </td>
                  <td className="text-center">{item.address}</td>
                  <td className="text-center">
                    {formatPrice(Number(item.totalAmount))}
                  </td>
                  <td className="text-center">
                    <p>{item.status}</p>
                    <p> {formatDate(item.orderDate)}</p>
                  </td>
                  <td
                    onClick={() => setOneItem(item)}
                    className="text-center cursor-pointer text-2xl"
                  >
                    <Invoice
                      item={
                        oneItem && oneItem._id === item._id ? oneItem : null
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-center">
            <button
              onClick={handleShowMore}
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              className="px-3 py-2 bg-slate-300 text-blue-400 rounded font-semibold mt-2 "
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>
        </>
      ) : (
        <div className="mx-auto ">
          <p className="text-orange-500 my-2">
            You have not placed an order yet
          </p>
          <a href="/">
            <Button className="bg-slate-100 my-2 text-white hover:text-gray-200 hover:bg-gray-300 font-medium">
              Return Home
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}

export default HistoryOrder;
