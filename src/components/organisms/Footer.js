import React from "react";
import styled from "styled-components";

import { Container, Row, Col } from "reactstrap";

const StyledSection = styled.section`
  position: ${(props) => (props.fixed ? "relative" : "relative")};
  padding: 50px 0px;
  width: 100%;
  bottom: 0;
`;
const Names = styled.ul`
  list-style: none;
  display: inline;
  font-size: 43px;
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
  width: 64px;
  height: 64px;
  font-size: 41px;
  line-height: 1.5em;
  top: 0px;
  background: #c3a180;
  text-align: center;
  font-weight: normal;
  border-radius: 100px;
  margin: 0px;
  color: #fff;
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

const Footer = (props) => (
  <StyledSection fixed={props.fixed} className="bg-gray-3">
    <Container>
      <Row>
        <Col md={{ size: 10, offset: 1 }} xs={12} className="text-center">
          <Names>
            <li>Annika</li>
            <Circle>&amp;</Circle>
            <li>Robert</li>
          </Names>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default Footer;
