import axios from "../Api/Api";
import Cookies from "universal-cookie";

export const GuestUser = async () => {
  const cookies = new Cookies();
  const AccessToken = cookies.get("AccessToken");

  var raw = JSON.stringify({
    device_id: "guestuser",
    version_name: "bbtv-cms",
    version_code: "1",
    device_type: "Android TV",
    device_model: "postman",
  });

  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
    body: raw,
    redirect: "follow",
  };

  const users = await axios("/user", requestOptions).then(function (response) {
    cookies.set("AccessToken", response.data.results.accessToken, {
      path: "/",
    });
    cookies.set("RefreshToken", response.data.results.refreshToken, {
      path: "/",
    });
    localStorage.setItem("User", JSON.stringify("UserLoggedIn"));
    localStorage.setItem("Data", JSON.stringify(response.data.results));
    return response.data.results;
  });
  return users;
};
