import React, { useRef, useState } from "react";
import Product_deafaut from "../../assets/default-image-product.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { bannerValidate } from "../../validations/banner";
import { bannerStore } from "../../store/bannerStore";

function AddNewBanner() {
  const [currentImage, setCurrentImage] = useState([Product_deafaut]);
  const fileInputRef = useRef(null);
  const Navigate = useNavigate();
  const avatarImageRef = useRef(null);
  const banner = bannerStore();

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
    },
    validationSchema: bannerValidate,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("title", values.title);

        if (values.image) {
          formData.append("image", values.image);
        }
        const error = await banner.createBanner(formData);
        if (!error) {
          setTimeout(() => {
            Navigate("/dashboard/banner");
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
                      Add Banner
                    </h2>
                    <div className="grid grid-cols-2 gap-4 w-full border-gray-400">
                      {/* Tên sản phẩm */}
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-600 dark:text-gray-400">
                          Tên Banner
                        </label>
                        <input
                          className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                          type="text"
                          id="title"
                          name="title"
                          value={formik.values.title}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title && (
                          <div className="text-red-500 text-center">
                            {formik.errors.title}
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

export default AddNewBanner;
