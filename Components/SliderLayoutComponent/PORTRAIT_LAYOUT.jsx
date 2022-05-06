/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const PORTRAIT_LAYOUT = ({
  title_position,
  title,
  uri,
  retrieve_uri,
  items,
}) => {
  const [Counter, SetCounter] = useState(1);
  const [Data, SetData] = useState([]);
  const [Current, SetCurrent] = useState([]);
  const Router = useRouter();

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: true,
    afterChange: (current) => SetCurrent(current + 6),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          arrows: true,
          afterChange: (current) => SetCurrent(current + 5),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 2,
          arrows: false,
          afterChange: (current) => SetCurrent(current + 4),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          afterChange: (current) => SetCurrent(current + 3),
        },
      },
    ],
  };

  useEffect(() => {
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

    if (Data.length === Current) {
      ++Counter;
      var URLS = `https://developer.zingotv.com${retrieve_uri}`;
      var URL = URLS.replace("[PAGE_NUMBER]", Counter);
      fetch(URL, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          SetData(() => [...Data, ...result.results.items]);
          if (result.results.items.length === 0) {
            SetCounter(1);
          }
        })
        .catch((error) => console.log("error", error));
    }

    if (items.length === 0 && Data.length === 0) {
      var URL = `https://developer.zingotv.com${uri}`;
      fetch(URL, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          SetData(() => [...Data, ...result.results.items]);
          if (result.results.items.length === 0) {
            SetCounter(1);
          }
        })
        .catch((error) => console.log("error", error));
    }
    if (Data.length === 0) {
      SetData(items);
    }
  }, [Counter, Current, Data, Data.length, items, retrieve_uri, uri]);

  const routeFunction = (id, uri, layout) => {
    if (Router.asPath === "/menu_1") {
      Router.push({
        pathname: `/playContent/${id}`,
        query: { Uri: uri, layout: layout },
      });
    } else {
      Router.push({
        pathname: `/descriptionPage${uri}`,
        query: { layout: layout },
      });
    }
  };

  return (
    <>
      <div className=" layoutHeight md:m-10 portrait">
        <h1 className="text-base lg:text-2xl md:m-2 mt-2 md:pl-4">{title}</h1>
        <Slider {...settings} className="flex items-center">
          {Data &&
            Data.map((x) => {
              return (
                <div
                  key={x.id}
                  className={
                    title_position === "hover"
                      ? "HoverOpacity relative hover:scale-110 p-3 cursor-pointer"
                      : "hover:scale-110 py-3 px-2.5 cursor-pointer relative"
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
                        ? "transform  transition object-contain rounded-xl absolute"
                        : "transform  transition object-contain rounded-xl"
                    }
                    alt="images"
                    src={x.images.portrait}
                    objectFit="contain"
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
                  <h3
                    className={
                      title_position === "hover"
                        ? "Opacity text-sm absolute bottom-[10%] left-[10%] text-white z-10 flex font-semibold"
                        : title_position === "bottom"
                        ? "text-sm text-white text-center"
                        : "invisible text-sm text-white text-center"
                    }
                  >
                    {x.title}
                  </h3>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default PORTRAIT_LAYOUT;
