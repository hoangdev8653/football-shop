import React, { useState } from "react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import Comment from "../../../components/comment";

function Reviews({ data }) {
  const [isShow, setIsShow] = useState(false);

  const handleShowReviews = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <div
        onClick={handleShowReviews}
        id="Reviews"
        style={
          isShow
            ? { backgroundColor: "rgba(0,0,0,0.03)" }
            : { backgroundColor: "white" }
        }
        className="w-full font-bold border-solid border-t-[1px] border-b-[1px]"
      >
        <span className=" flex py-2 ml-4 cursor-pointer hover:text-white">
          {isShow ? (
            <IoMdArrowUp className="font-bold text-2xl" />
          ) : (
            <IoMdArrowDown className="font-bold text-2xl" />
          )}
          <span>Reviews</span>
        </span>
      </div>
      {isShow ? (
        <div className="bg-white w-full">
          <Comment data={data} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Reviews;
