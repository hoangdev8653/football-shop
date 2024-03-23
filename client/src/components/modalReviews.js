import React, { useState } from "react";
import Button from "../components/button";
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
              <div className=" text-center mx-auto">
                <div className="flex flex-row-reverse items-center justify-center">
                  <input
                    id="hs-ratings-readonly-1"
                    type="radio"
                    className="peer -ms-5 size-5 text-red-400 border-gray-400  bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    value="1"
                  />
                  <label
                    for="hs-ratings-readonly-1"
                    className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600"
                  >
                    <svg
                      className="flex-shrink-0 size-5 text-red-400  border-gray-400  w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-2"
                    type="radio"
                    className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    value="2"
                  />
                  <label
                    for="hs-ratings-readonly-2"
                    className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600"
                  >
                    <svg
                      className="flex-shrink-0 size-5 text-red-400  border-solid  w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-3"
                    type="radio"
                    className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    value="3"
                  />
                  <label
                    for="hs-ratings-readonly-3"
                    className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600"
                  >
                    <svg
                      className="flex-shrink-0 size-5 text-red-400 border-gray-400  w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-4"
                    type="radio"
                    className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    value="4"
                  />
                  <label
                    for="hs-ratings-readonly-4"
                    className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600"
                  >
                    <svg
                      className="flex-shrink-0 size-5 text-red-400 border-gray-400  w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-5"
                    type="radio"
                    className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    value="5"
                  />
                  <label
                    for="hs-ratings-readonly-5"
                    className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600"
                  >
                    <svg
                      className="flex-shrink-0 size-5 text-red-400 border-gray-400  w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </label>
                </div>
              </div>
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
