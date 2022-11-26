import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';

import { Container, Row, Col } from 'reactstrap';

import Countdown from 'react-countdown-now';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StyledSection = styled.section`
  padding: 120px 0px;
  background-attachment: fixed;
  background-size: cover;
`;

const TimeCircles = styled.div`
  margin: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: 'Century Gothic', Arial;
`;

const TimeTilte = styled.h4`
  margin: 0;
  font-size: 13px;
  line-height: 0.5;
  text-transform: uppercase;
`;

const TimeNumbers = styled.span`
  font-size: 300%;
  font-weight: bold;
`;

const Completionist = () => <span>Tadaaaa!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  }

  return (
    <Row className="top-pad-60">
      <Col md={3} xs={3}>
        <TimeCircles>
          <TimeTilte>Days</TimeTilte>
          <TimeNumbers>{days}</TimeNumbers>
        </TimeCircles>
        <CircularProgressbar
          counterClockwise
          strokeWidth="4"
          styles={{
            path: { stroke: '#c3a180' },
            trail: { stroke: '#f4f4f4', strokeWidth: '1.5px' },
          }}
          initialAnimation="-100"
          percentage={days * 100 / 365}
          textForPercentage={null}
        />
      </Col>
      <Col md={3} xs={3}>
        <TimeCircles>
          <TimeTilte>Hours</TimeTilte>
          <TimeNumbers>{hours}</TimeNumbers>
        </TimeCircles>
        <CircularProgressbar
          counterClockwise
          strokeWidth="4"
          styles={{
            path: { stroke: '#c3a180' },
            trail: { stroke: '#f4f4f4', strokeWidth: '1.5px' },
          }}
          initialAnimation="-100"
          percentage={hours * 100 / 24}
          textForPercentage={null}
        />
      </Col>
      <Col md={3} xs={3}>
        <TimeCircles>
          <TimeTilte>Minutes</TimeTilte>
          <TimeNumbers>{minutes}</TimeNumbers>
        </TimeCircles>
        <CircularProgressbar
          counterClockwise
          strokeWidth="4"
          styles={{
            path: { stroke: '#c3a180' },
            trail: { stroke: '#f4f4f4', strokeWidth: '1.5px' },
          }}
          initialAnimation="-100"
          percentage={minutes * 100 / 60}
          textForPercentage={null}
        />
      </Col>
      <Col md={3} xs={3}>
        <TimeCircles>
          <TimeTilte>Seconds</TimeTilte>
          <TimeNumbers>{seconds}</TimeNumbers>
        </TimeCircles>
        <CircularProgressbar
          counterClockwise
          strokeWidth="4"
          styles={{
            path: { stroke: '#c3a180' },
            trail: { stroke: '#f4f4f4', strokeWidth: '1.5px' },
          }}
          initialAnimation="-100"
          percentage={seconds * 100 / 60}
          textForPercentage={null}
        />
      </Col>
    </Row>
  );
};

const SectionCounter = () => (
  <Parallax blur={9} bgImage={'http://via.placeholder.com/1100x619'} bgImageAlt="" strength={300}>
    <StyledSection>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }} xs={12} className="text-center">
            <h2>Countdown zum großem Tag!</h2>
            <Countdown date={'May 26, 2023 13:00:00'} renderer={renderer} />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  </Parallax>
);

export default SectionCounter;
