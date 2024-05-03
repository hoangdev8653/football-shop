import React, { useEffect, useState } from "react";
import Ratting from "../components/rating";
import Button from "../components/button";
import user from "../assets/user_deafaute.jpg";
import { AiTwotoneLike } from "react-icons/ai";
import { getReviewsByProduct, createReview } from "../apis/reviews";
import FormatDate from "../utils/formatDate";
import { getLocalStorage } from "../utils/LocalStorage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Comment({ data }) {
  const navigate = useNavigate();
  const productId = data._id;
  const [like, setLike] = useState(false);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState([]);
  const [comment, setComment] = useState("");
  const user = getLocalStorage("user");

  const handleLikeComment = () => {
    setLike(!like);
    console.log(like);
  };

  const handleChangeRatting = (value) => {
    setRating(value);
  };
  const handleCommentText = (e) => {
    setComment(e.target.value);
  };

  const commentApi = async () => {
    try {
      const respone = await createReview({
        productId,
        rating,
        comment,
      });
      if (respone.data.status === 201) {
        toast.success("Đăng nhập thành công");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        console.log("Call api thất bại");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReviewsByProduct(productId);
        if (response.status === 200) {
          setContent(response.data.content);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="comment">
      {content && content.length > 0 ? (
        <>
          <div
            style={{ backgroundColor: "#fffbf8", border: "1px solid #f9ede5" }}
            className="w-full flex items-center p-4"
          >
            <div className="mx-4">
              <p className="text-red-500 text-2xl ">
                <span className="font-semibold">4.7</span> trên 5
              </p>
              <Ratting rating={4} disabled={true} />
            </div>
            <div className=" flex justify-center text-center gap-2 mx-2">
              <Button className="border-[1px] border-solid border-gray-300 py-1 px-4">
                Tất cả {content.length}
              </Button>
              <Button className="border-[1px] border-solid border-gray-300 py-0 px-4">
                5 Sao (1)
              </Button>
              <Button className="border-[1px] border-solid border-gray-300 py-0 px-4">
                4 Sao (0)
              </Button>
              <Button className="border-[1px] border-solid border-gray-300 py-0 px-4">
                3 sao (0)
              </Button>
              <Button className="border-[1px] border-solid border-gray-300 py-0 px-4">
                2 sao (1)
              </Button>
              <Button className="border-[1px] border-solid border-gray-300 py-0 px-4">
                1 sao (0)
              </Button>
            </div>
          </div>
          <div className="my-2 flex">
            <div className="w-full cursor-pointer relative max-w-xl ">
              <span style={{ top: "20%", left: "3%" }} className="absolute">
                <img
                  className="w-9 h-9 rounded-3xl"
                  src={user.avarta}
                  alt="ảnh lỗi"
                />
              </span>
              <input
                onChange={(e) => {
                  handleCommentText(e);
                }}
                style={{
                  border: "1px solid #e8e8e9",
                  padding: "6px 150px 10px 60px",
                }}
                className="text-gray-700 w-full cursor-pointer bg-white h-[60px] rounded text-sm outline-none"
                type="text"
                placeholder="Nhận xét về sản phẩm?"
              />
              <span
                style={{ right: "3%", transform: " translateY(-50%)" }}
                className="top-1/2 m-auto flex absolute"
              >
                <span className="cursor-pointer inline-flex relative text-left text-base">
                  <Ratting rating={rating} onRateChange={handleChangeRatting} />
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
          <section class="relative flex items-center justify-center antialiased  min-w-screen">
            <div className="w-full bg-white m-2">
              <div className=" mt-2">
                {content &&
                  content.map((item, index) => (
                    <div
                      key={index}
                      className="flex border-b-[1px] border-gray-400 mt-2"
                    >
                      <img
                        className="rounded-full w-[50px] h-[50px] object-cover"
                        src={item.userId.image || user}
                        alt="avarta"
                      />
                      <div className="block mt-1 mx-2 ">
                        <p className="text-base">{item.userId.username}</p>
                        <Ratting disabled={true} rating={item.rating} />
                        <p className="text-xs">{FormatDate(item.time)}</p>
                        <p className="my-1">{item.comment}</p>
                        <div className="flex opacity-60 gap-1 mb-2">
                          <AiTwotoneLike
                            style={like ? { color: "red" } : { color: "gray" }}
                            onClick={handleLikeComment}
                            className="text-xl cursor-pointer"
                          />
                          <span className="text-sm">{like ? 2 + 1 : 2}</span>
                        </div>
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
          <p>There are no reviews yet.</p>
        </div>
      )}
    </div>
  );
}

export default Comment;
