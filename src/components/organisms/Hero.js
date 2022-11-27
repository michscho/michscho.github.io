import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";

import { Container, Row, Col } from "reactstrap";

const Title = styled.h3`
  span {
    border-image: none;
    display: inline-block;
    margin: 5px 10px;
    width: 40px;
    border-color: #d6516d -moz-use-text-color -moz-use-text-color;
    border-style: solid none none;
    border-width: 1px 0px 0px;
    @media (max-width: 767px) {
      width: 17px;
      margin-top: 10px;
      margin: 7px 5px;
    }
  }
  @media (max-width: 767px) {
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const Names = styled.ul`
  list-style: none;
  display: inline;
  font-size: 100px;
  font-weight: 300;
  padding: 0px;
  li {
    display: inline-block;
    @media (max-width: 767px) {
      display: list-item;
    }
  }

  @media (max-width: 767px) {
    font-size: 35px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Circle = styled.li`
  background: #c3a180;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 63px;
  font-weight: normal;
  line-height: 1.5em;
  border-radius: 100px;
  margin: 0px;
  color: #fff;
  top: -15px;
  position: relative;

  @media (max-width: 767px) {
    width: 64px;
    height: 64px;
    font-size: 41px;
    line-height: 1.5em;
    top: 0px;
    margin: auto;
  }
`;

const Date = styled.div`
  font-size: 50px;
  span {
    font-size: 80px;
    border-bottom: solid 2px #c3a180;
    line-height: 1em;
    @media (max-width: 767px) {
      font-size: 45px;
      line-height: 1em;
    }
  }
  @media (max-width: 767px) {
    font-size: 30px;
    margin-top: 30px;
  }
`;

const Hour = styled.div`
  font-size: 30px;
  margin-top: 20px;
  span {
    font-size: 20px;
  }
`;

const Place = styled.div`
  font-size: 20px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const StyledSection = styled.section`
  background-size: cover;
  background-attachment: fixed;
  padding: 120px 0px;
  text-align: center;
  height: 800px;
  padding: 50px 0px;
  position: relative;
  padding-top: 6%;
  @media (max-width: 767px) {
    height: auto;
  }
`;
const SectionHome = () => (
  <Parallax
    blur={9}
    bgImage={
      "https://www.friedatheres.com/wp-content/uploads/2020/06/tischdeko-hochzeit-1-1100x733.jpg"
    }
    bgImageAlt=""
    strength={300}
  >
    <StyledSection>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              <span />
              Wir haben JA gesagt!
              <span />
            </Title>
            <Names>
              <li>Annika </li>
              <Circle>&amp;</Circle>
              <li> Robert</li>
            </Names>
            <Date>
              <span>22. </span> Juli 2023
            </Date>
            <Hour>
              15<span>:00 Uhr</span>
            </Hour>
            <Place>
              <h3>Schweinfurt</h3>
              <p>Sperberstraße 6</p>
            </Place>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  </Parallax>
);

export default SectionHome;
