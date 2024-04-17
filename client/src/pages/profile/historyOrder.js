import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { getLocalStorage } from "../../utils/LocalStorage";
import { getHistoryOrder } from "../../apis/auth";
import formatDate from "../../utils/formatDate";

function HistoryOrder() {
  const token = getLocalStorage("accessToken");
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
  }, [token]);

  return (
    <div className="py-4 w-full max-h-[600px] overflow-y-auto">
      {data && data.length > 0 ? (
        <>
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
