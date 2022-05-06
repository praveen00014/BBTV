import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  var data = JSON.stringify({
    device_id: "guestuser",
    version_name: "bbtv-cms",
    version_code: "1",
    device_type: "web",
    device_model: "postman",
    token:
      "if user has refresh token saved in the app need to give that refresh-token here",
  });

  var config = {
    method: "post",
    url: "https://developer.zingotv.com/register",
    params: {
      name: name,
      email: email,
      password: password,
    },
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const handleSignUp = async () => {
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        router.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex justify-evenly py-[3%] items-center">
        <div className="hidImage">
          <img className="object-contain" src="/signup.png" alt="" />
        </div>
        <div className="SignUpForm flex flex-col space-y-4 p-8 bg-[#142843] rounded-lg text-base">
          <h2 className=" text-3xl ">Create Account Get Subscription</h2>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            onChange={(e) => setName(e.target.value)}
            className="inputBox rounded-md bg-transparent border-2 border-solid border-[#2D4460] p-2 h-16"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-md bg-transparent border-2 border-solid border-[#2D4460] p-2 h-16"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-md bg-transparent border-2 border-solid border-[#2D4460] p-2 h-16"
          />
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            onChange={(e) => setNumber(e.target.value)}
            required
            className="rounded-md bg-transparent border-2 border-solid border-[#2D4460] p-2 h-16 mb-3"
          />
          <div className="flex items-center justify-between mx-3">
            <button
              type="button"
              onClick={handleSignUp}
              className="bg-[#8591FD] text-lg p-1  w-auto rounded-2xl px-4 py-2"
            >
              SUBMIT
            </button>
            <p className="text-xl text-center pl-8 text-[#838E9F]">
              Already Have an Account
              <Link href="/login">
                <a className="LginAtag text-lg text-[#8690fc]"> Login</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
