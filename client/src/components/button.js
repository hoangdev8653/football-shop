import React from "react";

function button({
  type = "button",
  borderColor,
  backgroundColor,
  hoverColor,
  classname,
  text,
}) {
  return (
    <button type={type} className={borderColor}>
      {text}
    </button>
  );
}

export default button;
