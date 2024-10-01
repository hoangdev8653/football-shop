import React, { useRef, useState } from "react";
import Button from "../../components/button";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { updateUserValidate } from "../../validations/auth";
import { getLocalStorage } from "../../utils/LocalStorage";
import avarta_deafaute from "../../assets/user_deafaute.jpg";
import { userStore } from "../../store/userStore";
import Loadding from "../../components/loadding/Loadding";

function InfoUser() {
  const { updateUser, isLoading } = userStore();
  const user = getLocalStorage("user");
  const fileInputRef = useRef(null);
  const avatarImageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(
    user?.image || avarta_deafaute
  );

  const formik = useFormik({
    initialValues: {
      username: user?.username,
      email: user?.email,
      phone: user?.phone,
      image: user?.image,
    },
    validationSchema: updateUserValidate,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("username", values.username);
        formData.append("phone", values.phone);
        if (values.image) {
          formData.append("image", values.image);
        }
        await updateUser(formData);
        setTimeout(() => {
          toast.success("Cập nhật thành công");
        }, 2000);
        setCurrentImage(URL.createObjectURL(values.image)); // Update currentImage state
      } catch (error) {
        console.log(error.message);
        toast.error("Cập Nhật Thất bại");
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("image", file);
      const fileUrl = URL.createObjectURL(file);
      avatarImageRef.current.src = fileUrl;
      setCurrentImage(fileUrl); // Update currentImage state
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="py-1">
      {isLoading ? (
        <>
          <Loadding />
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[40rem] mx-auto"
          >
            <div className="mx-4">
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
                    alt="avatar"
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

              <div className="border-b border-gray-900/10 pb-4 mt-0">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                      User name:
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {formik.touched.username && formik.errors.username && (
                      <div
                        style={{
                          color: "red",
                          marginBottom: "8px",
                          textAlign: "center",
                        }}
                      >
                        {formik.errors.username}
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      for="phone"
                      className="text-left block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone:
                    </label>
                    <div className="mt-2">
                      <input
                        type="phone"
                        name="phone"
                        id="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone && (
                      <div
                        style={{
                          color: "red",
                          marginBottom: "8px",
                          textAlign: "center",
                        }}
                      >
                        {formik.errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      for="email"
                      className="text-left  block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address:
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className=" block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <div
                        style={{
                          color: "red",
                          marginBottom: "8px",
                          textAlign: "center",
                        }}
                      >
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <a href="/changePassword">
                      <Button className="text-black bg-blue-600 mt-4 rounded">
                        Change Password
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-full mt-2">
                <label
                  for="about"
                  className="text-left block text-sm font-medium leading-6 text-gray-900"
                >
                  About:
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    className=" block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-4 mx-4">
              <a href="/">
                <Button
                  type="button"
                  className="text-sm font-semibold leading-6 rounded-md text-white bg-red-500 hover:opacity-80"
                >
                  Cancel
                </Button>
              </a>
              <Button
                type="submit"
                className="rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </Button>
            </div>
          </form>
        </>
      ) : (
        <form onSubmit={formik.handleSubmit} className="max-w-[40rem] mx-auto">
          <div className="mx-4">
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
                  src={user?.image}
                  alt="avatar"
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

            <div className="border-b border-gray-900/10 pb-4 mt-0">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                    User name:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {formik.touched.username && formik.errors.username && (
                    <div
                      style={{
                        color: "red",
                        marginBottom: "8px",
                        textAlign: "center",
                      }}
                    >
                      {formik.errors.username}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    for="phone"
                    className="text-left block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone:
                  </label>
                  <div className="mt-2">
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone && (
                    <div
                      style={{
                        color: "red",
                        marginBottom: "8px",
                        textAlign: "center",
                      }}
                    >
                      {formik.errors.phone}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    for="email"
                    className="text-left  block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className=" block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <div
                      style={{
                        color: "red",
                        marginBottom: "8px",
                        textAlign: "center",
                      }}
                    >
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="sm:col-span-3">
                  <a href="/changePassword">
                    <Button className="text-black bg-blue-600 mt-4 rounded">
                      Change Password
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-full mt-2">
              <label
                for="about"
                className="text-left block text-sm font-medium leading-6 text-gray-900"
              >
                About:
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  className=" block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-4 mx-4">
            <a href="/">
              <Button
                type="button"
                className="text-sm font-semibold leading-6 rounded-md text-white bg-red-500 hover:opacity-80"
              >
                Cancel
              </Button>
            </a>
            <Button
              type="submit"
              className="rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default InfoUser;
