import React, { useEffect, useState } from "react";
import Rating from "../../../components/rating";
import Button from "../../../components/button";
import avatarDefault from "../../../assets/user_deafaute.jpg";
import { AiTwotoneLike } from "react-icons/ai";
import FormatDate from "../../../utils/formatDate";
import { getLocalStorage } from "../../../utils/LocalStorage";
import { reviewStore } from "../../../store/reviewStore";
import { MdDeleteForever } from "react-icons/md";
import Loadding from "../../../components/loadding/Loadding";

function Comment({ data }) {
  const productId = data._id;
  const {
    createReview,
    getReviewsByProduct,
    deleteReview,
    data: content,
    averageRating,
    totalRating,
    ratingLength,
    isLoading,
    like,
  } = reviewStore();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [filterStar, setFilterStar] = useState(0);
  const user = getLocalStorage("user");
  // const handleLikeComment = () => {
  //   setLike(!like);
  // };
  const handleChangeRating = (value) => {
    setRating(value);
  };
  const handleCommentText = (e) => {
    setComment(e.target.value);
  };
  const handleDeleteReview = async (id) => {
    try {
      await deleteReview(id);
    } catch (error) {
      console.log(error);
    }
  };
  const commentApi = async () => {
    try {
      await createReview({ productId, rating, comment });
      setTimeout(() => {
        console.log("số lượng cmt: ", ratingLength);
        console.log("tổng sao: ", totalRating);
        console.log("trung bình: ", averageRating);
      }, 3000);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFilterStar = (star) => {
    setFilterStar(star);
  };

  const filteredComments =
    filterStar === 0
      ? content
      : content.filter((item) => item.rating === filterStar);

  useEffect(() => {
    getReviewsByProduct(productId);
    console.log("số lượng cmt: ", ratingLength);
    console.log("tổng sao: ", totalRating);
    console.log("trung bình: ", averageRating);
  }, [productId, getReviewsByProduct]);

  return (
    <div className="comment">
      {isLoading ? (
        <Loadding />
      ) : (
        <>
          {content && content.length > 0 ? (
            <>
              <div
                style={{
                  backgroundColor: "#fffbf8",
                  border: "1px solid #f9ede5",
                }}
                className="w-full flex items-center p-4"
              >
                <div className="mx-4">
                  <p className="text-red-500 text-2xl">
                    <span className="font-semibold">
                      {Math.round((averageRating + Number.EPSILON) * 10) / 10}
                    </span>{" "}
                    trên 5
                  </p>
                  <Rating
                    allowHalf={true}
                    rating={averageRating}
                    disabled={true}
                  />
                </div>
                <div className="flex justify-center text-center gap-2 mx-2">
                  <Button
                    onClick={() => handleFilterStar(0)}
                    className="border-[1px] border-solid border-gray-300 py-1 px-4"
                  >
                    Tất cả {content.length}
                  </Button>
                  {[5, 4, 3, 2, 1].map((star) => (
                    <Button
                      key={star}
                      onClick={() => handleFilterStar(star)}
                      className="border-[1px] border-solid border-gray-300 py-0 px-4"
                    >
                      <span>
                        {star} Sao (
                        {content.filter((item) => item.rating === star).length})
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="my-2 flex">
                <div className="w-full cursor-pointer relative max-w-xl">
                  <span style={{ top: "20%", left: "3%" }} className="absolute">
                    <img
                      className="w-9 h-9 rounded-3xl"
                      src={user ? user.image : avatarDefault}
                      alt="avatar"
                    />
                  </span>
                  <input
                    onChange={handleCommentText}
                    style={{
                      border: "1px solid #e8e8e9",
                      padding: "6px 150px 10px 60px",
                    }}
                    className="text-gray-700 w-full cursor-pointer bg-white h-[60px] rounded text-sm outline-none"
                    type="text"
                    placeholder="Nhận xét về sản phẩm?"
                  />
                  <span
                    style={{ right: "3%", transform: "translateY(-50%)" }}
                    className="top-1/2 m-auto flex absolute"
                  >
                    <span className="cursor-pointer inline-flex relative text-left text-base">
                      <Rating
                        rating={rating}
                        onRateChange={handleChangeRating}
                      />
                    </span>
                  </span>
                </div>
                <div className="mt-2 ml-4">
                  <button
                    onClick={commentApi}
                    type="submit"
                    className="text-white bg-blue-500 px-3 py-2 rounded font-semibold hover:opacity-80"
                  >
                    Comment
                  </button>
                </div>
              </div>
              <section className="relative flex items-center justify-center antialiased min-w-screen">
                <div className="w-full bg-white m-2">
                  <div className="mt-2">
                    {filteredComments.map((item, index) => (
                      <div
                        key={index}
                        className="flex border-b-[1px] border-gray-400 mt-2"
                      >
                        <img
                          className="rounded-full w-[50px] h-[50px] object-cover"
                          src={user?.image || avatarDefault}
                          alt="avatar"
                        />
                        <div className="block mt-1 mx-2">
                          <p className="text-base">{user?.username || ""}</p>
                          <Rating disabled={true} rating={item.rating} />
                          <p className="text-xs">{FormatDate(item.time)}</p>
                          <p className="my-1">{item.comment}</p>
                          <div className="flex opacity-60 gap-1 mb-2">
                            <AiTwotoneLike
                              style={
                                like ? { color: "red" } : { color: "gray" }
                              }
                              // onClick={handleLikeComment}
                              className="text-xl cursor-pointer"
                            />
                            <span className="text-sm">
                              {item.like !== 0 ? item.like : ""}
                            </span>
                          </div>
                        </div>
                        <div className="absolute right-4 mt-4">
                          <MdDeleteForever
                            onClick={() => handleDeleteReview(item._id)}
                            className="text-3xl hover:opacity-60 cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          ) : (
            <div className="mx-4 mt-4">
              <p className="text-orange-500 font-bold text-lg">Reviews</p>
              <p>There are no reviews yet. Be the first to do it.</p>
              <div className="my-2 flex">
                <div className="w-full cursor-pointer relative max-w-xl">
                  <span style={{ top: "20%", left: "3%" }} className="absolute">
                    <img
                      className="w-9 h-9 rounded-3xl"
                      src={user ? user.image : avatarDefault}
                      alt="avatar"
                    />
                  </span>
                  <input
                    onChange={handleCommentText}
                    style={{
                      border: "1px solid #e8e8e9",
                      padding: "6px 150px 10px 60px",
                    }}
                    className="text-gray-700 w-full cursor-pointer bg-white h-[60px] rounded text-sm outline-none"
                    type="text"
                    placeholder="Nhận xét về sản phẩm?"
                  />
                  <span
                    style={{ right: "3%", transform: "translateY(-50%)" }}
                    className="top-1/2 m-auto flex absolute"
                  >
                    <span className="cursor-pointer inline-flex relative text-left text-base">
                      <Rating
                        allowHalf={false}
                        rating={rating}
                        onRateChange={handleChangeRating}
                      />
                    </span>
                  </span>
                </div>
                <div className="mt-2 ml-4">
                  <button
                    onClick={commentApi}
                    type="submit"
                    className="text-white bg-blue-500 px-3 py-2 rounded font-semibold hover:opacity-80"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Comment;
