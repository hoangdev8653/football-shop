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
                        <div className="flex items-center">Price</div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">Status</div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">Action</div>
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
                              src={item?.productId.image[0]}
                              alt={item?.productId.slug}
                            />
                          </td>
                          <td className="px-6 py-4 font-normal  whitespace-nowrap ">
                            {item?.productId.name}
                          </td>
                          <td className="px-6 py-4">
                            {item?.productId.price}$
                          </td>
                          <td className="px-6 py-4">in Stock</td>
                          <td className="px-6 py-4">
                            <a href={`/product/${item?.productId.slug}`}>
                              <button className="bg-black text-white px-2 py-2 rounded font-medium hover:opacity-50">
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
