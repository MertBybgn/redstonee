import cn from "classnames";
import React from "react";
import "./text.scss";
const style = {
  font: {
    xsm: "text-xsm",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xxl: "text-xxl",
  },
};

export const HeadTitle = ({
  children,
  fontSize,
  bold,
  className,
  ...props
}) => {
  return (
    <h1 className={cn(bold && "bold", style.font[fontSize])}>{children}</h1>
  );
};

HeadTitle.defaultProps = {
  fontSize: "text-base",
};

export default HeadTitle;
