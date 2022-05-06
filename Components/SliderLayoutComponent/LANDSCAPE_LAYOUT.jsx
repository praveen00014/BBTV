/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const LANDSCAPE_LAYOUT = ({
  title_position,
  title,
  uri,
  retrieve_uri,
  items,
}) => {
  const [Counter, SetCounter] = useState(1);
  const [Data, SetData] = useState([]);
  const [Current, SetCurrent] = useState([]);
  const [RequestSent, SetRequestSent] = useState(false);
  const Router = useRouter();


  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NDkwNjcxMTYsImV4cCI6MTY4MDYwMzExNiwiYXVkIjoiKi53b3JsZGJidHYuY29tIiwiaXNzIjoiV29ybGQgQkJUViIsInN1YiI6IntcInVJZFwiOjAsXCJwSWRcIjowLFwiZmlyc3ROYW1lXCI6XCJHdWVzdCBVc2VyXCIsXCJsYXN0TmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJndWVzdFwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc01vYmlsZVZlcmlmaWVkXCI6ZmFsc2UsXCJkZXZpY2VJZFwiOlwiZ3Vlc3R1c2VyXCIsXCJkZXZpY2VUeXBlXCI6XCJBbmRyb2lkIFRWXCIsXCJ2ZXJzaW9uTmFtZVwiOlwiYmJ0di1jbXNcIixcInZlcnNpb25Db2RlXCI6XCIxXCIsXCJkZXZpY2VNb2RlbFwiOlwicG9zdG1hblwiLFwiaXBcIjpcIjU5LjE0NC45Ni4xMTdcIixcImNvdW50cnlDb2RlXCI6XCJJTlwifSJ9.3tVTIFJLvBRXR9caooWKubV3P1-pUKX7Y68TVcojD0LJwmXEdbJlQBD4Ti3BfGAVg8ept67S2gNNyKYd8Bu3Zw`
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


  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    afterChange: (current) => SetCurrent(current + 7),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          arrows: true,
          afterChange: (current) => SetCurrent(current + 6),
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          arrows: true,
          afterChange: (current) => SetCurrent(current + 5),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
          afterChange: (current) => SetCurrent(current + 4),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          initialSlide: 1,
          arrows: false,
          afterChange: (current) => SetCurrent(current + 3.5),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          arrows: false,
          afterChange: (current) => SetCurrent(current + 2.5),
        },
      },
    ],
  };

  useEffect(() => {
  
    if (items.length === Current && RequestSent == false) {
      SetRequestSent(true);
      ++Counter;
      var URLS = `https://developer.zingotv.com${retrieve_uri}`;
      var URL = URLS.replace("[PAGE_NUMBER]", Counter);
      fetch(URL, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          SetData([...items, result.results.items]);
          SetRequestSent(true);
        })
        .catch((error) => console.log("error", error));
    }

    if (items.length === 0 && RequestSent == false) {
      SetRequestSent(true);
      var URL = `https://developer.zingotv.com${uri}`;
      fetch(URL, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          SetData(result.results.items);
          SetRequestSent(false);
        })
        .catch((error) => console.log("error", error));
    } else {
      SetRequestSent(false);
      SetData(items);
      SetCounter(1);
    }
  }, [Counter, Current, Data.length, items, retrieve_uri, uri]);

  return (
    <>
      <div className="layoutHeight md:m-10 sm:space-y-4 LandScape">
        <h1 className="text-base lg:text-2xl md:m-2 mt-2 md:pl-4">{title}</h1>
        <Slider {...settings} className="flex items-center LandScape">
          {Data &&
            Data.map((x) => {
              return (
                <div
                  key={x.id}
                  className={
                    title_position === "hover"
                      ? "HoverOpacity relative md:hover:scale-110 p-3 cursor-pointer"
                      : "hover:scale-110 md:p-3 p-1 cursor-pointer relative"
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
                        : "transform  transition object-contain rounded-xl "
                    }
                    alt="images"
                    src={x.images?.landscape}
                    onClick={() =>
                      Router.push(
                        `${x.content_type}` === "LIVE"
                          ? `/playContent${x.uri}`
                          : `${x.layout}` === "LAUNCHER_ITEM"
                          ? `/en${x.uri}`
                          : `/description${x.uri}`
                      )
                    }
                    key={x.id}
                  />
                  <h1
                    className={
                      title_position === "hover"
                        ? "Opacity text-sm absolute bottom-[10%] left-[10%] text-white z-10 flex font-semibold"
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

export default LANDSCAPE_LAYOUT;
