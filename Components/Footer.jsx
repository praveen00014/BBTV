/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

function Footer() {
  const [Icons, setIcons] = useState([]);
  const [Data, setData] = useState([]);
  const [ContactUs, setContactUs] = useState([]);
  const [SettingMenu, setSettingMenu] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Data"));
    if (!data === undefined) {
      setData(data);
      setIcons(data.results.config.icons);
      setContactUs(data.results.config);
      setSettingMenu(data.results.config.settings_menu);
    }
  }, []);

  const privacy_A_terms =
    SettingMenu &&
    SettingMenu.filter((x) => {
      return x.layout === "HTML_LAYOUT";
    });

  const facts =
    SettingMenu &&
    SettingMenu.filter((x) => {
      return x.layout === "FAQ_LAYOUT";
    });

  return (
    <>
      <footer id="contact" className="footer-one ">
        <Row className="footer-standard" style={{ margin: "50px" }}>
          <Col lg="5">
            <div className="widget text-left">
              <div className="menu-footer-link-1-container">
                <div className="d-flex flex-column">
                  <span className="uppercase text-base md:text-3xl">
                    Contact
                  </span>
                  <div className="d-flex flex-row mt-4 items-center">
                    <img
                      src={Icons.contact_us}
                      style={{ fontSize: 30 }}
                      alt=""
                    />
                    <span style={{ fontSize: 20 }}>
                      {ContactUs && ContactUs.contact_us_email}
                    </span>
                  </div>
                  <div className="d-flex flex-row mt-4">
                    <img
                      src={Icons.contact_us}
                      style={{ fontSize: 30 }}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span style={{ fontSize: 20, fontWeight: "bold" }}>
                        To subscribe
                      </span>
                      <span style={{ fontSize: 20 }}>
                        subscribe@worldbbtv.com
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-row mt-4">
                    <img
                      src={Icons.contact_us}
                      style={{ fontSize: 30 }}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span
                        className="uppercase"
                        style={{ fontSize: 20, fontWeight: "bold" }}
                      >
                        Technical Support
                      </span>
                      <span style={{ fontSize: 20 }}>
                        support@worldbbtv.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" className="mt-4 mt-lg-0">
            <div className="d-flex flex-column">
              <span className="uppercase text-base md:text-3xl">
                Quick Links
              </span>
              {privacy_A_terms &&
                privacy_A_terms.map((x) => {
                  return (
                    <div
                      className="d-flex flex-row mt-4 items-center"
                      key={x.id}
                    >
                      <img
                        src={x.icon_vector}
                        style={{ fontSize: 30 }}
                        alt=""
                      />

                      <Link
                        href="#"
                        // {x.uri}
                      >
                        <a style={{ fontSize: 20, margin: 10 }}>{x.title}</a>
                      </Link>
                    </div>
                  );
                })}
              {facts &&
                facts.map((x) => {
                  return (
                    <div
                      className="d-flex flex-row mt-4 items-center"
                      key={x.id}
                    >
                      <img
                        src={x.icon_vector}
                        style={{ fontSize: 30 }}
                        alt=""
                      />

                      <Link
                        href="#"
                        // {x.uri}
                      >
                        <a style={{ fontSize: 20, margin: 10 }}>{x.title}</a>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col lg="3" md="6" className="mt-4 mt-lg-0">
            <div className="widget text-left">
              <div className="d-flex flex-column">
                <span className="uppercase text-base md:text-3xl">
                  Social Links
                </span>
                <div className="d-flex flex-row mt-4 justify-between w-64">
                  <i
                    className="fa fa-facebook cursor-pointer"
                    aria-hidden="true"
                    style={{ fontSize: 30 }}
                  />
                  <i
                    className="fa fa-twitter"
                    aria-hidden="true"
                    style={{ fontSize: 30 }}
                  />
                  <i
                    className="fa fa-youtube-play"
                    aria-hidden="true"
                    style={{ fontSize: 30 }}
                  />
                  <i
                    className="fa fa-instagram"
                    aria-hidden="true"
                    style={{ fontSize: 30 }}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div style={{ background: "rgba(13,23,43,1)", width: "100%" }}>
          <div className="widget text-center">
            <div className="textwidget ">
              <p className="mt-2.5 text-base md:text-3xl font-bold">
                © World BBTV All rights reserved. All Trademarks are the
                properties of their respective owners
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
