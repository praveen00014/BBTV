/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Carousel } from "react-bootstrap";
import { useRouter } from "next/router";

function SPOTLIGHT_LAYOUT({ Data }) {
  if (Data === undefined) {
    return null;
  }

  const addWatchLater = Data.map((x) => {
    return x.wishlist;
  });

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

  const addToWatchlist = () => {
    fetch(
      `https://developer.zingotv.com${addWatchLater.add_uri}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="">
      <Carousel interval={15000} prevLabel={null} nextLabel={null} fade>
        {Data &&
          Data.map((x) => {
            return (
              <Carousel.Item key={x.id}>
                <img className="w-full" src={x.images.poster} alt="" />
                <div className="top-[40%] left-[15%] md:space-y-4  w-[70%] absolute">
                  <h1 className="text-base md:text-5xl cursor-pointer">
                    {x.title}
                  </h1>
                  <p className="description text-white md:text-sm text-xs cursor-pointer">
                    {x.description}
                  </p>
                  <div className="">
                    <Link href={`/description${x.uri}`} passHref>
                      <button className={["banner-button  bg-[#0026ff]"]}>
                        Play Now
                      </button>
                    </Link>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
}

export default SPOTLIGHT_LAYOUT;
