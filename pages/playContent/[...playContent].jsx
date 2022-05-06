/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Player from "../../Components/Player";
import Trays from "../../Components/Trays";
import { useRouter } from "next/router";
import Loader from "../../Components/Loader";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import FavoriteButton from "../../Components/FavoriteButton";

function PlayContent() {
  const Router = useRouter();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Data, setData] = useState([]);
  const [Login, setLogin] = useState(false);
  const [trayData, setTrayData] = useState([]);
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(true);
  const [language, setLanguage] = useState([]);
  const [playerTrue, setPlayerTrue] = useState(true);
  const [playerURL, setPlayerURL] = useState("");

  const URL = Router.query.playContent;

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

    fetch(`https://developer.zingotv.com/${URL}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData([result.results]);
        setLoader(false);
        setTrayData(result.results.trays);
        setImages(result.results.images.landscape);
        setPlayerURL(result.results.play_uri);
        setLanguage(result.results.languages);
      });

    const login = JSON.parse(sessionStorage.getItem("login"));
    setLogin(login);
  }, [URL]);

  console.log(Data);
  return (
    <>
      {loader ? (
        <Loader />
      ) : playerTrue ? (
        <div className="playContent">
          {Data &&
            Data.map((x) => {
              return (
                <>
                  <div className="relative" key={x.id}>
                    <img
                      className="brightness-50  w-full "
                      src={images}
                      alt="Freedom Blog"
                    />
                    <div className="top-[40%] left-[10%] md:space-y-6 absolute">
                      {x.subscription_required ? (
                        <span className="text-xs md:text-sm bg-[#def317] p-1 text-black">
                          Premium
                        </span>
                      ) : null}
                      <h1 className="text-base md:text-5xl ">{x.title}</h1>
                      <ul className="md:mt-2.5 flex text-white space-x-2 text-lg pl-0">
                        {x.duration_txt ? (
                          <li>
                            {x.duration_txt} {"|"}
                          </li>
                        ) : x.duation ? (
                          <li>
                            {x.duation} {"|"}
                          </li>
                        ) : null}
                        {x.title ? (
                          <li>
                            {x.title} {"|"}
                          </li>
                        ) : null}
                        {language.map((l) => {
                          return <li key={l.id}> {l.title}</li>;
                        })}
                      </ul>
                      {x.description ? (
                        <p className=" description text-lg md:text-xl mt-2.5  w-3/5">
                          {x.description}
                        </p>
                      ) : null}
                      <div className="flex">
                        {x.subscription_required ? (
                          <Link href="/Subscription/BuyPlan" passHref>
                            <button
                              className="banner-button sm:invisible visible bg-[#0026ff]"
                              // onClick={() => Router.push(`/playContent/${URL}`)}
                            >
                              {x.subscription_btn_name}
                            </button>
                          </Link>
                        ) : x.show_play_btn ? (
                          x.login_requred_to_play ? (
                            <>
                              {Login ? (
                                <button
                                  className="banner-button sm:invisible visible bg-[#0026ff]"
                                  onClick={() => {
                                    Router.push(`/player/${URL}`);
                                  }}
                                >
                                  {x.play_btn_name}
                                </button>
                              ) : (
                                <button
                                  className="banner-button sm:invisible visible bg-[#0026ff]"
                                  onClick={handleShow}
                                >
                                  {/* login required to play */}
                                  {x.play_btn_name}
                                </button>
                              )}
                              <button
                                className="banner-button sm:invisible visible bg-[#0026ff]"
                                onClick={handleShow}
                              >
                                {/* login required to play */}
                                {x.play_btn_name}
                              </button>
                            </>
                          ) : (
                            <button
                              className="banner-button sm:invisible visible bg-[#0026ff]"
                              onClick={() => {
                                Router.push(`/player/${URL}`);
                              }}
                            >
                              {x.play_btn_name}
                            </button>
                          )
                        ) : null}
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>{x.title}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>Please Login To Play</Modal.Body>
                          <Modal.Footer>
                            <button variant="secondary" onClick={handleClose}>
                              Close
                            </button>
                            <button variant="primary">Goto Login</button>
                          </Modal.Footer>
                        </Modal>
                        {x.trailer_uri ? (
                          <button
                            className="banner-button sm:invisible visible bg-[#07176b]"
                            onClick={lightbox_open}
                          >
                            {x.trailer_btn_name}
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: "5px solid #05185A",
                      marginTop: "10px",
                    }}
                  ></div>
                  <div className="descript">
                    <div className="md:mt-12 md:ml-10 md:mr-10 md:p-4 md:mb-12">
                      <div className="flex items-center sm:h-48 p-1">
                        <img
                          className="md:w-72 md:h-44 w-32 h-24 border-4 border-white rounded-md border-solid"
                          src={images}
                          alt=""
                        />
                        <div className="md:m-10 m-6 flex flex-col md:space-y-4 w-full">
                          <div className="flex justify-between">
                            <div className="">
                              <h1 className="text-lg md:text-5xl">{x.title}</h1>
                            </div>
                            <div>
                              {Login ? (
                                <FavoriteButton Data={x.wishlist} />
                              ) : null}
                            </div>
                          </div>
                          <p className=" description text-lg md:text-xl mt-2">
                            {x.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          <Trays Data={trayData} />
        </div>
      ) : (
        <Player Data={Data} language={language} PlayUrl={playerURL} />
      )}
    </>
  );
}

export default PlayContent;
