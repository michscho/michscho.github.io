import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

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
  }
`;

const TimeLineTitle = styled.h2`
  margin-top: 0;
  color: inherit;
  text-align: ${props => (props.inverted ? 'left' : 'right')};
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
  top: ${props => (props.last ? '100%' : null)};
  left: ${props => (props.last ? '50%' : null)};
`;

const TimeLinePanel = styled.div`
  width: 46%;
  float: ${props => (props.inverted ? 'right' : 'left')};
  border-radius: 2px;
  padding: 20px 20px 50px 20px;
  position: relative;
  background: transparent;
  border: 3px solid #ededed;
  &:before {
    position: absolute;
    top: 24px;
    right: ${props => (props.inverted ? 'auto' : '-18px')};
    left: ${props => (props.inverted ? '-15px' : 'auto')};
    display: inline-block;
    border-top: 17px solid transparent;
    border-left: 17px solid #e8e8e8;
    border-right: 0 solid #e8e8e8;
    border-left-width: ${props => (props.inverted ? '0' : '17px')};
    border-right-width: ${props => (props.inverted ? '15px' : '0')};
    border-bottom: 18px solid transparent;
    content: ' ';
  }
  &:after {
    position: absolute;
    top: 27px;
    right: ${props => (props.inverted ? 'auto' : '-17px')};
    left: ${props => (props.inverted ? '-14px' : 'auto')};
    display: inline-block;
    border-top: 14px solid transparent;
    border-left: 14px solid #fff;
    border-right: 0 solid #fff;
    border-left-width: ${props => (props.inverted ? '0' : '17px')};
    border-right-width: ${props => (props.inverted ? '14px' : '0')};
    border-bottom: 14px solid transparent;
    content: ' ';
  }
`;

const TimeLineItem = styled.li`
  margin-bottom: 20px;
  position: relative;
  margin-top: -25%;
  &:before {
    content: ' ';
    display: table;
  }
  &:after {
    content: ' ';
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
    content: ' ';
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
            <h1>
              Unsere{' '}
              <span>
                <em>Geschichte</em>
              </span>
            </h1>
            <div className="divider" />
            <p>
              <em>
                Dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu faucibus.
                Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum. Duis auctor
                in est ac dignissim.
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
                May <span>04</span> 2022
              </TimeLineTitle>
            </div>
            <TimeLineBody className="text-center">
              <img src="http://via.placeholder.com/700x466" className="img-fluid" alt="Unsere Geschichte" />
              <h2 className="timeline-title">Our first meeting</h2>
              <p>
                Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá ,
                depois divoltis porris, paradis. Paisis, filhis, espiritis santis.
              </p>
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
                Dec <span>28</span> 2022
              </TimeLineTitle>
            </div>
            <TimeLineBody className="text-center">
              <img src="http://via.placeholder.com/700x466" className="img-fluid" alt="Our Story" />
              <h2 className="timeline-title">Great witer days</h2>
              <p>
                Mussum ipsum cacilds, vidis litro abertis. Mauris porttitor non sem eu faucibus.
                Aenean pellentesque dui tincidunt mauris porttitor non sem eu faucibus. Aenean
                pellentesque dui tincidunt,Consetis adipiscings elitis. Pra lá , depois divoltis
                porris, paradis. Paisis, filhis, espiritis santis .
              </p>
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
                May <span>04</span> 2022
              </TimeLineTitle>
            </div>
            <TimeLineBody className="text-center">
              <img src="http://via.placeholder.com/700x466" className="img-fluid" alt="Our Story" />
              <h2 className="timeline-title">Our first meeting</h2>
              <p>
                Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá ,
                depois divoltis porris, paradis. Paisis, filhis, espiritis santis.
              </p>
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
                Dec <span>28</span> 2022
              </TimeLineTitle>
            </div>
            <TimeLineBody className="text-center">
              <img src="http://via.placeholder.com/700x466" className="img-fluid" alt="Our Story" />
              <h2 className="timeline-title">Standesamtliche Heirat</h2>
              <p>
                Mussum ipsum cacilds, vidis litro abertis. Mauris porttitor non sem eu faucibus.
                Aenean pellentesque dui tincidunt mauris porttitor non sem eu faucibus.
              </p>
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
            Jetzt freuen wir uns auf die <span>nächsten Schritte...</span>
          </FinalFrase>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default SectionTimeLine;
