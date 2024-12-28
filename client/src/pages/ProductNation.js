import React, { useEffect, useState } from "react";
import BannerNation from "../assets/Banner-ao-doi-tuyen-2024.jpg";
import { CiStar } from "react-icons/ci";
import Discount from "../components/discount";
import WishList from "../components/wishList";
import { getProductNation } from "../apis/product";
import { formatPrice } from "../utils/forrmatPriceVn";

function ProductNation() {
  const [productNation, setProductNation] = useState([]);
  const [idWhishList, setIdWhishList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseNation = await getProductNation();
      setProductNation(responseNation.data.content);
    };
    fetchData();
  }, []);

  const handleWishListClick = (id) => {
    setIdWhishList(id);
  };

  return (
    <div className="product_nation">
      <div className="bg-white text-center justify-center w-full">
        <p className="text-orange-500 font-bold lg:text-2xl py-4 text-lg">
          TRANG PHỤC THI ĐẤU BÓNG ĐÁ ĐỘI TUYỂN MỚI NHẤT 2024
        </p>
      </div>
      <div className="relative">
        <img
          className="w-full object-cover mb-4"
          src={BannerNation}
          alt="banner-doi-tuyen"
        />
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.51)" }}
          className="bottom-5 absolute left-[30%] z-10 text-white text-base"
        >
          <p className="font-bold text-center justify-center py-2 text-xl">
            ÁO BÓNG ĐÁ ĐỘI TUYỂN HÀNG ĐẦU
          </p>
          <p className="text-center justify-center py-2 text-base">
            Những đội tuyển quốc gia hàng đầu như Anh, Bồ đào nha, Đức, Brazil,
            Pháp, Tây ban nha,...
          </p>
        </div>
      </div>
      <div className="max-w-[1050px] mx-auto my-8">
        <div className="flex">
          <b className="block flex-1 h-[2px] bg-current font-bold mt-6 opacity-30 text-orange-300"></b>
          <div className="text-gray-800 font-bold flex border-solid border-2 border-gray-400">
            <p className="flex mx-2 my-2">
              <CiStar className="text-2xl" />
              <span>MẪU ÁO ĐỘI TUYỂN QUỐC GIA ĐẸP NHẤT</span>
            </p>
          </div>
          <b className="block flex-1 h-[2px] bg-current font-bold mt-6 opacity-30 text-orange-300"></b>
        </div>
        <div className="grid lg:grid-cols-4 gap-1 my-3 tablet:grid-cols-3 sx:grid-cols-2">
          {productNation.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-y-hidden"
            >
              <a href={`product/${item.slug}`}>
                <img
                  className="block w-full h-auto p-[2px]"
                  src={item.image[0]}
                  alt={item.slug}
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition ease-in-out duration-500 hover:opacity-100">
                  <img
                    className="block w-full h-auto p-[2px]"
                    src={item.image[1]}
                    alt={item.slug}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
                  }}
                  className="absolute bottom-0 w-full text-center text-white"
                >
                  <p className="mx-4 text-xs pt-2 hover:opacity-60 uppercase">
                    {item.name}
                  </p>
                  <p className="mb-6 mt-1 text-xs">
                    <del className="text-gray-400 mx-2">
                      {formatPrice(330000)}
                    </del>
                    <ins className="mx-2 text-white">
                      <strong>{formatPrice(Number(item.price))}</strong>
                    </ins>
                  </p>
                </div>
                <Discount
                  className="absolute top-1 left-2 px-3 py-4 rounded-full"
                  pecentDiscount={15}
                />
              </a>
              <div onClick={() => handleWishListClick(item._id)}>
                <WishList
                  id={item._id}
                  onClick={handleWishListClick}
                  className="absolute top-2 right-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductNation;
