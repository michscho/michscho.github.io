import React from "react";
import styled from "styled-components";

import { Container, Row, Col } from "reactstrap";

const StyledSection = styled.section`
  padding: 120px 0px;
`;

const FinalFrase = styled.div`
  font-size: 28px;
  margin-top: 20px;
  span {
    color: #c3a180;
    font-weight: bold;
  }
`;

const TimeLineBody = styled.div`
  > p {
    margin-bottom: 0;
    + p {
      margin-top: 5px;
    }
  }
  > ul {
    margin-bottom: 0;
  }
  img {
    margin: 30px auto;
    border-radius: 4px;
  }
  @media only screen and (max-width: 600px) {
    b {
      font-size: 16px;
    }
  }
`;

const TimeLineTitle = styled.h2`
  color: inherit;
  text-align: ${(props) => (props.inverted ? "left" : "right")};
`;

const TimeLineBadge = styled.div`
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
  background-color: #c3a180;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  top: ${(props) => (props.last ? "100%" : null)};
  left: ${(props) => (props.last ? "50%" : null)};
`;

const TimeLinePanel = styled.div`
  width: 46%;
  float: ${(props) => (props.inverted ? "right" : "left")};
  border-radius: 2px;
  padding: 20px 20px 50px 20px;
  position: relative;
  background: white;
  border: 3px solid #ededed;
  &:before {
    position: absolute;
    top: 24px;
    right: ${(props) => (props.inverted ? "auto" : "-18px")};
    left: ${(props) => (props.inverted ? "-15px" : "auto")};
    display: inline-block;
    border-top: 17px solid transparent;
    border-left: 17px solid #e8e8e8;
    border-right: 0 solid #e8e8e8;
    border-left-width: ${(props) => (props.inverted ? "0" : "17px")};
    border-right-width: ${(props) => (props.inverted ? "15px" : "0")};
    border-bottom: 18px solid transparent;
    content: " ";
  }
  &:after {
    position: absolute;
    top: 27px;
    right: ${(props) => (props.inverted ? "auto" : "-17px")};
    left: ${(props) => (props.inverted ? "-14px" : "auto")};
    display: inline-block;
    border-top: 14px solid transparent;
    border-left: 14px solid #fff;
    border-right: 0 solid #fff;
    border-left-width: ${(props) => (props.inverted ? "0" : "17px")};
    border-right-width: ${(props) => (props.inverted ? "14px" : "0")};
    border-bottom: 14px solid transparent;
    content: " ";
  }
`;

const TimeLineItem = styled.li`
  margin-bottom: 20px;
  position: relative;
  margin-top: -25%;
  &:before {
    content: " ";
    display: table;
  }
  &:after {
    content: " ";
    display: table;
    clear: both;
  }
  &:first-child {
    margin-top: -27px;
    > .timeline-badge {
      position: absolute;
      top: 1%;
      left: 50%;
    }
  }
`;

const TimeLineList = styled.ul`
  list-style: none;
  padding: 20px 0;
  position: relative;
  &:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: rgba(0, 0, 0, 0.09);
    left: 50%;
    margin-left: -1.5px;
  }
`;

