import { Rate } from "antd";
function Rating({ rating, disabled, onRateChange, allowHalf }) {
  const handleChange = (value) => {
    onRateChange(value);
  };

  return (
    <div className="">
      <Rate
        value={rating}
        disabled={disabled}
        onChange={handleChange}
        allowHalf={allowHalf}
      />
    </div>
  );
}

export default Rating;
