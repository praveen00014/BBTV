/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const SMALL_LANDSCAPE_LAYOUT = ({
  title_position,
  title,
  uri,
  retrieve_uri,
  items,
}) => {
  const [Counter, SetCounter] = useState(1);
  const [Current, SetCurrent] = useState([]);
  const [Data, SetData] = useState([]);
  const Router = useRouter();
  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    initialSlide: 0,
    adaptiveHeight: true,
    afterChange: (current) => SetCurrent(current + 5),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          adaptiveHeight: true,
          arrows: true,
          afterChange: (current) => SetCurrent(current + 4),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          afterChange: (current) => SetCurrent(current + 3.5),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false,
          afterChange: (current) => SetCurrent(current + 2.5),
        },
      },
    ],
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NDkyMzk5MzEsImV4cCI6MTY4MDc3NTkzMSwiYXVkIjoiKi53b3JsZGJidHYuY29tIiwiaXNzIjoiV29ybGQgQkJUViIsInN1YiI6IntcInVJZFwiOjAsXCJwSWRcIjowLFwiZmlyc3ROYW1lXCI6XCJHdWVzdCBVc2VyXCIsXCJsYXN0TmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJndWVzdFwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc01vYmlsZVZlcmlmaWVkXCI6ZmFsc2UsXCJkZXZpY2VJZFwiOlwiZ3Vlc3R1c2VyXCIsXCJkZXZpY2VUeXBlXCI6XCJBbmRyb2lkIFRWXCIsXCJ2ZXJzaW9uTmFtZVwiOlwiYmJ0di1jbXNcIixcInZlcnNpb25Db2RlXCI6XCIxXCIsXCJkZXZpY2VNb2RlbFwiOlwicG9zdG1hblwiLFwiaXBcIjpcIjU5LjE0NC45Ni4xMTdcIixcImNvdW50cnlDb2RlXCI6XCJJTlwifSJ9.yRAwn_fpap6aqpb5eoo8fQwNJoznS13_5Tdmzayt1UYFVWSJMXcoaS_CXS4bbZ37w8UxnyyG0vh_ItFLQxMAwA"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      device_id: "guestuser",
      apk_version_name: "bbtv-cms",
      apk_version_code: "1",
      device_type: "web",
      device_model: "postman",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    if (Data.length === Current) {
      ++Counter;
      var URLS = `https://developer.zingotv.com${retrieve_uri}`;
      var URL = URLS.replace("[PAGE_NUMBER]", Counter);

      fetch(URL, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          SetData(() => [...items, ...result.results.items]);
          if (result.results.items.length === 0) {
            SetCounter(1);
          }
        })
        .catch((error) => console.log("error", error));
    }
    if (items.length === 0) {
      var URLS = `https://developer.zingotv.com${retrieve_uri}`;
      var URL = URLS.replace("[PAGE_NUMBER]", 1);
      fetch(URL, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          SetData(() => [result.results.items]);
        })
        .catch((error) => console.log("error", error));
    } else {
      SetData(items);
    }
  }, [Counter, Current, Data.length, items, retrieve_uri]);

  return (
    <>
      <div className="layoutHeight md:m-10 smallLandscape">
        <h1 className="text-base lg:text-2xl md:m-2 mt-2 md:pl-4">{title}</h1>
        <Slider {...settings} className="flex items-center space-x-4">
          {Data &&
            Data.map((x) => {
              return (
                <div
                  key={x.id}
                  className={
                    title_position === "hover"
                      ? "HoverOpacity relative hover:scale-110 p-1 md:px-2.5 md:py-3 cursor-pointer"
                      : "hover:scale-110 p-1 md:p-3 cursor-pointer relative"
                  }
                >
                  {/* premium icon */}
                  {/* <img
                      src="/Icons/6517343.png"
                      alt=""
                      width={20}
                      height={20}
                      className="top-4 left-4 absolute"
                    /> */}
                  <img
                    className={
                      title_position === "hover"
                        ? "transform  transition object-contain rounded-xl"
                        : "transform transition   object-contain rounded-xl"
                    }
                    alt="images"
                    src={x.images.landscape}
                    onClick={() =>
                      Router.push(
                        `${x.content_type}` === "LIVE"
                          ? `/playContent${x.uri}`
                          : `${x.layout}` === "LAUNCHER_ITEM"
                          ? `/en${x.uri}`
                          : `/description${x.uri}`
                      )
                    }
                  />
                  <h1
                    className={
                      title_position === "hover"
                        ? "Opacity text-sm  bottom-[10%] left-[10%] absolute z-10 flex text-white font-semibold"
                        : title_position === "bottom"
                        ? "text-sm text-white text-center"
                        : "invisible text-sm text-white text-center"
                    }
                  >
                    {x.title}
                  </h1>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default SMALL_LANDSCAPE_LAYOUT;
