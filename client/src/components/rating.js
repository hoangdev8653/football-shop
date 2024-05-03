import { Rate } from "antd";
function Rating({ rating, disabled, onRateChange }) {
  const handleChange = (value) => {
    onRateChange(value); // Truyền giá trị số sao lên component cha
  };

  return (
    <div className="">
      <Rate value={rating} disabled={disabled} onChange={handleChange} />
    </div>
  );
}

export default Rating;
