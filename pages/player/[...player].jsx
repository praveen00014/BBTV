/* eslint-disable @next/next/no-css-tags */
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import StarRatings from "react-star-ratings";
import Head from "next/head";
import "@videojs/themes/dist/fantasy/index.css";
import Script from "next/script";
import Image from "next/image";
import "videojs-contrib-ads";
import "videojs-ima";
import { GoUnmute, GoMute } from "react-icons/go";
import { FaPause, FaPlay } from "react-icons/fa";
import axios from "axios";

function Player() {
  const Router = useRouter();
  const RUL = Router.asPath;
  const URL = RUL.replace("/player", "");
  const [VideoDetails, setVideoDetails] = useState();
  const [PlayInfo, setPlayInfo] = useState();
  const [Play, setPlay] = useState();
  const [Data, setData] = useState("");
  const [language, setLanguage] = useState("");
  const [PLAYING_STATUS, setPLAYING_STATUS] = useState();
  const [TOTAL_DURATION, setTOTAL_DURATION] = useState();
  const [CURRENT_PLAYING_POSITION, setCURRENT_PLAYING_POSITION] = useState();
  const [Is_drm, setIs_drm] = useState();
  const [Is_live, setIs_live] = useState();
  const [Manage_trp, setManage_trp] = useState();
  const [Trp_intervel_sec, setTrp_intervel_sec] = useState();
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [LastTRP, setLastTRP] = useState(0);
  

  function GetVideDetails(){
    console.log(URL)
    if (URL != "/[...player]"){
      apiCall(URL)
    }
  }

  function apiCall(url){
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
      fetch(`https://developer.zingotv.com`+url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.results.layout != null) {
          setData([result.results]);
          setLanguage(result.results.languages);
          setVideoDetails(result.results)
          apiCall(result.results.play_uri)
        }else if (result.results.uri != null) {
          setPlayInfo(result.results)
          setPlay(result.results.uri);
        }
      });
  }

  useEffect(() => {
    if (VideoDetails == undefined) {
      GetVideDetails()
    }

    if (videoRef.current) {
      if (Play) {
        videojs(videoRef.current, {
          sources: [
            {
              src: Play,
              type: "application/x-mpegURL",
            },
          ],
        });
      }
    }
  });


  function onVideoPlay(duration){
      console.log("Video played at: ", duration);
      console.log(PlayInfo)
      if (PlayInfo.manage_trp == true) {
        console.log(videoRef.current.duration)
        console.log(videoRef.current.currentTime)
      }
  }

  function onVideoPause(duration){
      console.log("Video paused at: ", duration);
  }

  function onVideoTimeUpdate(duration){
    if (videoRef.current.currentTime > (LastTRP+PlayInfo.trp_intervel_sec)){
        setLastTRP(videoRef.current.currentTime)
    }
      //console.log("Time updated: ", duration);
  }

  function onVideoSeeking(duration){
      console.log("Video seeking: ", duration);
  }

  function onVideoSeeked(from, to){
      console.log(`Video seeked from ${from} to ${to}`);
  }




  //useEffect(() => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append(
  //     "Authorization",
  //     `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NDkwNjcxMTYsImV4cCI6MTY4MDYwMzExNiwiYXVkIjoiKi53b3JsZGJidHYuY29tIiwiaXNzIjoiV29ybGQgQkJUViIsInN1YiI6IntcInVJZFwiOjAsXCJwSWRcIjowLFwiZmlyc3ROYW1lXCI6XCJHdWVzdCBVc2VyXCIsXCJsYXN0TmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJndWVzdFwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc01vYmlsZVZlcmlmaWVkXCI6ZmFsc2UsXCJkZXZpY2VJZFwiOlwiZ3Vlc3R1c2VyXCIsXCJkZXZpY2VUeXBlXCI6XCJBbmRyb2lkIFRWXCIsXCJ2ZXJzaW9uTmFtZVwiOlwiYmJ0di1jbXNcIixcInZlcnNpb25Db2RlXCI6XCIxXCIsXCJkZXZpY2VNb2RlbFwiOlwicG9zdG1hblwiLFwiaXBcIjpcIjU5LjE0NC45Ni4xMTdcIixcImNvdW50cnlDb2RlXCI6XCJJTlwifSJ9.3tVTIFJLvBRXR9caooWKubV3P1-pUKX7Y68TVcojD0LJwmXEdbJlQBD4Ti3BfGAVg8ept67S2gNNyKYd8Bu3Zw`
  //   );

  //   var raw = JSON.stringify({
  //     device_id: "guestuser",
  //     apk_version_name: "bbtv-cms",
  //     apk_version_code: "1",
  //     device_type: "web",
  //     device_model: "postman",
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   const delay = 1000 * Trp_intervel_sec;
  //   const trp_Response = async () => {
  //     if (Manage_trp) {
  //       if (Is_live) {
  //         const URL2 = trp_uri
  //           .replace("[TOTAL_DURATION]", 0)
  //           .replace("[CURRENT_PLAYING_POSITION]", 0)
  //           .replace("[PLAYING_STATUS]", PLAYING_STATUS);
  //         await fetch(`https://developer.zingotv.com${URL2}`, requestOptions)
  //           .then((response) => response.json())
  //           .then((result) => {
  //             console.log("trp_Live", result);
  //           });
  //       } else {
  //         const URL2 = trp_uri
  //           .replace("[TOTAL_DURATION]", TOTAL_DURATION)
  //           .replace("[CURRENT_PLAYING_POSITION]", CURRENT_PLAYING_POSITION)
  //           .replace("[PLAYING_STATUS]", PLAYING_STATUS);
  //         console.log(URL2);
  //         await fetch(`https://developer.zingotv.com${URL2}`, requestOptions)
  //           .then((response) => response.json())
  //           .then((result) => {
  //             console.log("trp_Offline", result);
  //           });
  //       }
  //     }
  //   };

  // const interval = setInterval(() => {
  //     trp_Response();
  //   }, delay);
  //   return () => clearInterval(interval);
  // }, [
  //   CURRENT_PLAYING_POSITION,
  //   Is_live,
  //   Manage_trp,
  //   PLAYING_STATUS,
  //   TOTAL_DURATION,
  //   Trp_intervel_sec,
  //   trp_uri,
  // ]);

  setInterval(() => {
    // setTOTAL_DURATION(videoRef.current?.duration);
    // setCURRENT_PLAYING_POSITION(videoRef.current?.currentTime);
    // if (videoRef.current?.paused) {
    //   setPLAYING_STATUS(2);
    // } else {
    //   setPLAYING_STATUS(1);
    // }
   // console.log(videoRef.current)
    //console.log(videoRef.current?.currentTime)
  }, 1000);

  return (
    <div>
      <Head></Head>
      <Script
        type="text/javascript"
        src="http://imasdk.googleapis.com/js/sdkloader/ima3.js"
      ></Script>

      <div className="md:h-[70vh] ">
        <video
          controls
          autoPlay
          ref={videoRef}
          id="VideoId"
          onPlay={onVideoPlay}
          onPause={onVideoPause}
          onTimeUpdate={onVideoTimeUpdate}
          onSeeking={onVideoSeeking}
          onSeeked={onVideoSeeked}
          className="video-js vjs-default-skin vjs-big-play-centered"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="md:mt-10 md:mx-16 mt-3 mx-3 md:space-y-6 md:mb-10 mb-4">
        {Data &&
          Data.map((x) => {
            return (
              <div key={x.id}>
                <h1 className="text-base md:text-3xl ">{x.title}</h1>
                {x.imdb && (
                  <div className="flex">
                    {x.imdb ? (
                      <div className="flex">
                        <StarRatings
                          rating={1}
                          starDimension="30"
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
                  <p className=" description text-lg text-white md:text-xl mt-2.5 ">
                    {x.description}
                  </p>
                ) : null}
                <ul className="md:mt-2.5 flex text-white md:space-x-3 text-lg pl-0">
                  <li>
                    {x.duration_txt ? x.duration_txt : x.duation} | {x.title} |{" "}
                    {language &&
                      language.map((l) => {
                        return l.title;
                      })}
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Player;
