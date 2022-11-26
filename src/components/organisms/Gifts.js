import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';

import { Container, Row, Col, Carousel, CarouselItem } from 'reactstrap';

const Icon = styled.i`
  width: 30px;
  height: 30px;
  margin-top: -15px;
  font-size: 30px;
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
`;

const CorouselImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
const CarouselSlide = styled(CarouselItem)`
  margin: 5px;
  background: #fff;
  padding: 30px;
`;

const StyledSection = styled.section`
  padding: 120px 0px;
  background-attachment: fixed;
  background-size: cover;
`;

const SectionGifts = () => (
  <Parallax blur={9} bgImage={'http://via.placeholder.com/1100x619'} bgImageAlt="" strength={300}>
    <StyledSection>
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }} xs={12} className="text-center">
            <div className="title-block">
              <h1>
                Gifts{' '}
                <span>
                  <em>Registry</em>
                </span>
              </h1>
              <div className="divider" />
              <p>
                <em>We are registered at the following shops with our names.</em>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  </Parallax>
);

export default SectionGifts;
