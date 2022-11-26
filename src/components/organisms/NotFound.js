import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import notFound from "../../404.svg";

const StyledSection = styled.section`
  padding: 120px 0px;
`;
const Styled404 = styled.h3`
  font-size: 140px;
  color: #777;
  font-weight: 600;
`;
const NotFoundPage = () => (
  <StyledSection>
    <Container>
      <Row>
        <Col md={5} xs={12} className="text-center">
          <h1>Finde uns:</h1>
          Sperberstraße 6, 97422 Schweinfurt
        </Col>
        <Col md={7} xs={12} className="">
          <img src={notFound} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default NotFoundPage;
