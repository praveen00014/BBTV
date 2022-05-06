import axios from "axios";
import Cookies from "universal-cookie";

export default function LogOut() {
  const cookies = new Cookies();

  const AccessToken = cookies.get("AccessToken");

  var data = JSON.stringify({
    device_id: "23456432154",
    version_name: "bbtv-cms",
    version_code: "1",
    device_type: "Web",
    device_model: "postman",
  });

  var config = {
    method: "post",
    url: "https://developer.zingotv.com/logout",
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },
    data: data,
  };
  const Logout = async () => {
    axios(config)
      .then(function (response) {
        localStorage.clear();
        localStorage.setItem("login", JSON.stringify(false));
        localStorage.setItem("LogOutData", JSON.stringify(response.data));
        sessionStorage.clear();
      })
      .catch(function (error) {
        console.log(error);
      });
    return response.data;
  };

  return Logout;
}
