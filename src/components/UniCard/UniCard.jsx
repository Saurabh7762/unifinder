import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./unicard.css";

const UniCard = ({ uniData }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between gap-4 shadow-sm p-3 mb-5 bg-white rounded">
        <Card className="Card">
          <div className="college__img">
            <img src="./Collegelogo.png" alt="tour-img" />
          </div>
        </Card>
        <CardBody>
          <Row>
            <Col>
              <div className="d-flex flex-column gap-1">
                <h5>
                  <span>{uniData.name}</span> - {uniData.country} (
                  {uniData.alpha_two_code})
                </h5>
              </div>
            </Col>

            <Col lg="4" className="d-flex justify-content-around">
              <button className="btn">
                <Link to={`${uniData.web_pages[0]}`}>
                  View Details
                  <i className="ri-arrow-right-up-line"></i>
                </Link>
              </button>
            </Col>
          </Row>
        </CardBody>
      </div>
    </>
  );
};

export default UniCard;
