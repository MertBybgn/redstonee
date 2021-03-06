import React from "react";
import { Like, Reply, Share, Retweet } from "../icons/index";
import ForwardImg from "./ForwardImg";
import TextTitle from "../Text/TextTitle";
import Picture from "../Avatar/Picture";
import Iconbtn from "../button/Iconbtn";
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
              <div className="info-text">
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
              <div className="m-8 pl-6">
                <Iconbtn>
                  <svg viewBox="0 0 24 24">
                    <g>
                      <circle cx="5" cy="12" r="2"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                      <circle cx="19" cy="12" r="2"></circle>
                    </g>
                  </svg>
                </Iconbtn>
              </div>
            </div>
            <div className="text">
              <TextTitle fontSize="base">
                Elo, it's been three years, and there is still no news on this
                matter. There are thousands of Model 3 cars in Turkey, but with
                no official support. I wonder if you have some concrete
                information and would like to share it with us :)
              </TextTitle>
            </div>
            <div>
              <div className="imge">
                <ForwardImg href="https://scontent.fadb1-2.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/121046160_10158452918775102_5391787301282088057_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=TkbYNVO7y-kAX9zRueb&_nc_ht=scontent.fadb1-2.fna&oh=f0f02615a6a6a4de19e48c0a1f54b5a7&oe=61772281" />
              </div>

              <div className="media text-gray">
                <div className="flex reply-hover  justify-center">
                  <Iconbtn className="text-gray icons ">
                    <Reply />
                  </Iconbtn>
                  <div className="mx-12">
                    <TextTitle fontSize="sm">17</TextTitle>
                  </div>
                </div>

                <div className="flex retweet-hover    justify-center">
                  <Iconbtn className="text-gray">
                    <Retweet />
                  </Iconbtn>
                  <div className="mx-12">
                    <TextTitle fontSize="sm">17</TextTitle>
                  </div>
                </div>

                <div className="flex  like-hover  justify-center">
                  <Iconbtn className="text-gray">
                    <Like />
                  </Iconbtn>
                  <div className="mx-12">
                    <TextTitle fontSize="sm">17</TextTitle>
                  </div>
                </div>

                <div className="flex share-hover   justify-center">
                  <Iconbtn className="text-gray">
                    <Share />
                  </Iconbtn>
                  <div className="mx-12">
                    <TextTitle fontSize="sm">17</TextTitle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ForwardRef;