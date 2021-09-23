import React from "react";

import "../styles/variables.scss";
import "../styles/reset.scss";
import "./layout.scss";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import ExtraSidebar from "./ExtraSidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar className="navbar" />
      <div className="layout container">
        <div className="grid">
          <Sidebar className="sidebar" />

          <Main className="main">{children}</Main>

          <ExtraSidebar className="extra" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
