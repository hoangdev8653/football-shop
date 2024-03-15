import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import Layout from "./templates/layout";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import ProductDeatails from "./pages/productDeatails/productDeatails";
import ProductClb from "./pages/productClb/productClb";
import ProductNation from "./pages/productNation/productNation";
import ProductNoLogo from "./pages/productNoLogo/productNoLogo";
import Blog from "./pages/blog/blog";
import SearchProduct from "./pages/searchProduct/searchProduct";
import Club from "./pages/club/club";

import Login from "./components/login";
import NotFound from "./pages/notFound";
import Profile from "./pages/profile/profile";
import ChangePassword from "./pages/profile/changePassword";
import Register from "./components/register";
import CheckOut from "./pages/checkout/checkout";
import OrderComplete from "./pages/orderComplete/orderComplete";

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
      <Route path={path.LOGIN} element={<Login />} />
      <Route path={path.PROFILE} element={<Profile />} />
      <Route path={path.CHANGE_PASSWORD} element={<ChangePassword />} />
      <Route path={path.REGISTER} element={<Register />} />
      <Route path={path.CHECKOUT} element={<CheckOut />} />
      <Route path={path.ORDER_COMPLETE} element={<OrderComplete />} />
      <Route path={path.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
