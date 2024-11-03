import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import Layout from "./templates/user/layout";
import Home from "./pages/user/home/home";
import Cart from "./pages/user/cart/cart";
import ProductDeatails from "./pages/user/productDeatails/productDeatails";
import ProductClb from "./pages/user/productClb/productClb";
import ProductNation from "./pages/user/productNation/productNation";
import ProductNoLogo from "./pages/user/productNoLogo/productNoLogo";
import Blog from "./pages/user/blog/blog";
import SearchProduct from "./pages/user/searchProduct/searchProduct";
import Club from "./pages/user/club/club";

import Login from "./components/login";
import NotFound from "./pages/user/404";
import Profile from "./pages/user/profile/profile";
import ChangePassword from "./pages/user/profile/changePassword";
import Register from "./components/register";
import CheckOut from "./pages/user/checkout/checkout";
import OrderComplete from "./pages/user/orderComplete/orderComplete";
import ForgotPassword from "./pages/user/ForgotPassword";
import ResetPassword from "./pages/user/ResetPassword";
import WhishList from "./pages/user/whishList";

import LayoutAdmin from "./templates/admin/Layout";
import DashBoard from "./pages/admin/DashBoard";
import ProductAdmin from "./pages/admin/ProductAdmin";
import CategoryAdmin from "./pages/admin/CategoryAdmin";
import BlogAdmin from "./pages/admin/BlogAdmin";
import BannerAdmin from "./pages/admin/BannerAdmin";
import UserAdmin from "./pages/admin/UserAdmin";
import AddNewProduct from "./pages/admin/AddNewProduct";
import AddNewBanner from "./pages/admin/AddNewBanner";

function App() {
  return (
    <Routes>
      <Route path={path.PUBLIC_LAYOUT} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={path.AO_CLB} element={<ProductClb />} />
        <Route path={path.AO_DOI_TUYEN} element={<ProductNation />} />
        <Route path={path.PRODUCT_DEATAILS} element={<ProductDeatails />} />
        <Route path={path.AO_KHONG_LOGO} element={<ProductNoLogo />} />
        <Route path={path.SEARCH_PRODUCT} element={<SearchProduct />} />
        <Route path={path.CART} element={<Cart />} />
        <Route path={path.BLOG} element={<Blog />} />
        <Route path={path.CLB} element={<Club />} />
      </Route>

      <Route path={path.LAYOUTADMIN} element={<LayoutAdmin />}>
        <Route path={path.DASHBOARD} index element={<DashBoard />} />
        <Route path={path.PRODUCTADMIN} element={<ProductAdmin />} />
        <Route path={path.CATEGORYADMIN} element={<CategoryAdmin />} />
        <Route path={path.BLOGADMIN} element={<BlogAdmin />} />
        <Route path={path.BANNERADMIN} element={<BannerAdmin />} />
        <Route path={path.USERADMIN} element={<UserAdmin />} />
      </Route>
      <Route path={path.ADD_NEW_PRODUCT} element={<AddNewProduct />} />
      <Route path={path.ADD_NEW_BANNER} element={<AddNewBanner />} />

      <Route path={path.LOGIN} element={<Login />} />
      <Route path={path.PROFILE} element={<Profile />} />
      <Route path={path.CHANGE_PASSWORD} element={<ChangePassword />} />
      <Route path={path.REGISTER} element={<Register />} />
      <Route path={path.CHECKOUT} element={<CheckOut />} />
      <Route path={path.ORDER_COMPLETE} element={<OrderComplete />} />
      <Route path={path.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={path.WHISHLIST} element={<WhishList />} />
      <Route path={path.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
