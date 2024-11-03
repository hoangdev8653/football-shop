import React, { useEffect, useRef, useState } from "react";
import { bannerStore } from "../../store/bannerStore";
import Paginate from "../../components/paginate/Paginate";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import Modal from "../../components/modal";
import { bannerValidate } from "../../validations/banner";
import { useFormik } from "formik";
import Product_deafaut from "../../assets/default-image-product.png";

function BannerAdmin() {
  const [currentImage, setCurrentImage] = useState([Product_deafaut]);
  const fileInputRef = useRef(null);
  const [currentItems, setCurrentItems] = useState([]);
  const [openModal, SetOpenModal] = useState(false);
  const banner = bannerStore();
  const [id, setId] = useState("");
  const avatarImageRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      await banner.getAllBanner();
    };
    fetchData();
  }, []);

  const handlePageChange = (items) => {
    setCurrentItems(items);
  };

  const handleDelete = (id) => {
    banner.deleteBanner(id);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
    },
    validationSchema: bannerValidate,
    onSubmit: async (values) => {
      try {
        console.log(values);

        const formData = new FormData();
        formData.append("title", values.title);
        if (values.image) {
          setCurrentImage(URL.createObjectURL(values.image));
        }
        console.log(formData);

        const error = await banner.updateBanner(id, formData);

        // if (!error) {
        //   setTimeout(() => {
        //     window.location.reload();
        //   }, 3000);
        // } else {
        //   SetOpenModal(false);
        // }
        setCurrentImage(URL.createObjectURL(values.image));
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleOpenModal = (item) => {
    SetOpenModal(!openModal);

    if (item) {
      // console.log(item);

      formik.setValues({
        title: item?.title || "",
        image: "", // Thêm hình ảnh nếu có
      });
      setId(item._id);
    }
  };

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
    <div className="w-full h-full">
      <div className="mt-8 ml-8 text-2xl font-medium">Banner</div>
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
                Title
              </th>

              <th scope="col" className="px-4 py-3 text-center">
                image
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
                  <td className="px-2 py-2 uppercase text-center ">
                    {item?.title}
                  </td>

                  <td className="px-4 py-2 text-center ">
                    <img
                      className="w-[238px] mx-auto"
                      src={item?.image}
                      alt={item?._id}
                    />
                  </td>
                  <td className="px-2 py-2 flex gap-1 my-20 text-center ">
                    <span className="font-medium  hover:underline hover:opacity-60 cursor-pointer">
                      <FiPlus className="text-2xl" />
                    </span>
                    <span
                      onClick={() => handleOpenModal(item)}
                      className="font-medium  hover:underline hover:opacity-60 cursor-pointer"
                    >
                      <MdOutlineModeEditOutline className="text-2xl" />
                    </span>
                    <span
                      onClick={() => handleDelete(item._id)}
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
                <div className="rounded w-[50%] px-4 py-4 relative top-[-100px] bg-white">
                  <div className="w-[500px] bg-white rounded-xl overflow-hidden px-[30px] mx-auto">
                    <div className="flex justify-center mt-12 px-8">
                      <form
                        onSubmit={formik.handleSubmit}
                        className="max-w-2xl"
                      >
                        <div className="flex flex-wrap p-3 ">
                          <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2 mx-auto">
                            Update Banner
                          </h2>

                          <div className="grid grid-cols-2 gap-6 w-full border-gray-400">
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
                                    alt="banners"
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
          </Modal>
        )}
        <Paginate
          data={banner.data}
          itemsPerPage={4}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default BannerAdmin;
