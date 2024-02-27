import React from "react";
import styles from "./blog.module.scss";

function Blog() {
  return (
    <div className="py-[30px]">
      <div className="max-w-[1050px] mx-auto">
        <div className="relative px-[15px] pb-[30px] w-full">
          <div className="px-0 mx-[-15px] w-auto">
            <div className="relative px-[30px] pb-[30px] w-full">
              <div className={`${styles.shadown} bg-white ml-auto`}>
                <a href="/">
                  <div className="bg-white table w-full">
                    <div className="w-[40%] table-cell align-middle relative h-auto mx-auto overflow-hidden">
                      <div className="pt-[56%] relative h-auto overflow-hidden bg-cover">
                        <img
                          className="right-0 left-0 top-0 bottom-0 w-full h-full absolute object-cover max-w-[100%]"
                          src="https://www.sporter.vn/wp-content/uploads/2024/02/Tiet-lo-ao-doi-tuyen-argentina-san-nha-copa-america-2024-6.jpg"
                          alt="agr"
                        />
                      </div>
                    </div>
                    <div className="px-6 table-cell align-middle text-left pt-2 pb-4 relative w-full text-sm">
                      <h5 className="text-orange-500 font-bold">
                        Tiết lộ áo đội tuyển Argentina sân nhà Copa America 2024
                      </h5>
                      <div className="my-1 h-[2px] block bg-gray-100 w-full max-w-[30px]"></div>
                      <p className="my-1 hover:opacity-60">
                        Chúng ta đã có các hình ảnh thực tế đầu tiên các mẫu áo
                        đội [...]
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
