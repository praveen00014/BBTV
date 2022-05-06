import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "universal-cookie";

function Login() {
  const Router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();

  var data = JSON.stringify({
    device_id: "23456432154",
    version_name: "bbtv-cms",
    version_code: "1",
    device_type: "Web",
    device_model: "postman",
  });

  var config = {
    method: "post",
    url: "https://developer.zingotv.com/login",
    params: {
      username: name,
      password: password,
    },
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const handleLoginForm = async () => {
    await axios(config).then(function (response) {
      localStorage.setItem("Data", JSON.stringify(response.data));
      cookies.set("AccessToken", response.data.results.accessToken, {
        path: "/",
      });
      cookies.set("RefreshToken", response.data.results.refreshToken, {
        path: "/",
      });
      localStorage.setItem("User", JSON.stringify("UserLoggedIn"));
      Router.push("/");
    });
  };

  return (
    <>
      <div className=" flex justify-evenly my-[5%]">
        <div className="LoginForm flex flex-col space-y-6 bg-[#142843] rounded-md p-8 mx-3">
          <h2 className=" text-4xl">Get Started</h2>
          <input
            placeholder="User Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            className="inputBox rounded-md bg-transparent p-2 border-2 border-solid border-gray-400 h-16"
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="inputBox rounded-md bg-transparent p-2 border-2 border-solid border-gray-400 h-16 "
          />
          <div className="flex justify-between items-center mx-2">
            <button
              className="bg-[#8591FD] text-lg p-1  w-auto rounded-2xl px-4 py-2"
              type="button"
              onClick={handleLoginForm}
            >
              SUBMIT
            </button>
            <span className="ml-24 md:ml-0 text-[#8591FD] ForGetButton">
              Forgot Password
            </span>
          </div>
          <p className="text-base text-center text-[#838E9F] pt-2 AccountButton">
            Don`t Have an Account Please Create Your
            <Link href="/signup">
              <a className="text-base no-underline text-[#8591FD]"> Account</a>
            </Link>
          </p>
        </div>
        <div className="hidImage">
          <img className="object-contain" src="/login.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
