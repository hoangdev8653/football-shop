import React, { useEffect, useState } from "react";
import Discount from "../../components/discount";
import WishList from "../../components/wishList";
import styles from "./searchProduct.module.scss";
import { getProductByKey } from "../../apis/product";
import { useLocation } from "react-router-dom";
import product from "../../assets/product_coming-soon.jpg";

function SearchProduct() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const key = searchParams.get("s");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductByKey(key);
        setData(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [key]);
  console.log(data);
  return (
    <div
      style={{ backgroundColor: "rgba(10, 10, 10, 0.01)" }}
      className="w-full "
    >
      {data && data.length > 0 ? (
        <>
          <div className="max-w-[1050px] mx-auto">
            <div className="flex justify-between my-4">
              <div className="flex gap-2 text-gray-400 text-lg ">
                <a href="/">
                  <p className="cursor-pointer hover:text-black">HOME</p>
                </a>
                <span className="">/</span>
                <a href="/">
                  <p className="cursor-pointer hover:text-black">SHOP</p>
                </a>
                <span>/</span>
                <p className="text-black font-semibold ">
                  SEARCH RESULTS FOR "{key}"
                </p>
              </div>
              <div className="text-black flex gap-4">
                <p>Showing all {data?.length} results</p>
              </div>
            </div>
            <div className={styles.grid}>
              {data &&
                data.map((item, index) => (
                  <a href={`/product/${item.slug}`}>
                    <div key={index} className={styles.container}>
                      <img
                        className="w-[300px] h-[400px]"
                        src={item.image[0]}
                        alt={item.slug}
                      />
                      <div className={styles.overlay}>
                        <img
                          className="w-[300px] h-[400px]"
                          src={item.image[1] || product}
                          alt={item.slug}
                        />
                      </div>
                      <div className="  text-orange-500 uppercase">
                        <p className="py-2 pl-16 pr-20 hover:opacity-65 uppercase">
                          {item.name}
                        </p>
                        <p className="mx-auto text-center">
                          <del className="text-gray-400">330.000$</del>
                        </p>
                        <p className="mx-auto text-center">
                          <ins className="text-orange-500">
                            <strong>{item.price}$</strong>
                          </ins>
                        </p>
                      </div>
                      <Discount pecentDiscount={15} />
                      <WishList className=" absolute right-56 top-2" />
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="py-8 mx-auto text-center">
            No products were found matching your selection.
          </div>
        </>
      )}
    </div>
  );
}

export default SearchProduct;
