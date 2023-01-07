import React from "react";
import styled from "styled-components";

import { Container, Row, Col } from "reactstrap";

const Profile = styled.div`
  img {
    margin: 40px auto;
  }
`;

const ImageCircle = styled.img`
  border: 20px solid #fff;
  max-height: 500px;
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
              Annika <span>&</span> Robert
            </h2>
            <ImageCircle
              src="images/AnnikaRobert.jpg"
              className="img-fluid rounded-circle"
              alt="Annika & Robert"
            />
          </Profile>
        </Col>
        <Col md={6} xs={12} className="text-center">
          <Profile>
            <h2>Ihr Ring</h2>
            <ImageCircle
              src="images/Ring.jpg"
              className="img-fluid rounded-circle"
              alt="Groom"
            />
          </Profile>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default SectionCouple;
