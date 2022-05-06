import axios from "../Api/Api";
import Cookies from "universal-cookie";

export const RefreshToken = async () => {
  const cookies = new Cookies();
  const RefreshToken = cookies.get("RefreshToken");
  const Url = "/user";

  var data = JSON.stringify({
    device_id: "guestuser",
    version_name: "bbtv-cms",
    version_code: "1",
    device_type: "Android TV",
    device_model: "postman",
    token: `${RefreshToken}`,
  });

  var config = {
    method: "post",
    url: Url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const req = await axios(config).then(function (response) {
    console.log("refreshToken");
    cookies.set("AccessToken", response.data.results.accessToken, {
      path: "/",
    });
    cookies.set("RefreshToken", response.data.results.refreshToken, {
      path: "/",
    });
    return response.data.results.accessToken;
  });
  return req;
};
