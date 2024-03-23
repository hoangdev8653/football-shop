import React, { useState } from "react";
import Button from "../components/button";
import ReactStars from "react-star-ratings";
function ModalReviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Button
        onClick={toggleModal}
        className="border-solid px-[7px] py-2 bg-red-500 text-white font-semibold hover:bg-red-700"
      >
        Đánh Giá
      </Button>
      {isModalOpen && (
        <div
          className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl text-center mx-auto font-semibold text-gray-900">
                Review sản phẩm
              </h3>
              <button
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <ReactStars
                numberOfStars={5}
                count={5}
                size={12}
                color2={"#ffd700"}
              />
              <p className="text-base leading-relaxed text-gray-500">
                <input
                  placeholder="Cảm nhận của bạn về sản phẩm? "
                  className="w-full pb-32 border-[1px] border-solid border-gray-300 px-2 pt-1"
                  type="text"
                />
              </p>
            </div>
            <div className="flex text-right items-center p-4 md:p-5 border-t justify-end border-gray-200 rounded-b gap-2">
              <Button className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-500 rounded-lg border border-gray-200 hover:bg-red-700">
                Cancel
              </Button>
              <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Đánh giá
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalReviews;
