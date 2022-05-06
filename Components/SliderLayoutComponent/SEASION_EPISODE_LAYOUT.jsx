/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

function SEASION_EPISODE_LAYOUT({
  title_position,
  title,
  uri,
  retrieve_uri,
  items,
}) {
  const [current, SetCurrent] = useState([]);
  const [data, setData] = useState([]);
  const [seasonNo, setSeasonNo] = useState("Season 1");

  const selectedSeason =
    items &&
    items.filter((x) => {
      return x.title === seasonNo;
    });

  const uRI = selectedSeason[0].uri;
  const retrieveUri = selectedSeason[0].retrieve_uri;

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

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 3,
    arrows: true,
    afterChange: (current) => SetCurrent(current + 4),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
          arrows: true,
          afterChange: (current) => SetCurrent(current + 3.5),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          afterChange: (current) => SetCurrent(current + 3),
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
    if (data.length === 0) {
      const URL = `https://developer.zingotv.com${uRI}`;
      fetch(URL, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setData(result.results.items);
        })
        .catch((error) => console.log("error", error));
    }
  }, [data.length, uRI]);

  const updateTray = (title, uri) => {
    setSeasonNo(title);
    const URL = `https://developer.zingotv.com${uri}`;
    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.results.items);
      })
      .catch((error) => console.log("error", error));
  };
  console.log(data);
  return (
    <>
      <div className="md:m-10">
        <h1 className="md:pl-10 text-2xl font-bold tracking-wide relative">
          {title}
        </h1>

        <div className="mt-4 md:pl-8">
          {items.map((x) => {
            return (
              <span
                key={x.id}
                className={
                  seasonNo === x.title
                    ? "m-2 text-black bold bg-white p-2 rounded-md cursor-pointer "
                    : "m-2 text-black bold bg-gray-100 brightness-50 p-2 rounded-md cursor-pointer"
                }
                onClick={() => updateTray(x.title, x.uri)}
              >
                {x.title}
              </span>
            );
          })}
        </div>
        <div className="p-3">
          <Slider {...settings}>
            {data &&
              data.map((x) => {
                return (
                  <div
                    className="relative hover:scale-110 cursor-pointer"
                    key={x.id}
                  >
                    <Link href={`/description${x.uri}`} passHref>
                      <img
                        className="text-sm text-white font-semibold rounded-lg"
                        alt=""
                        src={x.images.landscape}
                      />
                    </Link>
                    <h1 className="text-sm absolute bottom-[10%] left-[10%] text-white font-semibold">
                      {x.title}
                    </h1>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SEASION_EPISODE_LAYOUT;
