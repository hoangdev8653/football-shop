import React, { useEffect, useState } from "react";
import styles from "./productNoLogo.module.scss";
import Banner from "../../assets/Banner-quan-ao-bong-da-khong-logo-12.jpg";
import bt4 from "../../assets/button-4.jpg";
import bt3 from "../../assets/button-3.jpg";
import bt2 from "../../assets/Button-2.jpg";
import bt1 from "../../assets/Button-1.jpg";
import Discount from "../../components/discount";
import WishList from "../../components/wishList";
import { getProductNoLogo } from "../../apis/product";

function ProductNoLogo() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductNoLogo();
      setData(response.data.content);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className={styles.productNoLogo}>
      <div className="w-full">
        <div className="bg-gray-700 ">
          <p className="text-white font-bold text-2xl mx-auto text-center py-6">
            QUẦN ÁO BÓNG ĐÁ KHÔNG LOGO ĐẸP NHẤT 2023
          </p>
        </div>
        <div className="bg-black">
          <div className="pt-5 pb-8">
            <div className="relative max-w-[1050px] mx-auto border-[0.5px]  border-gray-500">
              <img
                className="mx-auto text-center justify-center items-center object-cover w-full"
                src={Banner}
                alt="banner-khong-logo"
              />
              <div className={styles.introduce}>
                <p className="font-bold text-xl my-2">
                  QUẦN ÁO BÓNG ĐÁ KHÔNG LOGO
                </p>
                <p className="my-2 opacity-80">
                  Hhsport đã kết hợp với các thương hiệu hàng đầu Việt Nam để
                  tuyển tập và lựa chọn các mẫu áo đấu bóng đá đẹp mắt, tinh tế
                  cùng chất liệu tốt nhất với các công nghệ trên vải mới nhất để
                  đem đến cho khách hàng những sản phẩm tốt nhất.
                </p>
                <p className="my-2 opacity-80">
                  Các mẫu trang phục sẽ được thiết kế, in ấn theo cá nhân hóa
                  của từng đội bóng, công ty và cá nhân để mang bản sắc và văn
                  hóa riêng biệt của từng đội bóng.
                </p>
              </div>
            </div>
          </div>
          <section className={styles.section}>
            <img className="w-[25%]" src={bt4} alt="bt4" />
            <img className="w-[25%]" src={bt3} alt="bt4" />
            <img className="w-[25%]" src={bt1} alt="bt4" />
            <img className="w-[25%]" src={bt2} alt="bt4" />
          </section>
          <div className="bg-gray-800 border-t-2 border-white">
            <p className="text-white font-bold text-xl mx-auto py-4 text-center ">
              ÁO BÓNG ĐÁ KHÔNG LOGO
            </p>
          </div>
        </div>
        <div className="bg-black">
          <div className={styles.grid}>
            {data &&
              data.map((item, index) => (
                <a href={`/product/${item.slug}`}>
                  <div key={index} className={styles.container}>
                    <img
                      className={styles.image}
                      src={item.image[0]}
                      alt={item.slug}
                    />
                    <div className={styles.overlay}>
                      <img src={item.image[1]} alt={item.slug} />
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
                      }}
                      className="absolute bottom-0 w-full text-center text-white"
                    >
                      <p className="mx-4 text-xs pt-2 hover:opacity-60">
                        {item.name}
                      </p>
                      <p className="mb-2 mt-1 text-xs">
                        <del className="text-gray-400 mx-2">330,000đ</del>
                        <ins className="mx-2 text-white">
                          <strong>{item.price}đ</strong>
                        </ins>
                      </p>
                    </div>
                    <Discount
                      className="absolute top-1 left-2  rounded-full"
                      pecentDiscount={15}
                    />
                    <WishList className="absolute top-2 right-2" />
                  </div>
                </a>
              ))}
          </div>
          <div className=" py-24 mx-auto max-w-[1050px] text-white ">
            <div className={styles.print}>
              <p className="font-bold text-3xl text-center my-1">
                IN ẤN TÊN SỐ - LOGO
              </p>
              <p className="font-bold text-3xl text-center my-1">
                THEO YÊU CẦU
              </p>
              <p className="text-center my-2">
                Hhsport sẵn sàng nhận in các đơn hàng lẻ từ 1 bộ đến số lượng
                lớn để phục vụ nhu cầu cá nhân hóa chiếc áo đấu theo yêu thích
                cá nhân, đội bóng,...
              </p>
              <p className="text-center  my-2">
                Với công nghệ in chuyển nhiệt, Decal, PET,… mới nhất để đem lại
                một bộ quần áo hoàn hảo hơn với nhiêu bộ font số đa dạng,{" "}
              </p>
              <p className="text-center my-2">
                Đặc biệt: Hhsporter sẽ DEMO trước khi in cho khách hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductNoLogo;
