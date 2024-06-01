import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { productStore } from "../store/productStore";
import { toast } from "react-toastify";

function WhishList() {
  const { getProductWhishList, deleteProductWhishList, data } = productStore();
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
    toast.success("Xóa thành công");
  };
  return (
    <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
      <div className="mx-auto w-[70%] bg-white h-[80%] flex shadow-md">
        <div className="text-center items-center mx-8 my-8 w-full">
          <div className="font-semibold text-xl my-4">My WhishList</div>
          {data?.length > 0 ? (
            <>
              <div className="relative overflow-x-auto  sm:rounded-lg my-2">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700   ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Close</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Image</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Price
                          <a href="#">
                            <svg
                              className="w-3 h-3 ms-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill=""
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Status
                          <a href="#">
                            <svg
                              className="w-3 h-3 ms-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Action
                          <a href="#">
                            <svg
                              className="w-3 h-3 ms-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {data?.length > 0 &&
                    data.map((item, index) => (
                      <tbody key={index}>
                        <tr className="bg-white border-b  dark:border-gray-700 text-lg">
                          <td className="text-black">
                            <IoMdClose
                              onClick={() => handleDelete(item._id)}
                              className="cursor-pointer text-2xl hover:opacity-40 "
                            />
                          </td>
                          <td>
                            <img
                              className="w-[80px] h-[80px] object-cover"
                              src={item.productId.image[0]}
                              alt={item.productId.slug}
                            />
                          </td>
                          <td className="px-6 py-4 font-normal  whitespace-nowrap ">
                            {item.productId.name}
                          </td>
                          <td className="px-6 py-4">{item.productId.price}$</td>
                          <td className="px-6 py-4">in Stock</td>
                          <td className="px-6 py-4">
                            <button className="bg-black text-white px-2 py-2 rounded font-medium">
                              ADD TO CART
                            </button>
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
