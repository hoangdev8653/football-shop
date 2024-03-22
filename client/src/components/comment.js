import React, { useEffect, useState } from "react";
import Ratting from "../components/rating";
import Button from "../components/button";
import user from "../assets/user_deafaute.jpg";
import { AiTwotoneLike } from "react-icons/ai";
import { getReviewsByProduct } from "../apis/reviews";
import FormatDate from "../utils/formatDate";
function Comment({ data }) {
  const productId = data._id;
  const [like, setLike] = useState(false);

  const handleLikeComment = () => {
    setLike(!like);
    console.log(like);
  };

  const [content, setContent] = useState([]);

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
              <Ratting />
            </div>
            <div className=" flex justify-center text-center gap-2 mx-2">
              <Button className="border-[1px] border-solid border-gray-300 py-1 px-4">
                Tất cả {content.length}
              </Button>
              <Button className="border-[1px] border-solid border-gray-300 py-0 px-4">
                5 Sao (200)
              </Button>
              <Button className="border-[1px] border-solid border-gray-300 py-0 px-4">
                4 Sao (100)
              </Button>
              <Button className="border-[1px] border-solid border-gray-300 py-0 px-4">
                3 sao (50)
              </Button>
              <Button className="border-[1px] border-solid border-gray-300 py-0 px-4">
                2 sao (40)
              </Button>
              <Button className="border-[1px] border-solid border-gray-300 py-0 px-4">
                1 sao (20)
              </Button>
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
                        <Ratting rating={item.rating} />
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
