import React, { useEffect, useState } from "react";
import Discount from "../../components/discount";
import styles from "./SearchProduct.module.scss";
import { useLocation } from "react-router-dom";
import product_coming from "../../assets/product_coming-soon.jpg";
import { productStore } from "../../store/productStore";
import Paginate from "../../components/paginate/Paginate";
import { formatPrice } from "../../utils/forrmatPriceVn";

function SearchProduct() {
  const { getProductByKey, data } = productStore();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const key = searchParams.get("s");

  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProductByKey(key);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [key]);

  const handlePageChange = (items) => {
    setCurrentItems(items);
  };

  return (
    <div
      style={{ backgroundColor: "rgba(10, 10, 10, 0.01)" }}
      className="w-full "
    >
      {data && data.length > 0 ? (
        <>
          <div className="max-w-[1050px] mx-auto">
            <div className={styles.page_title}>
              <div className="flex gap-2 text-gray-400 text-lg">
                <a href="/">
                  <p className="cursor-pointer hover:text-black">HOME</p>
                </a>
                <span className="">/</span>
                <a href="/">
                  <p className="cursor-pointer hover:text-black">SHOP</p>
                </a>
                <span>/</span>
                <p className="text-black font-semibold">
                  SEARCH RESULTS FOR "{key}"
                </p>
              </div>
              <div className={styles.result}>
                <p>
                  Showing all{" "}
                  <span className="font-semibold">{data?.length}</span> results
                </p>
              </div>
            </div>
            <div className={styles.grid}>
              {currentItems &&
                currentItems.map((item, index) => (
                  <div key={index} className={styles.container}>
                    <a href={`/product/${item.slug}`}>
                      <img
                        className={styles.image}
                        src={item.image[0]}
                        alt={item.slug}
                      />
                      <div className={styles.overlay}>
                        <img
                          className={styles.image}
                          src={item.image[1] || product_coming}
                          alt={item.slug}
                        />
                      </div>
                      <div className=" text-orange-500 uppercase text-base my-2">
                        <p className="mx-auto text-center hover:opacity-65 uppercase">
                          {item.name}
                        </p>
                        <div className="flex gap-2 justify-center">
                          <p className=" text-center">
                            <del className="text-gray-400">
                              {formatPrice(330000)}
                            </del>
                          </p>
                          <p className=" text-center">
                            <ins className="text-orange-500">
                              <strong>{formatPrice(Number(item.price))}</strong>
                            </ins>
                          </p>
                        </div>
                      </div>
                      <Discount
                        className="absolute top-1 left-2 px-3 py-4 rounded-full"
                        pecentDiscount={15}
                      />
                    </a>
                  </div>
                ))}
            </div>
            <Paginate
              data={data}
              itemsPerPage={6}
              onPageChange={handlePageChange}
            />
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
