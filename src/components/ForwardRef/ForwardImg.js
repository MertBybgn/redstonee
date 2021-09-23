import React from "react";
import "./forwardref.scss";
const ForwardImg = ({ href }) => {
  return (
    <div className="imge">
      <img className="img" src={href} alt="" />
    </div>
  );
};

export default ForwardImg;
