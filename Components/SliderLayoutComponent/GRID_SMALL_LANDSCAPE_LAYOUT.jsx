/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const GRID_SMALL_LANDSCAPE_LAYOUT = ({
  title_position,
  title,
  uri,
  retrieve_uri,
  items,
}) => {
  const [Data, setData] = useState(items);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  const Router = useRouter();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NDkwNjcxMTYsImV4cCI6MTY4MDYwMzExNiwiYXVkIjoiKi53b3JsZGJidHYuY29tIiwiaXNzIjoiV29ybGQgQkJUViIsInN1YiI6IntcInVJZFwiOjAsXCJwSWRcIjowLFwiZmlyc3ROYW1lXCI6XCJHdWVzdCBVc2VyXCIsXCJsYXN0TmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJndWVzdFwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc01vYmlsZVZlcmlmaWVkXCI6ZmFsc2UsXCJkZXZpY2VJZFwiOlwiZ3Vlc3R1c2VyXCIsXCJkZXZpY2VUeXBlXCI6XCJBbmRyb2lkIFRWXCIsXCJ2ZXJzaW9uTmFtZVwiOlwiYmJ0di1jbXNcIixcInZlcnNpb25Db2RlXCI6XCIxXCIsXCJkZXZpY2VNb2RlbFwiOlwicG9zdG1hblwiLFwiaXBcIjpcIjU5LjE0NC45Ni4xMTdcIixcImNvdW50cnlDb2RlXCI6XCJJTlwifSJ9.3tVTIFJLvBRXR9caooWKubV3P1-pUKX7Y68TVcojD0LJwmXEdbJlQBD4Ti3BfGAVg8ept67S2gNNyKYd8Bu3Zw`
    );
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    var raw = JSON.stringify({
      device_id: "guestuser",
      apk_version_name: "bbtv-cms",
      apk_version_code: "1",
      device_type: "web",
      device_model: "postman",
    });

    if (Data.length === 0) {
      var URL = `https://developer.zingotv.com${uri}`;
      let isApiSubscribed = true;
      if (isApiSubscribed) {
        fetch(URL, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setData(() => result.results.items);
          })
          .catch((error) => console.log("error", error));
      }
      return () => {
        isApiSubscribed = false;
      };
    } else {
      () => setData(null);
    }
  }, [Data.length, uri]);

  return (
    <main>
      <div className="md:m-10 Grid">
        <h1 className="text-base lg:text-2xl md:m-2 mt-2 md:pl-4 ">{title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 cursor-pointer">
          {Data &&
            Data.map((x) => {
              return (
                <>
                  <div
                    className="relative"
                    key={x.id}
                    onClick={() =>
                      Router.push(
                        `${x.content_type}` === "LIVE"
                          ? `/playContent${x.uri}`
                          : `${x.layout}` === "LAUNCHER_ITEM"
                          ? `/en${x.uri}`
                          : `/description${x.uri}`
                      )
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
                      src={x.images.landscape || Images}
                      alt=""
                      onError={(event) => {
                        event.target.src = "/category-landscape.png";
                        event.onerror = null;
                      }}
                      className={
                        title_position === "hover"
                          ? "HoverOpacity p-1 md:p-2  object-contain rounded-xl absolute"
                          : "p-1 md:p-2  object-contain rounded-xl "
                      }
                    />
                    <h1
                      className={
                        title_position === "hover"
                          ? "Opacity text-sm duration-300 absolute  z-10 flex text-white font-semibold"
                          : title_position === "bottom"
                          ? "text-center truncate text-sm lg:w-100"
                          : "invisible text-sm text-white text-center"
                      }
                    >
                      {x.title}
                    </h1>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default GRID_SMALL_LANDSCAPE_LAYOUT;
