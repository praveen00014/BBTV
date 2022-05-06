/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Trays from "../../Components/Trays";
import StarRatings from "react-star-ratings";
import { useRouter } from "next/router";
import Loader from "../../Components/Loader";
import FavoriteButton from "../../Components/FavoriteButton";
import Image from "next/image";
import ReactPlayer from "react-player";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import Slider from "react-slick";
import { ImCross } from "react-icons/im";

function Description() {
  const Router = useRouter();
  const RUL = Router.asPath;
  const [Login, setLogin] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const URL = RUL.replace("/description/", "");
  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [images, setImages] = useState([]);
  const [star, setStar] = useState([]);
  const [trayData, setTraysData] = useState([]);
  const [language, setLanguage] = useState([]);
  const [genres, setGenres] = useState([]);
  const [play, setPlay] = useState(false);

  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 15,
    slidesToScroll: 7,
    arrows: true,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 5,
          adaptiveHeight: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 5,
          adaptiveHeight: true,
          arrows: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  };

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

    if (URL) {
      setLoader(true);
      setPlay(false);
      fetch(`https://developer.zingotv.com/${URL}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("main", result.results);
          setData([result.results]);
          setImages(result.results.images.landscape);
          setStar(result.results.cast_crew);
          setTraysData(result.results.trays);
          setLanguage(result.results.languages);
          setGenres(result.results.genres);
          setLoader(false);
        });
    }
    const login = JSON.parse(sessionStorage.getItem("login"));
    setLogin(login);
  }, [URL]);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="text-white ">
          {Data &&
            Data.map((x) => {
              return (
                <>
                  <div className="relative">
                    {play ? (
                      <div className="relative">
                        <ReactPlayer
                          url={x.trailer_uri}
                          playing={play}
                          controls
                          width="100%"
                          height="70vh"
                        />
                        <ImCross
                          className="absolute top-4 right-4"
                          size={20}
                          onClick={() => setPlay(!play)}
                        />
                      </div>
                    ) : (
                      <>
                        <img
                          className="brightness-50 w-full "
                          src={images}
                          alt="Freedom Blog"
                        />
                        <div className="top-[30%] md:top-[40%] left-[10%] w-[70%] absolute">
                          {x.subscription_required ? (
                            <span className="text-xs md:text-sm bg-[#def317] p-1 text-black">
                              Premium
                            </span>
                          ) : null}
                          <h1 className="text-base md:text-3xl">{x.title}</h1>
                          <div className="flex md:space-x-2">
                            {x.season_title && (
                              <h1 className="text-sm">{x.season_title}</h1>
                            )}
                            {x.episode_title && (
                              <h1 className="text-sm">{x.episode_title}</h1>
                            )}
                          </div>
                          <div className="flex space-x-4 items-center ">
                            {x.imdb ? (
                              <div className="flex">
                                <StarRatings
                                  rating={1}
                                  starDimension={30}
                                  starRatedColor="yellow"
                                  numberOfStars={1}
                                  name="rating"
                                ></StarRatings>
                                <h1 className="text-2xl m-0 pl-1">{x.imdb}</h1>
                              </div>
                            ) : null}
                            <div className="mt-2.5 flex space-x-3 justify-evenly items-center">
                              {x.year && (
                                <>
                                  <span className="text-lg">{x.year}</span>
                                  <span>|</span>
                                </>
                              )}
                              {genres &&
                                genres.slice(0, 1).map((l) => {
                                  return (
                                    <>
                                      <span className="text-lg">{l.title}</span>
                                    </>
                                  );
                                })}
                            </div>
                          </div>
                          {x.description ? (
                            <p className=" description text-lg md:text-xl mt-2.5">
                              {x.description}
                            </p>
                          ) : null}
                          <div className="flex mt-2">
                            {x.subscription_required ? (
                              <Link
                                href={`/Subscription/${x.subscription_uri}`}
                                passHref
                              >
                                <button className="banner-button  bg-[#0026ff]">
                                  {x.subscription_btn_name}
                                </button>
                              </Link>
                            ) : x.show_play_btn ? (
                              x.login_requred_to_play ? (
                                <>
                                  {Login ? (
                                    <button
                                      className="banner-button  bg-[#0026ff]"
                                      onClick={() => {
                                        Router.push({
                                          pathname: `/player`,
                                          as: `/${x.title}/${x.id}/Watch`,
                                          query: {
                                            play_uri: `${x.play_uri}`,
                                            skip_button: `${x.skip_btns}`,
                                          },
                                        });
                                      }}
                                    >
                                      {x.play_btn_name}
                                    </button>
                                  ) : (
                                    <button
                                      className="banner-button  bg-[#0026ff]"
                                      onClick={handleShow}
                                    >
                                      {/* login required to play */}
                                      {x.play_btn_name}
                                    </button>
                                  )}
                                  <button
                                    className="banner-button  bg-[#0026ff]"
                                    onClick={handleShow}
                                  >
                                    {/* login required to play */}
                                    {x.play_btn_name}
                                  </button>
                                </>
                              ) : (
                                <>
                                  {/* <Link
                                    href={{
                                      pathname: `/player${URL}`,
                                      query: {
                                        play_uri: `${x.play_uri}`,
                                        skip_button: `${x.skip_btns}`,
                                      },
                                      as: `player/${x.title}/${x.id}/Watch`,
                                    }}
                                    passHref
                                  > */}
                                  <button
                                    className="banner-button bg-[#0026ff]"
                                    onClick={() => {
                                      Router.push(`/player/${URL}`);
                                    }}
                                  >
                                    {x.play_btn_name}
                                  </button>
                                  {/* </Link> */}
                                </>
                              )
                            ) : null}
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>{x.title}</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>Please Login To Play</Modal.Body>
                              <Modal.Footer>
                                <button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </button>
                                <button variant="primary">Goto Login</button>
                              </Modal.Footer>
                            </Modal>
                            {x.trailer_uri ? (
                              <button
                                className="banner-button sm:invisible visible bg-[#07176b]"
                                onClick={() => setPlay(true)}
                              >
                                {x.trailer_btn_name}
                              </button>
                            ) : null}
                            {Login ? (
                              <FavoriteButton Data={Data} className="w-56" />
                            ) : null}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="md:ml-10 md:mr-10 md:pl-4 flex flex-col items-start">
                    <h1 className="mt-4 text-sm md:text-3xl">{x.title}</h1>
                    <div className="flex space-x-2">
                      {x.season_title && (
                        <h1 className="text-sm">{x.season_title}</h1>
                      )}
                      {x.episode_title && (
                        <h1 className="text-sm">{x.episode_title}</h1>
                      )}
                    </div>
                    {x.imdb && (
                      <div className="flex">
                        {x.imdb ? (
                          <div className="flex">
                            <StarRatings
                              rating={1}
                              starDimension={30}
                              starRatedColor="yellow"
                              numberOfStars={1}
                              name="rating"
                            ></StarRatings>
                            <h1 className="text-2xl m-0 pl-1">{x.imdb}</h1>
                          </div>
                        ) : null}
                      </div>
                    )}
                    {x.description ? (
                      <p className=" description text-lg md:text-xl mt-2.5">
                        {x.description}
                      </p>
                    ) : null}
                    <ul className="mt-2.5 flex space-x-3 text-lg pl-0">
                      {x.duration_txt ? (
                        <>
                          <li>{x.duration_txt}</li>
                          <span>|</span>
                        </>
                      ) : x.duation ? (
                        <>
                          <li>{x.duation}</li>
                          <span>|</span>
                        </>
                      ) : null}
                      {x.year ? (
                        <>
                          <li>{x.year}</li>
                          <span>|</span>
                        </>
                      ) : null}
                      {language &&
                        language.map((l) => {
                          return (
                            <>
                              <li>{l.title}</li>
                              <span>|</span>
                            </>
                          );
                        })}
                      {genres &&
                        genres.slice(0, 3).map((l) => {
                          return (
                            <>
                              <li className="text-lg">{l.title}</li>
                              <span>|</span>
                            </>
                          );
                        })}
                    </ul>
                  </div>
                </>
              );
            })}
          <div className="md:ml-10 md:mr-10 md:pl-4">
            {star.length === 0 ? null : (
              <h1 className="text-2xl">Cast & Crew</h1>
            )}
            <Slider {...settings}>
              {star?.map((x) => {
                return (
                  <div
                    key={x.id}
                    className=""
                    // onClick={() => Router.push(`/en${x.uri}`)}
                  >
                    <Image
                      src={x.image}
                      alt=""
                      width={80}
                      height={80}
                      className="rounded-xl p-2"
                    />
                    <h1 className="text-center  text-xs md:text-sm w-20">
                      {x.title}
                    </h1>
                  </div>
                );
              })}
            </Slider>
          </div>

          <Trays Data={trayData} />
        </div>
      )}
    </>
  );
}

export default Description;
