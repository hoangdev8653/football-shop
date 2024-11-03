import React, { useEffect, useState } from "react";
import Paginate from "../../components/paginate/Paginate";
import { productStore } from "../../store/productStore";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import Modal from "../../components/modal";
import { useFormik } from "formik";
import { formatPrice } from "../../utils/forrmatPriceVn";
import { updateProuctValidate } from "../../validations/product";
import { Link, useNavigate } from "react-router-dom";

function ProductAdmin() {
  const [currentItems, setCurrentItems] = useState([]);
  const { data, getAllProduct, updateProduct, deleteProduct } = productStore();
  const [openModal, SetOpenModal] = useState(false);
  const [id, setId] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await getAllProduct();
    };
    fetchData();
  }, []);

  const handlePageChange = (items) => {
    setCurrentItems(items);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      stockQuality: "",
      slug: "",
    },
    validationSchema: updateProuctValidate,
    onSubmit: async (values) => {
      try {
        console.log(values);

        const error = await updateProduct(id, values);
        if (!error) {
          setTimeout(() => {
            Navigate("/dashboard/product");
          }, 3000);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  const handleOpenModal = async (item) => {
    SetOpenModal(!openModal);
    // await category.getAllCategory();
    if (item) {
      // console.log(item);

      formik.setValues({
        name: item?.name || "",
        description: item?.description || "",
        price: item?.price || "",
        slug: item?.slug || "",
        stockQuality: item?.stockQuality || "",
      });
      setId(item._id);
    }
  };

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <div className="mt-8 ml-8 text-2xl font-medium">Product</div>
        <div className="mt-8 mr-8 text-2xl font-medium hover:opacity-60">
          <Link to="/dashboard/product/add-new">Add New</Link>
        </div>
      </div>
      <div className="relative overflow-x-auto sm:rounded-md my-2 mx-8">
        <table
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          }}
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-4 py-3 text-center">
                Tên Sản Phẩm
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Hình Ảnh
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Mô tả
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Giá
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Hàng tồn kho
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Loại Sản Phẩm
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems && currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index} className="bg-white border-b ">
                  <td className="px-4 py-2 uppercase text-center ">
                    {item?.name}
                  </td>
                  <td className="px-4 py-2 text-center ">
                    <img
                      className="w-[238px]"
                      src={item?.image[0]}
                      alt={item?.slug}
                    />
                  </td>
                  <td className="px-4 py-2 text-center ">
                    {item?.description}
                  </td>
                  <td className="px-4 py-2 text-center ">
                    {formatPrice(Number(item?.price))}
                  </td>
                  <td className="px-4 py-2 text-center ">
                    {item?.stockQuality}
                  </td>
                  <td className="px-4 py-2 text-center uppercase">
                    {item?.categoryId?.name}
                  </td>
                  <td className="px-4 py-2 flex gap-1 my-20 text-center ">
                    <span className="font-medium  hover:underline hover:opacity-60 cursor-pointer"></span>
                    <span
                      onClick={() => handleOpenModal(item)}
                      className="font-medium  hover:underline hover:opacity-60 cursor-pointer"
                    >
                      <MdOutlineModeEditOutline className="text-2xl" />
                    </span>
                    <span
                      onClick={() => handleDeleteProduct(item._id)}
                      className="hover:opacity-70 cursor-pointer"
                    >
                      <MdDeleteForever className="text-2xl " />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-4 text-center">
                  No movies available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {openModal && (
          <Modal onClose={handleOpenModal}>
            <div className="relative items-center mx-auto">
              <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="rounded w-[70%] px-4 py-4 relative  bg-white">
                  <div className="max-w-full bg-white rounded-xl overflow-hidden  mx-auto">
                    <div className="justify-center mt-12 px-8 ">
                      <form
                        onSubmit={formik.handleSubmit}
                        className="max-w-2xl mx-auto "
                      >
                        <div className="flex flex-wrap p-3">
                          <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2 mx-auto">
                            Product settings:
                          </h2>
                          <div className="grid grid-cols-2 gap-4 w-full border-gray-400">
                            {/* Tên sản phẩm */}
                            <div className="flex flex-col gap-2">
                              <label className="text-gray-600 dark:text-gray-400">
                                Tên sản phẩm
                              </label>
                              <input
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                type="text"
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.name && formik.errors.name && (
                                <div className="text-red-500 text-center">
                                  {formik.errors.name}
                                </div>
                              )}
                            </div>

                            <div className="flex flex-col gap-2">
                              <label className="text-gray-600 dark:text-gray-400">
                                Giá sản phẩm
                              </label>
                              <input
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                type="text"
                                id="price"
                                name="price"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.price && formik.errors.price && (
                                <div className="text-red-500 text-center">
                                  {formik.errors.price}
                                </div>
                              )}
                            </div>

                            <div className="flex flex-col gap-2">
                              <label className="text-gray-600 dark:text-gray-400">
                                Hàng Tồn Kho
                              </label>
                              <input
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                type="text"
                                id="stockQuality"
                                name="stockQuality"
                                value={formik.values.stockQuality}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.stockQuality &&
                                formik.errors.stockQuality && (
                                  <div className="text-red-500 text-center">
                                    {formik.errors.stockQuality}
                                  </div>
                                )}
                            </div>

                            {/* Loại Sản Phẩm */}
                            {/* <div className="flex flex-col gap-2">
                              <label className="text-gray-600 dark:text-gray-400">
                                Loại Sản Phẩm
                              </label>
                              <select
                                name="categoryId"
                                value={formik.values.categoryId}
                                onChange={formik.handleChange}
                                className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                              >
                                {category?.data.length > 0 &&
                                  category?.data.map((item, index) => (
                                    <option key={index} value={item._id}>
                                      {item.name}
                                    </option>
                                  ))}
                              </select>
                            </div> */}

                            <div className="flex flex-col gap-2">
                              <label className="text-gray-600 dark:text-gray-400">
                                Slug
                              </label>
                              <input
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                type="text"
                                id="slug"
                                name="slug"
                                value={formik.values.slug}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.slug && formik.errors.slug && (
                                <div className="text-red-500 text-center">
                                  {formik.errors.slug}
                                </div>
                              )}
                            </div>
                            {/* Mô Tả */}

                            <div className="col-span-2 flex flex-col gap-2">
                              <label className="text-gray-600 dark:text-gray-400">
                                Mô Tả
                              </label>
                              <textarea
                                rows="4"
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                id="description"
                                name="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.description &&
                                formik.errors.description && (
                                  <div className="text-red-500 text-center">
                                    {formik.errors.description}
                                  </div>
                                )}
                            </div>

                            <div className="col-span-2 flex justify-end gap-2 mt-4">
                              <button
                                onClick={handleOpenModal}
                                className="py-1.5 px-3 text-center bg-red-500 border rounded-md text-white hover:bg-red-400 dark:text-gray-200"
                                type="button"
                              >
                                Cancel
                              </button>
                              <button
                                className="py-1.5 px-3 text-center bg-violet-700 border rounded-md text-white hover:bg-violet-500 dark:text-gray-200"
                                type="submit"
                              >
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
        <Paginate
          data={data}
          itemsPerPage={5}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ProductAdmin;
