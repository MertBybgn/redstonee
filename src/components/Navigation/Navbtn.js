import cn from "classnames";
import React from "react";
import Button from "../button/Button";
import "./navigation.scss";
const Navbtn = ({ children, notify, selected, className, ...props }) => {
  return (
    <Button
      className={cn("navbtn", selected && "navButtonSelected", className)}
      {...props}
    >
      {notify > 0 && <span className="notify">{notify}</span>}
      {children}
    </Button>
  );
};

export default Navbtn;
