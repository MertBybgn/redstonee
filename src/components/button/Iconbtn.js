import cn from "classnames";
import React from "react";
import Button from "../button/Button";
import "./button.scss";
const Iconbtn = ({ children, notify, selected, className, ...props }) => {
  return (
    <Button
      className={cn(className, "icons", selected && "navButtonSelected")}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Iconbtn;
