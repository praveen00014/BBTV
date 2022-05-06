/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Trays from "../Trays";
import FavoriteButton from "../FavoriteButton";

function CONTENT_ITEM({ Data }) {
  return (
    <div className="playContent">
      {Data &&
        Data.map((x) => {
          return (
            <>
              <div className="relative">
                <img
                  className="brightness-50 h-[80vh] w-full "
                  src={images}
                  alt="Freedom Blog"
                />
                <div className="top-[40%] left-[10%] space-y-6 absolute">
                  <h1 className="text-base md:text-5xl ">{x.title}</h1>
                  <ul className="mt-2.5 flex space-x-3 text-lg">
                    <li>
                      {x.duration_txt ? x.duration_txt : x.duation} | {x.title}{" "}
                      |{" "}
                      {language.map((l) => {
                        return l.title;
                      })}
                    </li>
                  </ul>
                  {x.description ? (
                    <p className=" description text-lg md:text-xl mt-2.5  w-3/5">
                      {x.description}
                    </p>
                  ) : null}
                  <div className="">
                    {x.subscription_required ? (
                      <button
                        className="banner-button sm:invisible visible bg-[#4287f5]"
                        // onClick={() => Router.push(`/playContent/${URL}`)}
                      >
                        {x.subscription_btn_name}
                      </button>
                    ) : (
                      <>
                        <button
                          className="banner-button sm:invisible visible bg-[#4287f5]"
                          // onClick={() => Router.push(`/playContent/${URL}`)}
                        >
                          Play Now
                        </button>
                        <button
                          className="banner-button sm:invisible visible bg-[#001279]"
                          // onClick={() => Router.push(`/playContent/${URL}`)}
                        >
                          {x.play_btn_name}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderTop: "5px solid #05185A",
                  marginTop: "10px",
                }}
              ></div>
              <div className="descript">
                <div className="md:mt-12 md:ml-10 md:mr-10 md:p-4 md:mb-12">
                  <div className="flex items-center sm:h-48">
                    <img
                      className="md:w-72 md:h-44 w-24 h-24 border-4 border-white rounded-md border-solid"
                      src={images}
                      alt=""
                    />
                    <div className="md:m-10 m-6 flex flex-col md:space-y-4 w-full">
                      <div className="flex justify-between">
                        <div className="">
                          <h1 className="text-lg md:text-5xl">{x.title}</h1>
                        </div>
                        <div>
                          <FavoriteButton Data={x.wishlist} />
                        </div>
                      </div>
                      <p className=" description text-lg md:text-xl mt-2">
                        {x.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      <Trays Data={Data.trays} />
    </div>
  );
}

export default CONTENT_ITEM;
