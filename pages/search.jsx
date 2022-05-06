import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";
import Trays from "../Components/Trays";

function Search() {
  const Router = useRouter();
  const [search, setSearch] = useState("");
  const [trays, setTrays] = useState([]);
  function handle(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
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
  async function FetchSearchApi() {
    await fetch(
      `https://developer.zingotv.com/search/${search}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("main", result);
        if (result.results.trays.length === 0) {
          setTrays(null);
        } else {
          setTrays(result.results.trays);
        }
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    FetchSearchApi();
  });

  return (
    <>
      <div className="min-h-[50vh]">
        <div className="items-center flex justify-between ml-52 mt-5 mb-5 border-solid border-b-2 border-white w-9/12">
          <input
            placeholder="Search..."
            className="border-none bg-transparent input"
            onChange={handle}
            value={search}
            style={{ fontStyle: "40px", color: "white" }}
          />
          <span>
            <ImCross className="text-3xl m-4" onClick={() => Router.back()} />
          </span>
        </div>
        <div>
          <Trays Data={trays} />
        </div>
      </div>
    </>
  );
}

export default Search;
