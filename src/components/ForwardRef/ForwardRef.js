import React from "react";
import { Like, Reply, Share, Retweet } from "../icons/index";
import ForwardImg from "./ForwardImg";
import TextTitle from "../Text/TextTitle";
import Picture from "../Avatar/Picture";
const ForwardRef = ({ children }) => {
  return (
    <article>
      <div className="content-forwardRef">
        <div className="who-reply text-gray">
          <Reply className="icon" />
          <TextTitle fontSize="xsm">Mahmut Gündoğdu liked</TextTitle>
        </div>
        <div className="content">
          <div className="profil-box">
            <Picture rounded size="sm" />
          </div>
          <div>
            <div className="info">
              <div className="text">
                <TextTitle fontSize="base">Mert Baybağan</TextTitle>
                <TextTitle color="gray" fontSize="sm">
                  @mertbaybagan
                </TextTitle>
                <TextTitle color="gray" fontSize="base">
                  ·
                </TextTitle>
                <TextTitle color="gray" fontSize="sm">
                  16h
                </TextTitle>
              </div>
              <div>
                <svg viewBox="0 0 24 24">
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
            </div>

            <TextTitle fontSize="base">
              Elo, it's been three years, and there is still no news on this
              matter. There are thousands of Model 3 cars in Turkey, but with no
              official support. I wonder if you have some concrete information
              and would like to share it with us :)
            </TextTitle>
          </div>
        </div>
        <div>
          <div>
            <ForwardImg href="https://pbs.twimg.com/media/E_y7xnwVcAU-Q1n?format=jpg&name=small" />
          </div>
          <div>
            <div>
              <Reply /> <TextTitle>17</TextTitle>
            </div>
            <div>
              <Retweet /> <TextTitle>17</TextTitle>
            </div>
            <div>
              <Like /> <TextTitle>17</TextTitle>
            </div>
            <div>
              <Share /> <TextTitle>17</TextTitle>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ForwardRef;
