import React, { useEffect, useState } from "react";
import Banner_do_bong_da_clb from "../assets/Banner-do-bong-da-clb.webp";
import Banner_do_bong_da_doi_tuyen from "../assets/Banner-quan-ao-bong-da-doi-tuyen.jpg";
import Banner_do_bong_da_khong_logo from "../assets/Banner-do-bong-da-khong-logo.webp";
import Banner_phu_kien from "../assets/Banner-phu-kien.jpg";
import Banner_bong_da_clb_vietnam from "../assets/Banner_Bong-da-clb_vietnam.webp";
import Banner_bong_da_thai_lan from "../assets/Banner-do-bong-da-thai-lan.webp";
import ProductItems from "../components/productItems";
import {
  getProductFromVn,
  getProductNoLogo,
  getProductAccessory,
} from "../apis/product";
import { FaShoppingCart } from "react-icons/fa";

function Sport() {
  const [productVn, setProductVn] = useState([]);
  const [productNoLogo, setProductNoLogo] = useState([]);
  const [accessory, setAccessory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productVn = await getProductFromVn();
        setProductVn(productVn.data.content);
        const productNoLogo = await getProductNoLogo();
        setProductNoLogo(productNoLogo.data.content);
        const accessory = await getProductAccessory();
        setAccessory(accessory.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full bg-black">
      <div className="py-4">
        <div className="max-w-[1050px] mx-auto text-white  lg:text-2xl md:text-xl sm:text-lg font-bold uppercase lg:py-4 md:py-2  text-center">
          Cửa hàng đồ bóng đá cao cấp hàng đầu H7sport
        </div>
        <div className="hidden sx:block ">
          <div className="w-full gap-4 justify-between flex my-4 ">
            <div className="relative w-1/3 mx-4 duration-500 ease-in-out hover:opacity-100 opacity-80 hover:shadow-lg hover:-translate-y-2 transform transition-all">
              <img
                className="w-full object-cover"
                src={Banner_do_bong_da_clb}
                alt="banner_ao_bong_da_clb"
              />
              <div className="absolute w-[68%] h-[68%] bottom-[10%] left-1/2 transform -translate-x-1/2">
                <div
                  className="w-full h-full"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <div className="absolute right-0 left-0 top-1/2 transform -translate-y-1/2 text-center">
                    <h2 className="uppercase text-white md:text-lg lg:text-xl text-xxs my-2 md:leading-none">
                      <strong>Áo bóng đá CLB</strong>
                    </h2>
                    <a href="/ao-bong-da-clb/">
                      <span className="text-white font-semibold border-2 border-white uppercase px-2.5 py-1.5 text-xxxs lg:text-xs hover:bg-white hover:text-black">
                        Áo bóng đá CLB
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-1/3 mx-4 duration-500 ease-in-out hover:opacity-100 opacity-80 hover:shadow-lg hover:-translate-y-2 transform transition-all">
              <img
                className="w-full object-cover "
                src={Banner_do_bong_da_doi_tuyen}
                alt="banner_do_bong_da_doi_tuyen"
              />
              <div className="absolute w-[68%] h-[68%] bottom-[10%] left-1/2 transform -translate-x-1/2">
                <div
                  className="w-full h-full"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <div className="absolute right-0 left-0 top-1/2 transform -translate-y-1/2 text-center">
                    <h2 className="uppercase text-white md:text-lg lg:text-xl text-xxs my-2 md:leading-none">
                      <strong>Áo Đội Tuyển Quốc Gia</strong>
                    </h2>
                    <a href="/ao-bong-da-doi-tuyen">
                      <span className="text-white font-semibold border-2 border-white uppercase px-2.5 py-1.5 text-xxxs lg:text-xs hover:bg-white hover:text-black">
                        Áo Đội Tuyển
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-1/3 mx-4 duration-500 ease-in-out hover:opacity-100 opacity-80 hover:shadow-lg hover:-translate-y-2 transform transition-all">
              <img
                className="w-full object-cover "
                src={Banner_do_bong_da_khong_logo}
                alt="banner_do_bong_da_khong_logo"
              />
              <div className="absolute w-[68%] h-[68%] bottom-[10%] left-1/2 transform -translate-x-1/2">
                <div
                  className="w-full h-full "
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <div className="absolute right-0 left-0 top-1/2 transform -translate-y-1/2 text-center">
                    <h2 className="uppercase text-white md:text-lg lg:text-xl text-xxs my-2 md:leading-none">
                      <strong> Áo bóng đá Không Logo</strong>
                    </h2>
                    <a href="/ao-bong-da-khong-logo">
                      <span className="text-white font-semibold border-2 border-white uppercase px-2.5 py-1.5 text-xxxs lg:text-xs hover:bg-white hover:text-black">
                        Áo Không Logo
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1050px] mx-auto text-center">
            <div className="w-full gap-4 justify-around flex my-4 ">
              <div className="relative w-1/3 mx-4 duration-500 ease-in-out hover:opacity-100 opacity-80 hover:shadow-lg hover:-translate-y-2 transform transition-all">
                <img
                  className="w-full object-cover "
                  src={Banner_bong_da_clb_vietnam}
                  alt="banner_bong_da_clb_vietnam"
                />
                <div className="absolute w-[68%] h-[68%] bottom-[10%] left-1/2 transform -translate-x-1/2">
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  >
                    <div className="absolute right-0 left-0 top-1/2 transform -translate-y-1/2 text-center">
                      <h2 className="uppercase text-white md:text-base lg:text-lg text-xxs my-2 md:leading-none">
                        <strong>Áo bóng đá CLB Việt Nam</strong>
                      </h2>
                      <a href="/ao-bong-da-clb/">
                        <span className="text-white font-semibold border-2 border-white uppercase px-2.5 py-1.5 text-xxxs lg:text-xs hover:bg-white hover:text-black">
                          Áo bóng đá CLB VN
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-1/3 mx-4 duration-500 ease-in-out hover:opacity-100 opacity-80 hover:shadow-lg hover:-translate-y-2 transform transition-all">
                <img
                  className="w-full object-cover "
                  src={Banner_bong_da_thai_lan}
                  alt="banner_bong_da_thai_lan"
                />
                <div className="absolute w-[68%] h-[68%] bottom-[10%] left-1/2 transform -translate-x-1/2">
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  >
                    <div className="absolute right-0 left-0 top-1/2 transform -translate-y-1/2 text-center">
                      <h2 className="uppercase text-white md:text-base lg:text-lg text-xxs my-2 md:leading-none">
                        <strong>Áo Bóng Đá Thái Lan</strong>
                      </h2>
                      <a href="/ao-bong-da-doi-tuyen">
                        <span className="text-white font-semibold border-2 border-white uppercase px-2.5 py-1.5 text-xxxs lg:text-xs hover:bg-white hover:text-black">
                          Áo Bóng Đá Thái Lan
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-1/3 mx-4 duration-500 ease-in-out hover:opacity-100 opacity-80 hover:shadow-lg hover:-translate-y-2 transform transition-all">
                <img
                  className="w-full object-cover "
                  src={Banner_phu_kien}
                  alt="banner_phu_kien"
                />
                <div className="absolute w-[68%] h-[68%] bottom-[10%] left-1/2 transform -translate-x-1/2">
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  >
                    <div className="absolute right-0 left-0 top-1/2 transform -translate-y-1/2 text-center">
                      <h2 className="uppercase text-white md:text-base lg:text-lg text-xxs my-2 md:leading-none">
                        <strong>Phụ Kiện</strong>
                      </h2>
                      <a href="/ao-bong-da-doi-tuyen">
                        <span className="text-white font-semibold border-2 border-white uppercase px-2.5 py-1.5 text-xxxs lg:text-xs hover:bg-white hover:text-black">
                          Phụ Kiện
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sx:flex block my-8">
        <div className="sx:w-1/4 sx:mx-2 my-4 w-full relative">
          <img
            className="h-[500px] w-full object-cover"
            src={Banner_bong_da_clb_vietnam}
            alt="banner_bong_da_clb_vietnam"
          />
          <div className="absolute w-[68%] bottom-0 left-1/2 transform -translate-x-1/2">
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              className="mx-2 text-white lg:py-4 md:py-0 xxs:py-4"
            >
              <p className=" font-semibold text-sm md:text-xl text-center py-2 sx:mx-1 xxs:text-3xl">
                Áo Bóng Đá CLB VN
              </p>
              <a
                href="/"
                className=" block lg:flex  justify-center gap-2 border-2 border-white border-solid lg:w-2/3 md:w-full mx-auto hover:bg-white hover:text-black text-center xxs:flex xxs:w-2/3"
              >
                <FaShoppingCart className="md:text-lg my-2 mx-auto text-sm xxs:text-2xl" />
                <p className="md:text-lg font-semibold uppercase my-1 text-lg lg:leading-tight md:mx-auto ">
                  Xem Thêm
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="sx:w-3/4 sx:mx-2 my-4 w-full ">
          <ProductItems data={productVn} itemToShow={4} />
        </div>
      </div>

      <div className="sx:flex block my-8">
        <div className="sx:w-1/4 sx:mx-2 my-4 w-full relative">
          <img
            className="h-[500px] w-full object-cover"
            src={Banner_do_bong_da_khong_logo}
            alt="banner_do_bong_da_khong_logo"
          />
          <div className="absolute w-[68%] bottom-0 left-1/2 transform -translate-x-1/2">
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              className="mx-2 text-white lg:py-4 md:py-0 xxs:py-4"
            >
              <p className=" font-semibold text-sm md:text-xl text-center py-2 sx:mx-1 xxs:text-3xl">
                Áo Bóng Đá Không Logo
              </p>
              <a
                href="/"
                className=" block lg:flex  justify-center gap-2 border-2 border-white border-solid lg:w-2/3 md:w-full mx-auto hover:bg-white hover:text-black text-center xxs:flex xxs:w-2/3"
              >
                <FaShoppingCart className="md:text-lg my-2 mx-auto text-sm xxs:text-2xl" />
                <p className="md:text-lg font-semibold uppercase my-1 text-lg lg:leading-tight md:mx-auto ">
                  Xem Thêm
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="sx:w-3/4 sx:mx-2 my-4 w-full relative">
          <ProductItems data={productNoLogo} itemToShow={4} />
        </div>
      </div>
      <div className="sx:flex block mt-8">
        <div className="sx:w-1/4 sx:mx-2 my-4 w-full relative">
          <img
            className="h-[500px] w-full object-cover"
            src={Banner_phu_kien}
            alt="banner_phu_kien"
          />
          <div className="absolute w-[68%] bottom-0 left-1/2 transform -translate-x-1/2">
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              className="mx-2 text-white lg:py-4 md:py-0 xxs:py-4"
            >
              <p className=" font-semibold text-sm md:text-xl text-center py-2 sx:mx-1 xxs:text-3xl">
                Phụ kiện Bóng Đá
              </p>
              <a
                href="/"
                className=" block lg:flex  justify-center gap-2 border-2 border-white border-solid lg:w-2/3 md:w-full mx-auto hover:bg-white hover:text-black text-center xxs:flex xxs:w-2/3"
              >
                <FaShoppingCart className="md:text-lg my-2 mx-auto text-sm xxs:text-2xl" />
                <p className="md:text-lg font-semibold uppercase my-1 text-lg lg:leading-tight md:mx-auto ">
                  Xem Thêm
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="sx:w-3/4 sx:mx-2 my-4 w-full ">
          <ProductItems data={accessory} itemToShow={4} />
        </div>
      </div>
    </div>
  );
}

export default Sport;
