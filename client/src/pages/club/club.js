import React, { useEffect, useState } from "react";
import { CiLock } from "react-icons/ci";
import Discount from "../../components/discount";
import WishList from "../../components/wishList";
import Section from "../../components/section/section";
import styles from "./club.module.scss";
import Loadding from "../../components/loadding/Loadding";
import product_coming from "../../assets/product_coming-soon.jpg";
import { useParams } from "react-router-dom";
import { getClubBySlug } from "../../apis/club";

function Club() {
  const { slug } = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClubBySlug(slug);
        setData(response.data.content);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);
  console.log(data);
  return (
    <div className="club w-full">
      {loading ? (
        <Loadding />
      ) : (
        <>
          <div className=" bg-gray-700">
            <div className="max-w-[1050px] mx-auto text-white text-2xl font-bold uppercase py-4 text-center">
              áo bóng đá man city mùa giải mới 23/24 sân nhà và sân khách
            </div>
            <img
              className={`${styles.size_img}`}
              src={data.banner}
              alt={data.slug}
            />
          </div>
          <div className="max-w-[1050px] mx-auto my-8">
            <div className={styles.grid}>
              <div className={styles.item_product}>
                <a href={`/product/${data.productId[0].slug}`}>
                  <img
                    className={styles.img_product}
                    src={data.productId[0].image[0]}
                    alt={data.slug}
                  />
                </a>
                <div
                  style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
                  className="absolute  w-full bottom-0 "
                >
                  <div className="mx-10 text-center">
                    <p className="text-gray-200">{data.productId[0].name}</p>
                    <p className="text-gray-400 ">
                      <span className="">
                        <del className="mx-1">330.000$</del>
                        <ins className="mx-1 text-white">
                          <strong>{data.productId[0].price}$</strong>
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
                <a href={`/product/${data.productId[0].slug}`}>
                  <img
                    className={styles.img_product}
                    src={
                      data.productId[0]?.image[1] ||
                      data?.productId[1]?.image[0] ||
                      product_coming
                    }
                    alt={data.slug || "Default Alt Text"}
                  />
                </a>
                <div
                  style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
                  className="absolute  w-full bottom-0 "
                >
                  <div className="mx-10 text-center">
                    <a href="/">
                      <p className="text-gray-200">
                        {data.productId[0].name || data.productId[1].name}
                      </p>
                    </a>

                    <p className="text-gray-400 ">
                      <span className="">
                        <del className="mx-1">330.000$</del>
                        <ins className="mx-1 text-white">
                          <strong>{data.productId[0].price}$</strong>
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
                  className={styles.img_product}
                  src={product_coming}
                  alt={data.slug}
                />
                <div
                  style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
                  className="absolute  w-full bottom-0 "
                >
                  <div className="mx-10 text-center">
                    <a href="/">
                      <p className="text-gray-200">
                        Áo bóng đá {data.name} sắp ra mắt
                      </p>
                    </a>
                    <p className="text-gray-400 ">
                      <span className="">
                        <del className="mx-1">330.000$</del>
                        <ins className="mx-1 text-white">
                          <strong>280.000$</strong>
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
                {data.name}
              </span>
              {""} mùa giải mới nhất 23/24 sân khách và sân nhà
            </p>
            <p className="mt-2 mb-2">
              ✅ sản phẩm chất lượng ✅Giá luôn tốt nhất ✅Được phép đổi trả
              ✅Giao hàng toàn quốc!
            </p>
            <p className="text-orange-500 font-semibold text-3xl my-4">
              Giới thiệu về clb {data.name}
            </p>
            <p className="text-black font-semibold text-base">
              Tên đầy đủ: {data.name} Football Club
            </p>
            <p className="text-black font-semibold text-base">
              Biệt danh:"{data.nickname}"
            </p>
            <p className="text-black font-semibold text-base">
              Thành lập: {data.establish}
            </p>
            <p className="text-black font-semibold text-base">
              Sân vận động: {data.stadium} - Sức chứa: 48.000 chỗ ngồi
            </p>
            <p className="my-4">
              {data.name} là tên của một câu lạc bộ bóng đá, đặt trụ sở tại
              thành phố công nghiệp Manchester, Anh Quốc. {data.name} đã 2 lần
              vô địch giải bóng đá Ngoại hạng Anh, 5 lần đoạt cúp FA và 1 lần
              đoạt cúp C2 châu Âu.
            </p>
            <p className="my-4">
              Sân nhà của câu lạc bộ {data.name} là sân vận động Etihad, với sức
              chứa khoảng 48.000 khán giả. Biệt danh của câu lạc bộ là “The
              Citizens” (những người thành phố). Đối thủ truyền thống của
              {data.name} là câu lạc bộ Manchester United họ luôn tạo ra những
              trận derby nảy lửa. Hiện nay, câu lạc bộ {data.name}
              đang thi đấu tại giải bóng đá Ngoại hạng Anh. Người hâm mộ còn hay
              gọi {data.name} bằng tên gọi tắt Man City hay MC.
            </p>
            <p className="my-4">
              CLB {data.name} được thành lập năm 1880 bởi Anna Connel và 2 thành
              viên nhà thờ St. Mark’s tại Gorton tại thành phố Manchester và
              tham gia thi đấu ở giải hạng 2 thời bấy giờ. 5 năm sau, do gặp khó
              khăn về tài chính làm cho đội bóng phải tái cơ cấu vào mùa bóng
              1893-1894, và đổi tên mới {data.name} Football Club.
            </p>
            <p className="text-orange-500 font-bold text-3xl my-4">
              NHỮNG THÀNH TỰU NỔI BẬT
            </p>
            <p className="my-4">
              Danh hiệu đầu tiên của {data.name} là vô địch giải hạng Hai và
              được lên chơi ở giải Hạng nhất – giải đấu cao nhất vào thời điểm
              năm 1899. Họ tiếp tục có được vinh quang đầu tiên vào ngày 23
              tháng 4 năm 1904 khi đánh bại Bolton Wanderers với tỉ số 1–0 tại
              Crystal Palace để giành FA Cup.
            </p>
            <p className="my-4">
              Vào thập kỉ 1930, {data.name} 2 lần vào chung kết Cúp FA họ thua 1
              và thắng 1 trận, nhưng ngay mùa giải tiếp theo, họ lại xuống hạng
              mặc dù ghi được rất nhiều bàn thắng. Cho tới những năm 50 của thế
              kỷ trước, họ lại 2 lần vào chung kết FA Cúp và một lần nữa họ lại
              thua 1 trận thắng 1 trận.
            </p>
            <p className="my-4">
              Lần thứ 2 Man City xuống hạng là vào năm 1963, và đến năm 1965 họ
              lại vô địch hạng Hai và lên hàng Nhất, đến mùa 1967 – 1968 họ đã
              có 2 lần vô địch hạng nhất, xếp trên đội bóng cùng thành phố Man
              United.
            </p>
            <p className="my-4">
              Từ năm 1992, khi mà giải Ngoại hạng Anh ra đời, Man City cũng
              không mấy thành công khi những năm đầu họ chỉ xếp dưới top 4, đến
              năm 1996 họ lại xuống hạng, nhưng đó vẫn chưa đủ, năm 1998 Man
              City xuống chơi ở giải hạng 3 Football League One và trở thành đội
              bóng giành cúp châu Âu đầu tiên phải xuống chơi ở giải hạng ba
              trong nước.
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
              <div className="w-full mx-2">
                <img
                  className="w-full"
                  src={data.productId[0].image[0]}
                  alt={data.slug}
                />
              </div>
              <div className="w-full mx-2">
                <img
                  className="w-full"
                  src={
                    data.productId[0]?.image[1] ||
                    data?.productId[1]?.image[0] ||
                    product_coming
                  }
                  alt={data.slug || "Default Alt Text"}
                />
              </div>
            </div>
            <p className="text-black text-base font-semibold ml-2 ">
              ÁO BÓNG ĐÁ MAN CITY XANH SÂN KHÁCH
            </p>
            <div className="flex my-4">
              <div className="w-1/2 mx-2">
                <img src={product_coming} alt="product-comming" />
              </div>
              <div className="w-1/2 mx-2">
                <img src={product_coming} alt="product-comming" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Club;
