import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import couponImage from "../../assets/images/promocode.png";
import addOnImage from "../../assets/images/addOn.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./package.scss";
import Paypal from "../../assets/images/Paypal.png";

import { getBuyPackageConfig } from "../../services/accountService";
import { GetAllPackage } from "../../services/packageService";
import PackageCard from "./PackageCard";
import {
  getAddOnDataApi,
  PurchaseAddOnApi,
} from "../../services/UserConfigService";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { notificationMessageFunction } from "../../constants/notificationConst";
import Spinner from "../../components/Common/CustomLoader/loader";

const PurchasePlan = () => {
  const [packageData, setPackageData] = useState([]);
  const [addOnData, setAddOnData] = useState({});
  const [packageCount, setPackageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const settings = {
    dots: true,
    infinite: true,

    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: packageCount === 1 ? 1 : packageCount === 2 ? 2 : 3,
    slidesToScroll: 3,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs
          title="Account"
          breadcrumbItem="How to purchase plan?"
          to="/profile"
        />
        <Row style={{ marginLeft: 59 }}>
          {details.status === 1 && (
            <Col lg={4} md={8} sm={8}>
              <Card>
                <CardHeader>
                  <label className="add-pack">{details.title}</label>
                </CardHeader>
                <CardBody>
                  <br />
                  <Col>
                    <Row>
                      <Col>
                        <div className="p-4">
                          <img
                            src={couponImage}
                            className="img-fluid"
                            alt="purchaseplan"
                          />
                        </div>
                        <h6 style={{ textAlign: "", marginTop: 16 }}>
                          {details.description}
                        </h6>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 10,
                          }}
                        >
                          <a
                            href={details.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button color="primary">Purchase</Button>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </CardBody>
              </Card>
            </Col>
          )}
          {addOnData.status === 1 && (
            <Col lg={4} md={8} sm={8}>
              {isLoading && <Spinner />}
              <Card>
                <CardHeader>
                  <label className="add-pack">Foxly Add-on</label>
                </CardHeader>
                <CardBody>
                  <Col>
                    <Row>
                      <Col>
                        <div
                          className="p-2"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "300px",
                          }}
                        >
                          <img
                            src={addOnImage}
                            className="img-fluid"
                            alt="add-on"
                          />
                        </div>
                        <h6 style={{ textAlign: "", marginTop: 16 }}>
                          Add Foxly Chrome Extension to Short URLs from any
                          webpage directly
                        </h6>
                        <h4 style={{ textAlign: "center", marginTop: 16 }}>
                          $ {addOnData.amount} Only
                        </h4>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 10,
                          }}
                        >
                          <div
                            style={{
                              cursor: "pointer",
                              width: "200px",
                            }}
                            onClick={BuyAddOnFuction}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                backgroundColor: "#facc15",
                                justifyContent: "center",
                                padding: "2px 0px 2px 0px",
                                cursor: "pointer",
                                borderRadius: "4px",
                              }}
                            >
                              <img
                                src={Paypal}
                                width={20}
                                height={25}
                                alt="paypal"
                                style={{ marginTop: 6, cursor: "pointer" }}
                              />
                              <label
                                style={{
                                  textAlign: "center",
                                  color: "#253B80",
                                  fontSize: 20,
                                  fontWeight: "bold",
                                  fontStyle: "italic",
                                  margin: "4px 0px 0px 5px",
                                  cursor: "pointer",
                                }}
                              >
                                Pay
                              </label>
                              <label
                                style={{
                                  textAlign: "center",
                                  color: "#169BD7",
                                  fontSize: 20,
                                  margin: "4px 0px 0px 0px",
                                  fontWeight: "bold",
                                  fontStyle: "italic",
                                  cursor: "pointer",
                                }}
                              >
                                Pal
                              </label>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </CardBody>
              </Card>
            </Col>
          )}
        </Row>

        {packageCount > 0 && details.status === 1 && addOnData.status === 1 && (
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "40px 0px 0px 0px",
            }}
          >
            <Col lg={8} md={8} sm={8}>
              <div
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{ flex: 1, height: 1, backgroundColor: "darkgray" }}
                />
                <div>
                  <label
                    style={{ width: 50, textAlign: "center", fontSize: 20 }}
                  >
                    OR
                  </label>
                </div>
                <div
                  style={{ flex: 1, height: 1, backgroundColor: "darkgray" }}
                />
              </div>
            </Col>
          </Row>
        )}

        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 0px 0px 60px",
          }}
        >
          <Col xl={12}>
            {packageData.length !== 0 && (
              <Slider {...settings}>
                {packageData.map((packageDetail, i) => {
                  return (
                    <Row key={i}>
                      <PackageCard packageDetail={packageDetail} i={i} />
                    </Row>
                  );
                })}
              </Slider>
            )}
          </Col>
        </Row>
      </div>
      <NotificationContainer />
    </React.Fragment>
  );
};
export default PurchasePlan;
