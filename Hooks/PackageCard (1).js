import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";

function PackageCard({ packageDetail, i }) {
  return (
    <div>
      <Col>
        <Card key={i}>
          <CardHeader>
            <span>
              <label
                style={{
                  fontSize: 20,
                  justifyContent: "center",
                  display: "flex",
                  marginRight: 5,
                }}
              >
                {packageDetail.package_name}
              </label>
            </span>
          </CardHeader>
          <CardBody>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <b style={{ fontSize: 32 }}>{packageDetail.amount} USD</b>{" "}
            </label>
            <div style={{ margin: "20px 0px 0px 0px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <label style={{ fontSize: 16 }}>Package Duration</label>
                {packageDetail.expired_on_is_unlimited ? (
                  <>Life Time</>
                ) : (
                  <>{packageDetail.expired_on} Days</>
                )}
              </div>
              {commonFunctionForCounts(
                "URL",
                packageDetail.maximum_url,
                packageDetail.maximum_url_is_unlimited
              )}
              {commonFunctionForCounts(
                "Space",
                packageDetail.maximum_space,
                packageDetail.maximum_space_is_unlimited
              )}
              {commonFunctionForCounts(
                "Domain",
                packageDetail.maximum_domain,
                packageDetail.maximum_domain_is_unlimited
              )}
              {commonFunctionForCounts(
                "Reseller",
                packageDetail.reseller,
                false
              )}
              {commonFunctionForFeatures(
                "Advance Statistics",
                packageDetail.advance_statistics
              )}
              {commonFunctionForFeatures(
                "Additional Domains",
                packageDetail.additional_domain
              )}
              {commonFunctionForFeatures(
                "Link Expiration",
                packageDetail.link_expiration
              )}
              {commonFunctionForFeatures(
                "Link password",
                packageDetail.link_password
              )}
              {commonFunctionForFeatures(
                "Link Deactivation",
                packageDetail.link_deactivation
              )}
              {commonFunctionForFeatures(
                "Bulk Shorting",
                packageDetail.bulk_link_shorting
              )}
              {commonFunctionForFeatures(
                "Link password",
                packageDetail.link_password
              )}
              {commonFunctionForFeatures(
                "Data Export",
                packageDetail.data_export
              )}
              {commonFunctionForFeatures("UTM Builder", packageDetail.utm)}
              {commonFunctionForFeatures(
                "Chrome Extension Add-on",
                packageDetail.add_on
              )}
            </div>
            <div className="text-center mt-2">
              <Link
                to={{
                  pathname: "/purchase-plan-details",
                  state: { packageDetail: packageDetail },
                }}
              >
                <Button color="primary">Buy Now</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}

export default PackageCard;

export const commonFunctionForFeatures = (lableFor, featureFor) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <label style={{ fontSize: 16 }}>{lableFor}</label>
      {featureFor === true ? (
        <i
          className="mdi mdi-check"
          style={{ color: "green", fontSize: 16 }}
        ></i>
      ) : (
        <i
          className="mdi mdi-window-close"
          style={{ color: "red", fontSize: 16 }}
        ></i>
      )}
    </div>
  );
};

export const commonFunctionForCounts = (lableFor, totalCount, isUnlimited) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <label style={{ fontSize: 16 }}>
        <b>{lableFor}</b>
      </label>
      {isUnlimited ? (
        "Unlimited"
      ) : (
        <div style={{ fontSize: 16, marginRight: 4 }}>{totalCount}</div>
      )}
    </div>
  );
};
