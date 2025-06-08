import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import Layout from "./templates/layout";
import PrivateLayout from "./templates/privateRoute";
import Home from "./pages/Home";
import Cart from "./pages/cart/Cart";
import ProductDeatails from "./pages/productDeatail/ProductDeatail";
import ProductClb from "./pages/ProductClb";
import ProductNation from "./pages/ProductNation";
import ProductNoLogo from "./pages/ProductNoLogo";
import Blog from "./pages/Blog";
import SearchProduct from "./pages/SearchProduct";
import Club from "./pages/Club";
import WhishList from "./pages/WhishList";
import Sport from "./pages/Sport";

import Login from "./components/login";
import NotFound from "./pages/404";
import Profile from "./pages/profile/Profile";
import ChangePassword from "./pages/profile/ChangePassword";
import Register from "./components/register";
import CheckOut from "./pages/checkout/Checkout";
import OrderComplete from "./pages/OrderComplete";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path={path.PUBLIC_LAYOUT} element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path={path.AO_CLB} element={<ProductClb />} />
        <Route path={path.AO_DOI_TUYEN} element={<ProductNation />} />
        <Route path={path.PRODUCT_DEATAILS} element={<ProductDeatails />} />
        <Route path={path.AO_KHONG_LOGO} element={<ProductNoLogo />} />
        <Route path={path.SEARCH_PRODUCT} element={<SearchProduct />} />
        <Route path={path.BLOG} element={<Blog />} />
        <Route path={path.CLB} element={<Club />} />
        <Route path={path.SPORT} element={<Sport />} />

        {/* Private routes */}
        <Route
          path={path.CART}
          element={
            <PrivateLayout>
              <Cart />
            </PrivateLayout>
          }
        />
        <Route
          path={path.WHISHLIST}
          element={
            <PrivateLayout>
              <WhishList />
            </PrivateLayout>
          }
        />
      </Route>

      {/* Các route cần đăng nhập nhưng không nằm trong layout public */}
      <Route
        path={path.PROFILE}
        element={
          <PrivateLayout>
            <Profile />
          </PrivateLayout>
        }
      />
      <Route
        path={path.CHANGE_PASSWORD}
        element={
          <PrivateLayout>
            <ChangePassword />
          </PrivateLayout>
        }
      />
      <Route
        path={path.CHECKOUT}
        element={
          <PrivateLayout>
            <CheckOut />
          </PrivateLayout>
        }
      />
      <Route
        path={path.ORDER_COMPLETE}
        element={
          <PrivateLayout>
            <OrderComplete />
          </PrivateLayout>
        }
      />

      {/* Public routes ngoài layout */}
      <Route path={path.LOGIN} element={<Login />} />
      <Route path={path.REGISTER} element={<Register />} />
      <Route path={path.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={path.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
