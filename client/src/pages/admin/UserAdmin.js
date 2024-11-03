import React, { useEffect, useState } from "react";
import { userStore } from "../../store/userStore";
import Paginate from "../../components/paginate/Paginate";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import avartaDeafaut from "../../assets/user_deafaute.jpg";
import Modal from "../../components/modal";
import { useFormik } from "formik";

import { updateUserByAdminValidate } from "../../validations/auth";

function UserAdmin() {
  const [currentUser, SetCurrentUser] = useState([]);
  const [openModal, SetOpenModal] = useState(false);
  const [id, setId] = useState("");
  const { user, getAllUser, updateUserByAdmin } = userStore();

  useEffect(() => {
    const fetchData = async () => {
      await getAllUser();
    };
    fetchData();
  }, []);
  const handlePageChange = (items) => {
    SetCurrentUser(items);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      phone: "",
      role: "user",
    },
    validationSchema: updateUserByAdminValidate,
    onSubmit: async (values) => {
      try {
        console.log(values);

        // const error = await updateUserByAdmin(id, values);
        // if (!error) {
        //   setTimeout(() => {
        //     window.location.reload();
        //   }, 3000);
        // } else {
        //   SetOpenModal(false);
        // }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleOpenModal = (item) => {
    SetOpenModal(!openModal);

    if (item) {
      formik.setValues({
        email: item?.email || "",
        username: item?.username || "",
        phone: item?.phone || "",
        role: item?.role || "user",
      });
      setId(item._id);
    }
  };

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  return (
    <div className="w-full h-full">
      <div className="mt-8 ml-8 text-2xl font-medium">User</div>
      <div className="relative overflow-x-auto sm:rounded-md my-2 mx-8">
        <table
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          }}
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-center">
                Email
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Username
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Image
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Phone
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Role
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUser && currentUser.length > 0 ? (
              currentUser.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-2 py-2 uppercase text-center">
                    {item?.email}
                  </td>
                  <td className="px-2 py-2 text-center uppercase">
                    {item?.username}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <img
                      className="w-16 h-16 rounded-full mx-auto object-cover "
                      src={item.image !== "" ? item.image : avartaDeafaut}
                      alt={item?._id}
                    />
                  </td>
                  <td className="px-2 py-2 text-center uppercase">
                    {item?.phone}
                  </td>
                  <td className="px-2 py-2 text-center uppercase">
                    {item?.role}
                  </td>
                  <td className="px-2 py-2 flex gap-1 my-20 text-center justify-center">
                    <span
                      onClick={() => handleOpenModal(item)}
                      className="font-medium hover:underline hover:opacity-60 cursor-pointer text-center"
                    >
                      <MdOutlineModeEditOutline className="text-2xl" />
                    </span>
                    <span className="hover:opacity-70 cursor-pointer text-center">
                      <MdDeleteForever className="text-2xl" />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-4 text-center">
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {openModal && (
          <Modal onClose={handleOpenModal}>
            <div className="relative items-center mx-auto">
              <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="rounded w-[50%] px-4 py-4 relative  bg-white">
                  <div className="w-[500px] bg-white rounded-xl overflow-hidden px-[30px] mx-auto">
                    <div className="flex justify-center mt-12 px-8">
                      <form
                        onSubmit={formik.handleSubmit}
                        className="max-w-2xl"
                      >
                        <div className="flex flex-wrap p-3 ">
                          <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2 mx-auto">
                            Account settings:
                          </h2>

                          <div className="flex flex-col gap-2 w-full border-gray-400">
                            <div>
                              <label className="text-gray-600 dark:text-gray-400">
                                User name
                              </label>
                              <input
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow  "
                                type="text"
                                id="username"
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.username &&
                                formik.errors.username && (
                                  <div className="text-red-500  text-center">
                                    {formik.errors.username}
                                  </div>
                                )}
                            </div>

                            <div>
                              <label className="text-gray-600 dark:text-gray-400">
                                Email
                              </label>
                              <input
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow  "
                                type="email"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.email && formik.errors.email && (
                                <div className="text-red-500  text-center">
                                  {formik.errors.email}
                                </div>
                              )}
                            </div>

                            <div>
                              <label className="text-gray-600 dark:text-gray-400">
                                Phone
                              </label>
                              <input
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow  "
                                type="text"
                                id="phone"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                            </div>
                            {formik.touched.phone && formik.errors.phone && (
                              <div className="text-red-500  text-center">
                                {formik.errors.phone}
                              </div>
                            )}
                            <div>
                              <label className="text-gray-600 dark:text-gray-400">
                                role
                              </label>
                              <div className=" relative w-64">
                                <select
                                  name="role" // Add name attribute
                                  value={formik.values.role} // Bind value to formik state
                                  onChange={formik.handleChange} // Capture changes
                                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                >
                                  <option>user</option>
                                  <option>admin</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-end gap-2">
                              <button
                                onClick={handleOpenModal}
                                className="py-1.5 px-3 m-1 text-center bg-red-500 border rounded-md text-white  hover:bg-red-400 hover:text-gray-100 dark:text-gray-200 "
                                type="button"
                              >
                                Cancel
                              </button>
                              <button
                                className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
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
          data={user}
          itemsPerPage={4}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default UserAdmin;
