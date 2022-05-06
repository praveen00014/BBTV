import React, { useState, useEffect } from "react";
import Image from "next/image";

function NewFooter() {
  const [Icons, setIcons] = useState([]);
  const [Data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Data"));
    if (!data === undefined) {
      setData(data);
      setIcons(data.results.config.icons);
    }
  }, []);
  return (
    <footer>
      <div className="bg-slate-800 h-1/2 w-full  md:p-10 pt-4 p-3 flex justify-evenly">
        <div className="md:p-5 align-center">
          <h1 className="headingFooter  pb-6 md:text-3xl text-sm ml-5">
            CONTACT
          </h1>
          <ul className="text-xl font-semibold text-white space-y-6">
            <div className="flex items-center md:space-x-4">
              <Image
                src="https://developer.zingotv.com/uploads/images/default/icons/contact_us_new.png"
                width={50}
                alt=""
                height={50}
                className=""
              />
              <li className=" text-xs md:text-xl">info@worldbbtv.com</li>
            </div>
            <div className="flex items-center md:space-x-4">
              <Image
                className=""
                src="https://developer.zingotv.com/uploads/images/default/icons/contact_us_new.png"
                width={50}
                alt=""
                height={50}
              />
              <div>
                <li className="text-xs md:text-xl">To Subscribe </li>
                <li className="text-xs md:text-xl">Subscribe@worldbbtv.com</li>
              </div>
            </div>
            <div className="flex items-center md:space-x-4">
              <Image
                className=""
                src="https://developer.zingotv.com/uploads/images/default/icons/contact_us_new.png"
                width={50}
                alt=""
                height={50}
              />
              <div>
                <li className="text-xs md:text-xl">Thechnical Support </li>
                <li className="text-xs md:text-xl">support@worldbbtv.com</li>
              </div>
            </div>
          </ul>
        </div>
        <div className="md:p-5 text-white">
          <h1 className=" pb-6 md:text-3xl text-sm headingFooter ml-5">
            QUICK LINKS
          </h1>
          <ul className="text-2xl font-semibold space-y-6">
            <div className="flex items-center md:space-x-4">
              <Image
                src="https://developer.zingotv.com/uploads/images/default/icons/terms_of_use.png"
                width={50}
                height={50}
                alt=""
                className=""
              />
              <li className="text-xs md:text-xl">Terms & Conditions</li>
            </div>
            <div className="flex items-center md:space-x-4">
              <Image
                src="https://developer.zingotv.com/uploads/images/default/icons/terms_of_use.png"
                width={50}
                height={50}
                alt=""
                className=""
              />
              <li className="text-xs md:text-xl">Privacy Policy</li>
            </div>
            <div className="flex items-center md:space-x-4">
              <Image
                src="https://developer.zingotv.com/uploads/images/default/icons/terms_of_use.png"
                width={50}
                height={50}
                alt=""
                className=""
              />
              <li className="text-xs md:text-xl">Faq`s</li>
            </div>
          </ul>
        </div>

        <div className="md:p-5  ">
          <ul className="">
            <h1 className=" md:text-3xl text-sm pb-6 headingFooter headingCenter ml-4">
              SOCIAL LINKS
            </h1>
            <div className="flex flexCol md:space-x-1 pb-5 text-3xl">
              <i
                className="fa fa-facebook m-3"
                aria-hidden="true"
                style={{ fontSize: 40 }}
              />
              <i
                className="fa fa-twitter m-3"
                aria-hidden="true"
                style={{ fontSize: 40 }}
              />
              <i
                className="fa fa-youtube-play m-3"
                aria-hidden="true"
                style={{ fontSize: 40 }}
              />
              <i
                className="fa fa-instagram m-3"
                aria-hidden="true"
                style={{ fontSize: 40 }}
              />
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-4 bg-[#0d1113]">
        <h1 className="font-semibold text-lg md:text-xl tracking-wide">
          © World BBTV All rights reserved. All Trademarks are the properties of
          their respective owners
        </h1>
      </div>
    </footer>
  );
}

export default NewFooter;