const SectionTimeLine = () => (
  <StyledSection className="bg-gray-1">
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }} xs={12} className="text-center">
          <div className="title-block">
            <h1>Der Ablauf </h1>
            <div className="divider" />
            <p>
              <em>
                Wir haben geheiratet! Das möchten wir gerne am <b>22.07.2023</b>{" "}
                mit einer Gartenparty bei Familie Schott feiern.
              </em>
            </p>
          </div>
        </Col>
      </Row>
      <TimeLineList>
        <TimeLineItem>
          <TimeLineBadge>
            <i className="fas fa-heart" />
          </TimeLineBadge>
          <TimeLinePanel>
            <div className="timeline-heading">
              <TimeLineTitle>
                <span>
                  <b>15</b>
                </span>
                :00 Uhr
              </TimeLineTitle>
            </div>
            <TimeLineBody className="text-center">
              <img
                src="https://www.hochzeitstreff.de/wp-content/uploads/2022/07/shutterstock_221207839.jpg"
                className="img-fluid"
                alt="Unsere Geschichte"
              />
              <h2 className="timeline-title">
                <b>Sektempfang</b>
              </h2>
            </TimeLineBody>
          </TimeLinePanel>
        </TimeLineItem>
        <TimeLineItem inverted>
          <TimeLineBadge>
            <i className="fas fa-heart" aria-hidden="true" />
          </TimeLineBadge>
          <TimeLinePanel inverted>
            <div className="timeline-heading">
              <TimeLineTitle inverted>
                <span><b>16</b></span>:00 Uhr
              </TimeLineTitle>
            </div>
            <TimeLineBody className="text-center">
              <img
                src="https://www.qiez.de/app/uploads/2017/12/eine-tasse-kaffee-mit-crema-und-dazu-ein-stck-kuchen-auf-einem-weien-porzellan-toa-heftiba-910x511.jpeg"
                className="img-fluid"
                alt="Our Story"
              />
              <h2 className="timeline-title">
                <b>Kaffee&Kuchen</b>
              </h2>
            </TimeLineBody>
          </TimeLinePanel>
        </TimeLineItem>
        <TimeLineItem>
          <TimeLineBadge>
            <i className="fas fa-heart" />
          </TimeLineBadge>
          <TimeLinePanel>
            <div className="timeline-heading">
              <TimeLineTitle>
                <span><b>18</b></span>:00 Uhr
              </TimeLineTitle>
            </div>
            <TimeLineBody className="text-center">
              <img
                src="https://hochzeitdiy.com/wp-content/uploads/2021/02/Gedeck-Hochzeit.jpg"
                className="img-fluid"
                alt="Our Story"
              />
              <h2 className="timeline-title">
                <b>Abendessen</b>
              </h2>
            </TimeLineBody>
          </TimeLinePanel>
        </TimeLineItem>
        <TimeLineItem inverted>
          <TimeLineBadge>
            <i className="fas fa-heart" aria-hidden="true" />
          </TimeLineBadge>
          <TimeLinePanel inverted>
            <div className="timeline-heading">
              <TimeLineTitle inverted>
                <span><b>20</b></span>:00 Uhr
              </TimeLineTitle>
            </div>
            <TimeLineBody className="text-center">
              <img
                src="https://scontent-muc2-1.xx.fbcdn.net/v/t39.30808-6/308109006_422925329916113_5436940080415561538_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=os-lMEXup-MAX910lF3&_nc_ht=scontent-muc2-1.xx&oh=00_AfB26Vvc6MwTiBJXO2RoLcm6K50ae7rDcLVy7q3uht-CdA&oe=6386FEDD"
                className="img-fluid"
                alt="Our Story"
              />
              <h2 className="timeline-title">
                <b>Cocktailbar</b>
              </h2>
            </TimeLineBody>
          </TimeLinePanel>
        </TimeLineItem>
        <TimeLineItem>
          <TimeLineBadge>
            <i className="fas fa-heart" />
          </TimeLineBadge>
          <TimeLinePanel>
            <div className="timeline-heading">
              <TimeLineTitle>
                <span><b>20</b></span>:30 Uhr
              </TimeLineTitle>
            </div>
            <TimeLineBody className="text-center">
              <img
                src="https://www.hochzeitsportal24.de/wp-content/uploads/ratgeber/hochzeitgeschenk-heliumballons/Hochzeit-Luftballons.jpg"
                className="img-fluid"
                alt="Our Story"
              />
              <h2 className="timeline-title">
                <b>Hochzeitsfeier</b>
              </h2>
            </TimeLineBody>
          </TimeLinePanel>
        </TimeLineItem>
        <TimeLineItem>
          <TimeLineBadge last>
            <i className="fas fa-heart" aria-hidden="true" />
          </TimeLineBadge>
        </TimeLineItem>
      </TimeLineList>
      <Row>
        <Col md={{ size: 8, offset: 2 }} xs={12} className="text-center">
          <FinalFrase>
            <span>Open End...</span>
          </FinalFrase>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default SectionTimeLine;
