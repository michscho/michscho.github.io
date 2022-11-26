import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

const Profile = styled.div`
  img {
    margin: 40px auto;
  }
`;

const ImageCircle = styled.img`
  border: 20px solid #fff;
`;
const StyledSection = styled.section`
  padding: 120px 0px;
`;

const SectionCouple = () => (
  <StyledSection className="bg-gray-1">
    <Container>
      <Row>
        <Col md={6} xs={12} className="text-center">
          <Profile>
            <h2>
              Annika <span>Ernst</span>
            </h2>
            <ImageCircle
              src="http://via.placeholder.com/323x323"
              className="img-fluid rounded-circle"
              alt="Bride"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
              faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum. Duis
              auctor in est ac dignissim.
            </p>
          </Profile>
        </Col>
        <Col md={6} xs={12} className="text-center">
          <Profile>
            <h2>
              Robert <span>Ernst</span>
            </h2>
            <ImageCircle
              src="http://via.placeholder.com/323x323"
              className="img-fluid rounded-circle"
              alt="Groom"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
              faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum. Duis
              auctor in est ac dignissim.
            </p>
          </Profile>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default SectionCouple;
