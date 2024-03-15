import React from "react";
import { updatePassword } from "../../apis/auth";
import { changePasswordValidate } from "../../validations/auth";
import { useFormik } from "formik";
import { getLocalStorage } from "../../utils/LocalStorage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

  const token = getLocalStorage("accessToken");
  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordValidate,
    onSubmit: async ({ password, newPassword }) => {
      try {
        const response = await updatePassword({ password, newPassword }, token);
        if (response.data.status === 200) {
          toast.success("Bạn Đã thay đổi mật khẩu thành công");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
        console.log(response);
      } catch (error) {
        toast.error("Thay đổi mật khẩu không thành công");
        console.log(error);
      }
    },
  });

  return (
    <section className="bg-gray-200">
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-screen"
      >
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          className="w-full p-6 bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md sm:p-8"
        >
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
            Change Password
          </h2>
          <form
            onSubmit={formik.handleSubmit}
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-500 ">
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="passwod"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5  "
                placeholder="your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div
                  style={{
                    color: "red",
                    marginBottom: "8px",
                    textAlign: "center",
                  }}
                >
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="New Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5  "
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.newPassword && formik.errors.newPassword && (
                <div
                  style={{
                    color: "red",
                    marginBottom: "8px",
                    textAlign: "center",
                  }}
                >
                  {formik.errors.newPassword}
                </div>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5  "
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div
                    style={{
                      color: "red",
                      marginBottom: "8px",
                      textAlign: "center",
                    }}
                  >
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="newsletter"
                  aria-describedby="newsletter"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  for="newsletter"
                  className="font-light flex gap-1 text-gray-600 "
                >
                  I accept the{" "}
                  <p className="font-medium text-primary-600 hover:underline text-blue-600">
                    Terms and Conditions
                  </p>
                </label>
              </div>
            </div>
            <div className="py-4">
              <button
                type="submit"
                className="w-full  text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:opacity-80"
              >
                Change passwod
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
