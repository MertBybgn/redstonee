import cn from "classnames";
import React from "react";
import "./text.scss";

const style = {
  common: "headline",

  font: {
    xsm: "text-xsm",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xxl: "text-xxl",
  },
};

const TextTitle = ({ children, fontSize, bold, className, ...props }) => {
  return (
    <span
      className={cn(style.font[fontSize], bold && "bold", className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default TextTitle;
