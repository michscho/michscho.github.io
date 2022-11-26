import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';

import { Container, Row, Col } from 'reactstrap';

const StyledParallax = styled(Parallax)`
  position: ${props => (props.fixed ? 'fixed !important' : 'relative')};
  padding: 80px 0px;
  width: 100%;
  bottom: 0;
`;

const StyledSection = styled.section`
  position: ${props => (props.fixed ? 'fixed !important' : 'relative')};
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

const Copyright = styled.div`
  margin-top: 20px;
`;

const Footer = props => (
  <StyledSection fixed={props.fixed} className="bg-gray-3">
    <Container>
      <Row>
        <Col md={{ size: 10, offset: 1 }} xs={12} className="text-center">
          <h1>Danke dir!</h1>
          <Names>
            <li>Annika</li>
            <Circle>&amp;</Circle>
            <li>Robert</li>
          </Names>
          <Copyright>
            All Rights Reserved © 2022 |{' '}
            <a href="http://weetsi.com" target="_blank" rel="noopener noreferrer">
              Michael Schott
            </a>
          </Copyright>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default Footer;
