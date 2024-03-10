import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import Facebook from "../assets/fb_logo-512x512.png";
import Google from "../assets/google-search-3.png";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { loginValidate } from "../validations/auth";
import { AUTH_API } from "../apis/auth";
import { setLocalStorage } from "../utils/LocalStorage";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidate,
    onSubmit: async (values) => {
      try {
        const data = await AUTH_API.login(values);
        if (data.response?.status === 500) {
          toast.error("Mật khẩu không đúng");
        } else if (data?.status === 200) {
          const user = {
            id: data.data.content._id,
            email: data.data.content.email,
            avarta: data.data.content.image,
            phone: data.data.content.phone,
            username: data.data.content.username,
          };
          const token = data.data?.accessToken;
          const refreshToken = data.data?.refreshToken;
          console.log(data?.data);
          setLocalStorage("user", user);
          setLocalStorage("accessToken", token);
          setLocalStorage("refreshToken", refreshToken);
          toast.success("Đăng nhập thành công");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div
      style={{
        backgroundImage:
          "url(https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg)",
      }}
      className="max-w-[100%] h-screen flex flex-wrap justify-center items-center p-[15px] bg-no-repeat bg-center bg-cover"
    >
      <div className="w-[500px] bg-white rounded-xl overflow-hidden px-[20px] py-[30px]">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <span className="block text-[39px]   text-center pb-[12px]">
            Login
          </span>
          <div className="relative w-full border-b-2 border-solid  mb-[12px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Email:
            </span>
            <p className="flex">
              <IoPersonOutline className="text-2xl mt-[12px] mx-2" />
              <input
                className="w-full"
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </p>
          </div>
          {formik.touched.email && formik.errors.email && (
            <div
              style={{ color: "red", marginBottom: "8px", textAlign: "center" }}
            >
              {formik.errors.email}
            </div>
          )}
          <div className="relative w-full border-b-2 border-solid mb-[12px]">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Password:
            </span>
            <p className="flex">
              <CiLock className="text-2xl mt-[12px] mx-2" />
              <input
                className="w-full"
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </p>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div
              style={{ color: "red", marginBottom: "8px", textAlign: "center" }}
            >
              {formik.errors.password}
            </div>
          )}
          <p className="text-right hover:text-blue-600 cursor-pointer text-gray-600">
            Forgot Password?
          </p>
          <button
            type="submit"
            className="text-white font-medium bg-blue-800 w-full text-xl my-6 px-4 py-3 rounded-2xl hover:opacity-80"
          >
            LOGIN
          </button>
          <p className="text-center mx-auto text-gray-500">Or Sign Up Using </p>
          <div className="flex text-center items-center justify-center gap-6 my-2">
            <img
              className="w-[40px] h-[40px] rounded-3xl hover:opacity-60 cursor-pointer"
              src={Facebook}
              alt="facebook"
            />
            <img
              className="w-[40px] h-[40px] rounded-3xl hover:opacity-60 cursor-pointer"
              src={Google}
              alt="google"
            />
          </div>
          <a
            href="/register"
            className="text-gray-500 hover:text-blue-600 text-base cursor-pointer "
          >
            <p className="text-center mt-4">Sign Up</p>
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
