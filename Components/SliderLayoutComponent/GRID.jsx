/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const GRID = ({ title_position, title, uri, retrieve_uri, items }) => {
  const [Counter, SetCounter] = useState(1);
  const [Data, SetData] = useState([]);
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

    if (retrieve_uri !== null) {
      var URLS = `https://developer.zingotv.com${retrieve_uri}`;
      var URL = URLS.replace("[PAGE_NUMBER]", Counter);
      let isApiSubscribed = true;
      if (isApiSubscribed) {
        fetch(URL, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            SetData(() => result.results.items);
          })
          .catch((error) => console.log("error", error));
      }
      return () => {
        isApiSubscribed = false;
      };
    } else {
      () => SetData(null);
    }
  }, [Counter, retrieve_uri]);

  return (
    <>{}
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
                      src={x.images.landscape}
                      alt=""
                      className={
                        title_position === "hover"
                          ? "HoverOpacity p-1 md:p-2  object-contain rounded-xl"
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
    </>
  );
};

export default GRID;
