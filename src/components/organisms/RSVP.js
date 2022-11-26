import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

import Form from '../molecules/Form';

const StyledSection = styled.section`
  padding: 120px 0px;
`;

const SectionRSVP = () => (
  <StyledSection>
    <Container>
      <Row>
        <Col md={{ size: 10, offset: 1 }} xs={12} className="text-center">
          <div className="title-block">
            <h1>
              Nimmst du{' '}
              <span>
                <em>teil?</em>
              </span>
            </h1>
            <div className="divider" />
            <p>
              <em>
              Bitte wählen Sie die Veranstaltungen aus, die Sie besuchen möchten, und füllen Sie das folgende Formular aus, um das 
                zu bestätigen.
              </em>
            </p>
          </div>
        </Col>
        <Col md={{ size: 8, offset: 2 }} xs={12} className="text-center">
          <Form />
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default SectionRSVP;
