import React from "react";
import Navigation from "../components/Navigation/Navigation";

const Navbar = ({ ...props }) => {
  return (
    <div {...props}>
      <div className=" header  container">
        <div className="logo"></div>
        <div className="search"></div>
        <div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
