import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Discount from "../../components/discount";
import BannerIn from "../../assets/Banner-keu-goi-in.png";
import image_comming_soon from "../../assets/product_coming-soon.jpg";
import Button from "../../components/button";
import styles from "./productDeatail.module.scss";
import { useParams } from "react-router-dom";
import { quantityStore } from "../../store/quantityStore";
// import Loader from "../../components/logoLoader/logoLoader";
import { getLocalStorage } from "../../utils/LocalStorage";
import { toast } from "react-toastify";
import Expandable from "./expandable/index";
import { cartStore } from "../../store/cartStore";
import { productStore } from "../../store/productStore";
import Loadding from "../../components/loadding/Loadding";

function ProductDeatails() {
  const [loading, setLoading] = useState(true);
  const { value, increment, decrement, deleteQuantity } = quantityStore();
  const { getProductBySlug, data, stockQuality } = productStore();
  const { addProduct } = cartStore();
  const { slug } = useParams();
  const token = getLocalStorage("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProductBySlug(slug);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  const handleSubmit = async () => {
    const productId = data?._id;
    const quantity = value;
    try {
      if (!token) {
        throw new Error("Token is not Valid");
      }
      await addProduct({ productId, quantity }, token);
      toast.success("Thêm sản phẩm vào giỏ hàng thành công");
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    } catch (error) {
      toast.error(error.message);
    }
  };

  var settings = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product-deatail">
      {loading ? (
        <Loadding />
      ) : (
        <>
          <div
            className="w-full"
            style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
          >
            <div className={styles.page_title}>
              <a className="hover:opacity-70" href="/">
                Home
              </a>{" "}
              /<p>đồ bóng đá </p> /
              <p>Quần áo bóng đá đẹp mùa giải mới 23/24 </p> /<p>{data.name}</p>
            </div>
          </div>
          <div className="max-w-[1050px] mx-auto">
            <div className={styles.content}>
              <div className={styles.image_product}>
                <div className="w-full relative">
                  <Slider {...settings}>
                    <img
                      className="h-full w-full"
                      src={data.image[0]}
                      alt={data.slug}
                    />
                    <img
                      className="w-full h-full"
                      src={data?.image[1] || image_comming_soon}
                      alt={data.slug}
                    />
                  </Slider>
                  <Discount
                    pecentDiscount={15}
                    className="absolute top-2 px-3 py-4 rounded-full left-2 text-lg"
                  />
                </div>
              </div>
              <div className={styles.info_product}>
                <p className="uppercase text-orange-500 font-bold text-xl mb-2">
                  {data.name}
                </p>
                <p className="text-xl flex gap-4">
                  <del className="opacity-30">
                    <span>
                      330
                      <span>$</span>
                    </span>
                  </del>
                  <ins className="text-orange-500 font-semibold">
                    <span>{data.price}$</span>
                  </ins>
                </p>
                <p className="my-2">
                  Áo bóng đá{" "}
                  <span className="text-orange-500 font-semibold uppercase">
                    {data.name}
                  </span>{" "}
                  sân khách mùa giải 23/24
                </p>
                <ul className="text-black my-2 list-disc ml-4">
                  <li className="my-2">Size: S - M - L - XL - 2XL - 3XL</li>
                  <li className="my-2">
                    Thiết kế Form châu âu và Slim-fit ôm body
                  </li>
                  <li className="my-2">Logo thiết kế đúc PU 3D</li>
                </ul>
                <p className="mb-2">
                  Hàng VN giá{" "}
                  <span>
                    <strong className="text-red-500">
                      Khuyến mãi còn 100$ /1 bộ{" "}
                    </strong>
                  </span>
                  -
                  <span className="text-red-500">
                    <strong>Từ 5 bộ trở lên: 95$ / 1 bộ</strong>
                  </span>
                  <p>
                    Hàng Thái Lan giá{" "}
                    <span className="text-red-500">
                      <strong>Khuyến mãi còn 280$ /1 áo - 350$ /1 bộ</strong>
                    </span>
                    -
                    <span className="text-red-500">
                      <strong>
                        Từ 5 bộ trở lên: 270$/ 1 áo - 340$/ 1 bộ
                        <img src={BannerIn} alt="banner-keu-goi-in" />
                      </strong>
                    </span>
                  </p>
                </p>
                <p className="text-orange-500 uppercase font-semibold text-xl my-2">
                  dịch vụ in ấn sporter
                </p>
                <div className="my-4 flex gap-4">
                  <div className="flex">
                    <button
                      onClick={decrement}
                      className="border-[1px] border-solid border-gray-300 px-2 py-2"
                    >
                      -
                    </button>
                    <input
                      onChange={deleteQuantity}
                      type="text"
                      className="border-solid border-[1px] border-gray-300 text-center w-[50px] focus:outline-none"
                      value={value}
                    />
                    <button
                      onClick={increment}
                      className="border-[1px] border-solid border-gray-300 px-2 py-2"
                    >
                      +
                    </button>
                  </div>
                  {value === "" && typeof value === "string" ? (
                    <Button
                      disabled={true}
                      onClick={handleSubmit}
                      className="text-white bg-orange-500 font-semibold opacity-45"
                    >
                      ADD TO CART
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="text-white bg-orange-500 font-semibold hover:bg-orange-700"
                    >
                      ADD TO CART
                    </Button>
                  )}
                </div>
                <div className="flex gap-1 ">
                  <p className="opacity-80 text-gray-500">Số lượng: </p>
                  <span className="font-semibold">{stockQuality}</span>
                </div>
                <div className="flex mt-8 ml-4 gap-4 font-semibold ">
                  <Button className="text-white bg-red-700 hover:bg-red-900">
                    TƯ VẤN NGAY
                  </Button>
                  <Button className="text-red-700 border-2 border-red-700 border-solid hover:text-white hover:bg-red-700">
                    HOTLINE: 0936777554
                  </Button>
                </div>
              </div>
            </div>
            <Expandable data={data} />
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDeatails;
