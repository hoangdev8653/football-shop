import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";
function WishList({ className, id }) {
  const [click, setClick] = useState(false);

  console.log("id :", id);

  const handleAddWhishList = () => {
    setClick(!click);
    toast.success("Thêm sản phẩm vào mục yêu thích");
  };
  return (
    <p onClick={handleAddWhishList} href="/" title="Add to WishList">
      <CiHeart
        style={
          click
            ? { backgroundColor: "white" }
            : { backgroundColor: "red", color: "white" }
        }
        className={`${className}  text-4xl rounded-3xl p-2 cursor-pointer hover:bg-red-600 hover:text-black `}
      />
    </p>
  );
}

export default WishList;
