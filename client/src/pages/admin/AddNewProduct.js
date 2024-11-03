import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { categoryStore } from "../../store/categoryStore";
import { productStore } from "../../store/productStore";
import { updateProuctValidate } from "../../validations/product";
import { useNavigate } from "react-router-dom";
import Product_deafaut from "../../assets/default-image-product.png";

function AddNewProduct() {
  const [currentImage, setCurrentImage] = useState([Product_deafaut]);
  const fileInputRef = useRef(null);
  const category = categoryStore();
  const product = productStore();
  const Navigate = useNavigate();
  const avatarImageRef = useRef(null);

  useEffect(() => {
    category.getAllCategory();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      stockQuality: "",
      categoryId: "",
      slug: "",
      image: "",
    },
    validationSchema: updateProuctValidate,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("stockQuality", values.stockQuality);
        formData.append("categoryId", values.categoryId);
        formData.append("slug", values.slug);
        if (values.image) {
          formData.append("image", values.image);
        }
        const error = await product.createProduct(formData);
        if (!error) {
          setTimeout(() => {
            Navigate("/dashboard/product");
          }, 3000);
        }

        setCurrentImage(URL.createObjectURL(values.image));
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("image", file);
      const fileUrl = URL.createObjectURL(file);
      avatarImageRef.current.src = fileUrl;
      setCurrentImage(fileUrl);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <div className="relative items-center mx-auto">
        <div className="fixed z-50 inset-0 flex items-center justify-center ">
          <div className="rounded w-[70%] px-4 py-4 relative  bg-white">
            <div className="max-w-full bg-white rounded-xl overflow-hidden  mx-auto">
              <div className="justify-center mt-12 px-8 ">
                <form
                  onSubmit={formik.handleSubmit}
                  className="max-w-2xl mx-auto "
                >
                  <div className="flex flex-wrap p-3">
                    <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-8 mx-auto">
                      Add Product
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

                      {/* Hình Ảnh */}
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-600 dark:text-gray-400">
                          Hình Ảnh
                        </label>
                        <div className=" pb-́4 mb-2">
                          <div className="mt-2 flex items-center justify-center gap-x-3">
                            <input
                              type="file"
                              name="image"
                              accept="image/*"
                              onChange={handleFileChange}
                              ref={fileInputRef}
                              style={{ display: "none" }}
                            />
                            <img
                              ref={avatarImageRef}
                              className="w-16 h-16 object-cover rounded-full"
                              src={currentImage}
                              alt="product"
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
                      </div>

                      {/* Giá sản phẩm */}
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-600 dark:text-gray-400">
                          Giá sản phẩm
                        </label>
                        <input
                          className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                          type="number"
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

                      {/* Hàng Tồn Kho */}
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-600 dark:text-gray-400">
                          Hàng Tồn Kho
                        </label>
                        <input
                          className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                          type="number"
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

                      {/* Loại Sản Phẩm */}
                      <div className="flex flex-col gap-2">
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
                      </div>
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

                      <div className="col-span-2 flex justify-end gap-2 mt-4">
                        <button
                          className="py-1.5 px-3 text-center bg-red-500 border rounded-md text-white hover:bg-red-400 dark:text-gray-200"
                          type="button"
                        >
                          Cancel
                        </button>
                        <button
                          className="py-1.5 px-3 text-center bg-violet-700 border rounded-md text-white hover:bg-violet-500 dark:text-gray-200"
                          type="submit"
                        >
                          Submit
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
    </div>
  );
}

export default AddNewProduct;
