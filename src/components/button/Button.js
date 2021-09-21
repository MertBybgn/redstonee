import React from "react";
import cn from "classnames";
import "./button.scss";
import { Link } from "react-router-dom";

function LinkButton({ href, children, ...props }) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

function Button({ full = false, children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton;

  return (
    <Comp className={cn("btn", full && "full", className)} {...props}>
      {children}
    </Comp>
  );
}

export default Button;
