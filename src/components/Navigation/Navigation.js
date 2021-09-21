import React from "react";
import { MENU } from "../../constants/index";
import Navbtn from "./Navbtn";
import { useLocation } from "react-router-dom";
import "./navigation.scss";
import TextTitle from "../Text/TextTitle";
const Navigation = () => {
  const router = useLocation();

  console.log(router.pathname);
  return (
    <nav className="nav">
      {MENU.map((menu) => {
        const selected = router.pathname === menu.path;

        return (
          <Navbtn
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
          >
            {selected ? menu.iconSelected : menu.icon}
            <TextTitle> {menu.title}</TextTitle>
          </Navbtn>
        );
      })}
    </nav>
  );
};

export default Navigation;
