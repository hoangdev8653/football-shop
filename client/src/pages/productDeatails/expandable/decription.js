import React, { useState } from "react";
import SizeVn from "../../../assets/Tu-van-size-viet-nam.png";
import SizeTL from "../../../assets/Tu-van-size-thai-lan.png";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";
import image_comming_soon from "../../../assets/product_coming-soon.jpg";

function Description({ data }) {
  const [isShow, setIsShow] = useState(true);

  const handleShowDescription = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <div
        onClick={handleShowDescription}
        id="description"
        style={
          isShow
            ? { backgroundColor: "rgba(0,0,0,0.03)" }
            : { backgroundColor: "white" }
        }
        className="w-full font-bold border-t-[1px] border-b-[1px]"
      >
        <span className=" flex py-2 ml-4 cursor-pointer ">
          {isShow ? (
            <IoMdArrowUp className="font-bold text-2xl hover:text-white" />
          ) : (
            <IoMdArrowDown className="font-bold text-2xl hover:text-white" />
          )}
          <span className="hover:text-white">Description</span>
        </span>
      </div>
      {isShow ? (
        <>
          <div>
            <p className="text-black font-semibold text-lg my-6 ml-8 uppercase">
              Chi tiết áo thi đấu {data.name} sân khách mùa giải 23/24
            </p>
            <ul className="text-black my-2 list-disc ml-4">
              <li className="my-2 ml-4">
                Giống 99% áo chính hãng, phiên bản Player (Bản cầu thủ thi đấu
                trên sân)
              </li>
              <li className="my-2 ml-4">
                Kiểu dáng: Bodyfit Form - Form ôm châu âu{" "}
              </li>
              <li className="my-2 ml-4">Size: S - M - L - XL - 2XL</li>
              <li className="my-2 ml-4">Logo Decal đúc PVC 3D</li>
            </ul>
            <div className="flex mx-2 my-4">
              <img
                className="w-1/2 mx-1"
                src={data?.image[1] || image_comming_soon}
                alt={data.slug}
              />
              <img
                className="w-1/2 mx-1"
                src={data?.image[0] || image_comming_soon}
                alt={data.slug}
              />
            </div>
            <ul className="text-black my-2 list-disc ml-4">
              <p className="text-orange-500 font-bold text-2xl my-6 ml-8 uppercase">
                {data.name} 23/24 hàng Thái Lan
              </p>
              <li className="my-2 ml-4">Không sử dụng chất tẩy</li>
              <li className="my-2 ml-4">Không sấy khô</li>
              <li className="my-2 ml-4">Không giặt khô</li>
              <li className="my-2 ml-4">Ủi với nhiệt độ thấp, dưới 40 độ C</li>
              <li className="my-2 ml-4">Giặt bằng nước lạnh</li>
            </ul>
            <ul className="text-black my-2 list-disc ml-4">
              <p className="text-orange-500 font-bold text-2xl my-6 ml-8">
                Lưu ý:
              </p>
              <li className="my-2 ml-4">
                Không ngâm trong nước giặt, xả vải quá lâu hoặc ngâm qua đêm.
              </li>
              <li className="my-2 ml-4">
                Lật ngược mặt bên trong áo và quần khi giặt và ủi
              </li>
            </ul>
            <p className="text-orange-500 font-bold text-2xl mb-2 mt-4 ml-8 uppercase">
              Bảng size tư vấn áo đấu {data.name} sân khách mùa giải 23/24
            </p>
            <span className="ml-8">
              Bảng size tư vấn mang tình chất tham khảo dựa trên chiều cao và
              cân nặng chuẩn của người mẫu mặc trên cơ thể. Để được tư vấn chính
              xác hơn bạn có thể nhắn tin trực tiếp Sporter để được tư vấn kỹ
              hơn về bảng size hoặc ghé trực tiếp Sporter để thử size và mua
              trực tiếp nhé.
            </span>
            <div className="w-full flex my-4">
              <div className="w-1/2 mx-2">
                <img className="" src={SizeVn} alt="bang-size-vn" />
                <p className="mx-auto text-center">
                  Bảng tư vấn size hàng Việt Nam
                </p>
              </div>
              <div className="w-1/2 mx-2">
                <img className="" src={SizeTL} alt="bang-size-thailan" />
                <p className="mx-auto text-center">
                  Bảng tư vấn size hàng Thái Lan
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Description;
