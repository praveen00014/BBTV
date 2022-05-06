import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "../../Components/Loader";
import SPOTLIGHT_LAYOUT from "../../Components/SliderLayoutComponent/SPOTLIGHT_LAYOUT";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "react-loading";
import Trays from "../../Components/Trays";

function LAUNCHER_ITEM({ title_position, title, uri, retrieve_uri, items }) {
  const [Banner, SetBanner] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [ApiData, SetApiData] = useState(items);
  const [loader, setLoader] = useState(true);
  const [Url, SetUrl] = useState(retrieve_uri);
  const [page, setPage] = useState(2);
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

  const retreiveData = async () => {
    var URLS = `https://developer.zingotv.com${Url}`;
    var URL = URLS.replace("[PAGE_NUMBER]", page);
    const res = await fetch(URL, requestOptions);
    const data = await res.json();
    return data.results.trays ? data.results.trays : data.results.items;
  };

  const dataFetch = async () => {
    const traysData = await retreiveData();
    if (traysData.length > 0) {
      SetApiData([...ApiData, ...traysData]);
      setPage(page + 1);
    } else {
      setHasMore(false);
      setPage(1);
    }
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

    if (uri) {
      fetch(`https://developer.zingotv.com${uri}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.results.spotlight === undefined) {
            SetBanner(null);
            SetApiData(result.results);
            SetUrl(result.results.retrieve_uri);
            setLoader(false);
          } else {
            SetBanner(result.results.spotlight.items);
            SetApiData(result.results);
            SetUrl(result.results.retrieve_uri);
            setLoader(false);
          }
        })
        .catch((error) => console.log("error", error));
    }
  }, [uri]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          {Banner !== null ? <SPOTLIGHT_LAYOUT Data={Banner} /> : null}
          <div
            style={{
              background: "#061326",
            }}
          >
            <InfiniteScroll
              className=" h-full"
              dataLength={ApiData.length}
              next={dataFetch}
              hasMore={hasMore}
              loader={
                <Loading
                  type="spinningBubbles"
                  color="#FFFFFF"
                  height={50}
                  width={50}
                  className="mx-auto m-10"
                ></Loading>
              }
            >
              <Trays Data={ApiData} />
            </InfiniteScroll>
          </div>
        </>
      )}
    </>
  );
}

export default LAUNCHER_ITEM;
