import React from "react";
import { CiLock } from "react-icons/ci";
import Discount from "../../components/discount";
import WishList from "../../components/wishList";
import Section from "../../components/section";
import styles from "./club.module.scss";

function club() {
  return (
    <div className="club w-full">
      <div className=" bg-gray-700">
        <div className="max-w-[1050px] mx-auto text-white text-2xl font-bold uppercase py-4 text-center">
          áo bóng đá man city mùa giải mới 23/24 sân nhà và sân khách
        </div>
        <img
          className={`${styles.size_img}`}
          src="https://www.sporter.vn/wp-content/uploads/2023/01/Banner-manchester-city.jpg"
          alt="banner"
        />
      </div>
      <div className="max-w-[1050px] mx-auto my-8">
        <div className={styles.content}>
          <div className={styles.item_product}>
            <img
              style={{
                background:
                  "linear-gradient(to top, #323232 0%, rgba(50, 50, 50, 0) 33%)",
                boxShadow: " rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
              }}
              className="w-full"
              src="https://www.sporter.vn/wp-content/uploads/2023/05/Ao-bong-da-man-city-san-nha-1.png"
              alt="1"
            />
            <div
              style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
              className="absolute  w-full bottom-0 "
            >
              <div className="mx-10 text-center">
                <p className="text-gray-200">
                  Áo bóng đá Man city sân nhà 23/24 hàng thái lan
                </p>
                <p className="text-gray-400 ">
                  <span className="">
                    <del className="mx-1">330.000đ</del>
                    <ins className="mx-1 text-white">
                      <strong>280.000đ</strong>
                    </ins>
                  </span>
                </p>
                <div className="text-center mt-2 mb-2">
                  <p className=" text-white flex items-center justify-center gap-2 ">
                    <CiLock
                      title="Add to Cart"
                      className="text-3xl hover:opacity-60 cursor-pointer"
                    />
                    <button className="bg-black rounded-2xl px-[6px] font-medium hover:text-black hover:bg-white">
                      Quick view
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <Discount
              className="absolute px-2 py-3 rounded-3xl top-4"
              pecentDiscount={15}
            />
            <WishList className="absolute right-3 top-2 " />
          </div>
          <div className={styles.item_product}>
            <img
              style={{
                background:
                  "linear-gradient(to top, #323232 0%, rgba(50, 50, 50, 0) 33%)",
                boxShadow: " rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
              }}
              className="w-full"
              src="https://www.sporter.vn/wp-content/uploads/2023/05/Ao-bong-da-man-city-san-nha-1.png"
              alt="1"
            />
            <div
              style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
              className="absolute  w-full bottom-0 "
            >
              <div className="mx-10 text-center">
                <p className="text-gray-200">
                  Áo bóng đá Man city sân nhà 23/24 hàng thái lan
                </p>
                <p className="text-gray-400 ">
                  <span className="">
                    <del className="mx-1">330.000đ</del>
                    <ins className="mx-1 text-white">
                      <strong>280.000đ</strong>
                    </ins>
                  </span>
                </p>
                <div className="text-center mt-2 mb-2">
                  <p className=" text-white flex items-center justify-center gap-2 ">
                    <CiLock
                      title="Add to Cart"
                      className="text-3xl hover:opacity-60 cursor-pointer"
                    />
                    <button className="bg-black rounded-2xl px-[6px] font-medium hover:text-black hover:bg-white">
                      Quick view
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <Discount
              className="absolute px-2 py-3 rounded-3xl top-4"
              pecentDiscount={15}
            />
            <WishList className="absolute right-2 top-2 " />
          </div>
          <div className={styles.item_product}>
            <img
              style={{
                background:
                  "linear-gradient(to top, #323232 0%, rgba(50, 50, 50, 0) 33%)",
                boxShadow: " rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
              }}
              className="w-full"
              src="https://www.sporter.vn/wp-content/uploads/2023/05/Ao-bong-da-man-city-san-nha-1.png"
              alt="1"
            />
            <div
              style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
              className="absolute  w-full bottom-0 "
            >
              <div className="mx-10 text-center">
                <p className="text-gray-200">
                  Áo bóng đá Man city sân nhà 23/24 hàng thái lan
                </p>
                <p className="text-gray-400 ">
                  <span className="">
                    <del className="mx-1">330.000đ</del>
                    <ins className="mx-1 text-white">
                      <strong>280.000đ</strong>
                    </ins>
                  </span>
                </p>
                <div className="text-center mt-2 mb-2">
                  <p className=" text-white flex items-center justify-center gap-2 ">
                    <CiLock
                      title="Add to Cart"
                      className="text-3xl hover:opacity-60 cursor-pointer"
                    />
                    <button className="bg-black rounded-2xl px-[6px] font-medium hover:text-black hover:bg-white">
                      Quick view
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <Discount
              className="absolute px-2 py-3 rounded-3xl top-4"
              pecentDiscount={15}
            />
            <WishList className="absolute right-2 top-2 " />
          </div>
        </div>
      </div>
      <div className={styles.section_destop}>
        <Section />
      </div>
      <div className={`${styles.mx} max-w-[1050px] mx-auto`}>
        <p className="mb-2 mt-4 ">
          Quần áo bóng đá câu lạc bộ{" "}
          <span className="text-black font-semibold text-base">
            ManChester City
          </span>
          {""} mùa giải mới nhất 23/24 sân khách và sân nhà
        </p>
        <p className="mt-2 mb-2">
          ✅ sản phẩm chất lượng ✅Giá luôn tốt nhất ✅Được phép đổi trả ✅Giao
          hàng toàn quốc!
        </p>
        <p className="text-orange-500 font-semibold text-3xl my-4">
          Giới thiệu về clb man city
        </p>
        <p className="text-black font-semibold text-base">
          Tên đầy đủ: ManChester City Football Club
        </p>
        <p className="text-black font-semibold text-base">
          Biệt danh:"The CitiZens"(Những người thành phố)
        </p>
        <p className="text-black font-semibold text-base">Thành lập: 1880</p>
        <p className="text-black font-semibold text-base">
          Sân vận động: Etihad - Sức chứa: 48.000 chỗ ngồi
        </p>
        <p className="my-4">
          Manchester City là tên của một câu lạc bộ bóng đá, đặt trụ sở tại
          thành phố công nghiệp Manchester, Anh Quốc. Manchester City đã 2 lần
          vô địch giải bóng đá Ngoại hạng Anh, 5 lần đoạt cúp FA và 1 lần đoạt
          cúp C2 châu Âu.
        </p>
        <p className="my-4">
          Sân nhà của câu lạc bộ Manchester City là sân vận động Etihad, với sức
          chứa khoảng 48.000 khán giả. Biệt danh của câu lạc bộ là “The
          Citizens” (những người thành phố). Đối thủ truyền thống của Manchester
          City là câu lạc bộ Manchester United họ luôn tạo ra những trận derby
          nảy lửa. Hiện nay, câu lạc bộ Manchester City đang thi đấu tại giải
          bóng đá Ngoại hạng Anh. Người hâm mộ còn hay gọi Manchester City bằng
          tên gọi tắt Man City hay MC.
        </p>
        <p className="my-4">
          CLB Manchester City được thành lập năm 1880 bởi Anna Connel và 2 thành
          viên nhà thờ St. Mark’s tại Gorton tại thành phố Manchester và tham
          gia thi đấu ở giải hạng 2 thời bấy giờ. 5 năm sau, do gặp khó khăn về
          tài chính làm cho đội bóng phải tái cơ cấu vào mùa bóng 1893-1894, và
          đổi tên mới Manchester City Football Club.
        </p>
        <p className="text-orange-500 font-bold text-3xl my-4">
          NHỮNG THÀNH TỰU NỔI BẬT
        </p>
        <p className="my-4">
          Danh hiệu đầu tiên của Manchester City là vô địch giải hạng Hai và
          được lên chơi ở giải Hạng nhất – giải đấu cao nhất vào thời điểm năm
          1899. Họ tiếp tục có được vinh quang đầu tiên vào ngày 23 tháng 4 năm
          1904 khi đánh bại Bolton Wanderers với tỉ số 1–0 tại Crystal Palace để
          giành FA Cup.
        </p>
        <p className="my-4">
          Vào thập kỉ 1930, Manchester City 2 lần vào chung kết Cúp FA họ thua 1
          và thắng 1 trận, nhưng ngay mùa giải tiếp theo, họ lại xuống hạng mặc
          dù ghi được rất nhiều bàn thắng. Cho tới những năm 50 của thế kỷ
          trước, họ lại 2 lần vào chung kết FA Cúp và một lần nữa họ lại thua 1
          trận thắng 1 trận.
        </p>
        <p className="my-4">
          Lần thứ 2 Man City xuống hạng là vào năm 1963, và đến năm 1965 họ lại
          vô địch hạng Hai và lên hàng Nhất, đến mùa 1967 – 1968 họ đã có 2 lần
          vô địch hạng nhất, xếp trên đội bóng cùng thành phố Man United.
        </p>
        <p className="my-4">
          Từ năm 1992, khi mà giải Ngoại hạng Anh ra đời, Man City cũng không
          mấy thành công khi những năm đầu họ chỉ xếp dưới top 4, đến năm 1996
          họ lại xuống hạng, nhưng đó vẫn chưa đủ, năm 1998 Man City xuống chơi
          ở giải hạng 3 Football League One và trở thành đội bóng giành cúp châu
          Âu đầu tiên phải xuống chơi ở giải hạng ba trong nước.
        </p>
        <p className="text-black text-lg font-semibold">Thành tích</p>
        <ul className="text-black my-2 list-disc ml-4">
          <li>Premier League: 6</li>
          <li>FA Cub: 6</li>
          <li>Cúp liên đoàn bóng đá Anh: 5</li>
          <li>Siêu cúp nước Anh: 6</li>
          <li>UEFA Cup Winner’s Cup: 1</li>
        </ul>
        <p className="text-orange-500 font-bold text-xl my-4">
          NHỮNG MẪU ÁO MÙA GIẢI MỚI
        </p>
        <p className="text-black text-base font-semibold ml-2">
          ÁO BÓNG ĐÁ MAN CITY XANH SÂN NHÀ
        </p>
        <div className="flex my-4">
          <div className="w-1/2 mx-2">
            <img src="https://www.sporter.vn/wp-content/uploads/2023/05/Ao-bong-da-man-city-san-nha-1.png" />
          </div>
          <div className="w-1/2 mx-2">
            <img src="https://www.sporter.vn/wp-content/uploads/2023/05/Ao-bong-da-man-city-san-nha-2.png" />
          </div>
        </div>
        <p className="text-black text-base font-semibold ml-2 ">
          ÁO BÓNG ĐÁ MAN CITY XANH SÂN KHÁCH
        </p>
        <div className="flex my-4">
          <div className="w-1/2 mx-2">
            <img src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-manchester-city-san-khach-2023-1.png" />
          </div>
          <div className="w-1/2 mx-2">
            <img src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-manchester-city-san-khach-2023-2.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default club;
