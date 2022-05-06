import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

function FavoriteButton({ Data }) {
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
    fetch(`https://developer.zingotv.com${Data.add_uri}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => console.log("error", error));
  };
  const removeToWatchlist = () => {
    fetch(`https://developer.zingotv.com${Data.remove_uri}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div
      className="flex border-none bg-[#08176c] rounded-full items-center md:p-3 "
      onClick={Data && Data.selected ? removeToWatchlist : addToWatchlist}
    >
      {Data && Data.selected ? (
        <MdOutlineFavorite color="white" className="text-2xl ml-1" />
      ) : (
        <MdOutlineFavoriteBorder color="white" className="text-2xl ml-1" />
      )}
      <h1 className="text-sm font-bold  hidden md:block m-0 p-2">
        {Data && Data.selected ? "Remove to Favorites" : "Add to Favorites"}
      </h1>
    </div>
  );
}
export default FavoriteButton;
