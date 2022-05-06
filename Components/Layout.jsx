import { useState, useEffect } from "react";
import Header from "./Header";
import Head from "next/head";
import Cookies from "universal-cookie";
import NewFooter from "../Components/NewFooter";
import Loader from "../Components/Loader";


const Layout = ({ children }) => {
  const [Menu, SetMenu] = useState([]);
  const [UserInfo, SetUserInfo] = useState();
  const [InfoLoaded, SetInfoLoaded] = useState(false);

  useEffect(() => {
    if (UserInfo == undefined && InfoLoaded == false) {
        MakeUserAPICall()
    }else if (UserInfo != undefined) {
      if (Menu.length == 0) {
        SetMenu(UserInfo.menu);
      }
    }
  },[InfoLoaded, Menu, UserInfo]);


  function MakeUserAPICall(){
    SetInfoLoaded(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    var raw = JSON.stringify({
      device_id: "guestuser",
      version_name: "bbtv-cms",
      version_code: "1",
      device_type: "Web",
      device_model: "postman",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://developer.zingotv.com/user", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(UserInfo)
        if (UserInfo == undefined){
          console.log("dfsdfsdfsd")
          SetUserInfo(result.results)
          SetMenu(result.results.menu);
          console.log(result.results.menu)
        }
    });
  }

  return (
    <div className="bg-[#061326]">
      <Head>
        <title>WORLD BB-TV</title>
        <link
          className="object-contain"
          rel="icon"
          href="https://developer.zingotv.com/uploads/images/default/wbbtv-icon.png"
        />
      </Head>
      {UserInfo != undefined ? (<div><Header Menu={Menu} />{children}<NewFooter /></div>): <Loader/>}
    </div>
  );
};

export default Layout;
