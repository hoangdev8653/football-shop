import ReactStars from "react-star-ratings";

function Rating({ rating }) {
  return (
    <div className="">
      <ReactStars
        count={5}
        numberOfStars={rating}
        starEmptyColor="red" // Đặt màu cho sao trống
        starRatedColor="red" // Đặt màu cho sao đã được chọn
        size={12} // Đặt kích thước của các sao
      />
    </div>
  );
}

export default Rating;
