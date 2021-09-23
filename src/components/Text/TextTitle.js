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
  color: {
    gray: "text-gray",
    white: "text-white",
  },
};

const TextTitle = ({
  children,
  fontSize,
  bold,
  color,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        style.font[fontSize],
        style.color[color],
        bold && "bold",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

TextTitle.defaultProps = {
  fontSize: "base",
};
export default TextTitle;
