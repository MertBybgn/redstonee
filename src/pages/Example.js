import React from "react";
import Navbtn from "../components/Navigation/Navbtn";
import { Home } from "../components/icons";
import Button from "../components/button/Button";
import Navigation from "../components/Navigation/Navigation";
import TextTitle from "../components/Text/TextTitle";
import HeadTitle from "../components/Text/HeadTitle";
import Picture from "../components/Avatar/Picture";
const Example = () => {
  return (
    <div>
      <h1>components Example Testing </h1>
      <Button>Save </Button>
      <div style={{ height: "50px" }}></div>
      <Navbtn selected notify="10">
        <Home />
        Save
      </Navbtn>
      <div style={{ height: "50px" }}></div>

      <Navigation />

      <div style={{ height: "10px", display: "flex" }}>
        <div>
          <div style={{ height: "50px" }}></div>
          <TextTitle fontSize="sm"> Helo Words </TextTitle>
          <div style={{ height: "10px" }}></div>
          <TextTitle fontSize="base" bold>
            Helo Words
          </TextTitle>
          <div style={{ height: "10px" }}></div>
          <TextTitle fontSize="lg"> Helo Words </TextTitle>

          <TextTitle fontSize="xl" bold>
            Helo Worddds
          </TextTitle>
        </div>
        <div>
          <div style={{ height: "20px" }}></div>
          <HeadTitle fontSize="xl">Helo Words</HeadTitle>
          <div style={{ height: "20px" }}></div>
          <HeadTitle fontSize="lg">Helo Words</HeadTitle>
          <div style={{ height: "20px" }}></div>
          <HeadTitle fontSize="base">Helo Words</HeadTitle>
          <div style={{ height: "20px" }}></div>

          <HeadTitle fontSize="xsm">Helo Words</HeadTitle>
          <HeadTitle fontSize="xxl">Helo Words</HeadTitle>
        </div>
      </div>
      <div style={{ height: "200px" }}></div>

      <Picture size="sm" rounded />
      <Picture size="base" rounded />
      <Picture size="lg" rounded />
      <Picture size="xl" rounded />
    </div>
  );
};

export default Example;
