import React, { useState, useEffect } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";
import Loader from "../../Components/Loader";
import Slider from "react-slick";

function BuyPlan() {
  const Router = useRouter();
  const Url = Router.asPath;
  var URL = Url.replace("/Subscription", "");
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const packageCount = data.length;
  const features = data.map((x) => x.features);
  console.log(features);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NDkwNjcxMTYsImV4cCI6MTY4MDYwMzExNiwiYXVkIjoiKi53b3JsZGJidHYuY29tIiwiaXNzIjoiV29ybGQgQkJUViIsInN1YiI6IntcInVJZFwiOjAsXCJwSWRcIjowLFwiZmlyc3ROYW1lXCI6XCJHdWVzdCBVc2VyXCIsXCJsYXN0TmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJndWVzdFwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc01vYmlsZVZlcmlmaWVkXCI6ZmFsc2UsXCJkZXZpY2VJZFwiOlwiZ3Vlc3R1c2VyXCIsXCJkZXZpY2VUeXBlXCI6XCJBbmRyb2lkIFRWXCIsXCJ2ZXJzaW9uTmFtZVwiOlwiYmJ0di1jbXNcIixcInZlcnNpb25Db2RlXCI6XCIxXCIsXCJkZXZpY2VNb2RlbFwiOlwicG9zdG1hblwiLFwiaXBcIjpcIjU5LjE0NC45Ni4xMTdcIixcImNvdW50cnlDb2RlXCI6XCJJTlwifSJ9.3tVTIFJLvBRXR9caooWKubV3P1-pUKX7Y68TVcojD0LJwmXEdbJlQBD4Ti3BfGAVg8ept67S2gNNyKYd8Bu3Zw`
    );

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

    fetch(`https://developer.zingotv.com${URL}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.results);
        setData(result.results.packages);
        setLoader(false);
      });
  }, [URL]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: packageCount === 1 ? 1 : packageCount === 2 ? 2 : 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed: 500,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          speed: 500,
          autoplay: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="container md:m-20 mt-3">
          <div className="main-header">
            <h1 className="md:text-4xl text-center">Subscribe To Watch</h1>
            <div className="text-center mt-2 mb-5">
              <Slider {...settings} className="flex justify-evenly">
                {data.map((x) => {
                  return (
                    <div
                      className="  bg-[#122742] md:min-w-[300px] md:max-w-[450px] min-w-[250px] rounded-lg border-4 border-[#122742]  md:m-2 "
                      key={x.id}
                    >
                      <h2 className="text-3xl items-center border-none p-2 text-[#445c7b]">
                        {x.amount_prefix}
                      </h2>
                      <div className="space-y-4 bg-[#091a2f] pt-4 pb-4 ">
                        <div className="flex items-baseline justify-center">
                          <span className="text-lg text-[#445c7b]">$</span>
                          <h1 className="text-center text-[#445c7b]">
                            {x.amount}
                          </h1>
                        </div>
                        <div>
                          <ul className="text-start text-[#445c7b] space-y-2 pl-4">
                            {x.features.map((y) => {
                              return (
                                <li className="flex items-center" key={y.id}>
                                  <MdDoubleArrow />
                                  {y.name}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        {/* <Link href={`/buynow/${x.uri}`} passHref> */}
                        <button className="bg-[#0026ff] text-white p-2.5  pl-5 pr-5 rounded-lg">
                          Buy Now
                        </button>
                        {/* </Link> */}
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BuyPlan;
