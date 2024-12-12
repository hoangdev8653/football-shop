import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { whishListStore } from "../store/wishListStore";
import { formatPrice } from "../utils/forrmatPriceVn";

function WhishList() {
  const { getProductWhishList, deleteProductWhishList, data } =
    whishListStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProductWhishList();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProductWhishList(id);
  };
  return (
    <div
      style={{ backgroundColor: "#f9f9f9" }}
      className="w-full h-auto  items-center py-8"
    >
      <div className="mx-auto w-[70%] bg-white h-[80%] flex shadow-md ">
        <div className="text-center items-center mx-8 my-8 w-full">
          {data?.length > 0 ? (
            <>
              <div className="relative overflow-x-auto  sm:rounded-lg my-2">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700  text-center ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Close</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Image</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tên sản phẩm
                      </th>
                      <th scope="col" className="px-6 py-3 mx-auto">
                        <div className="flex justify-center">Giá Bán</div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex justify-center">Trạng Thái</div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex justify-center">Action</div>
                      </th>
                    </tr>
                  </thead>
                  {data?.length > 0 &&
                    data.map((item, index) => (
                      <tbody key={index}>
                        <tr className="bg-white border-b  dark:border-gray-700 text-lg">
                          <td className="text-black mx-auto">
                            <IoMdClose
                              onClick={() => handleDelete(item._id)}
                              className="cursor-pointer text-2xl hover:opacity-40 "
                            />
                          </td>
                          <td className="justify-center">
                            <img
                              className="w-[80px] h-[80px] object-cover "
                              src={item?.productId?.image[0]}
                              alt={item?.productId?.slug}
                            />
                          </td>
                          <td className="px-6 py-4 font-normal  whitespace-nowrap uppercase justify-center">
                            {item?.productId?.name}
                          </td>
                          <td className="px-6 py-4  text-center">
                            {formatPrice(Number(item?.productId?.price))}
                          </td>
                          <td className="px-6 py-4 text-center">in Stock</td>
                          <td className="px-6 py-4 text-center">
                            <a href={`/product/${item?.productId?.slug}`}>
                              <button className="bg-black text-white px-2 py-2 rounded font-medium hover:opacity-50 ">
                                ADD TO CART
                              </button>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </>
          ) : (
            <div className="text-center justify-center mx-auto">
              <span>Your Should add product By my Whishlist</span>
              <a
                href="/"
                className="uppercase text-white bg-gray-200 px-[10px] py-[6px] mx-2 font-semibold hover:bg-gray-300"
              >
                return to homme
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WhishList;
