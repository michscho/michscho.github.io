import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import notFound from "../../404.svg";
import notFound2 from "../../405.svg";

const StyledSection = styled.section`
  padding-top: 50px;
`;
const NotFoundPage = () => (
  <div>
    <StyledSection>
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }} xs={12} className="text-center">
            <div className="title-block">
              <h2>
                Welche{" "}
                <span>
                  <em>Übernachtungs &shy; möglichkeiten</em>
                </span>{" "}
                gibt es?
              </h2>
              <div className="divider" />
              <p>
                <em>
                  <h4> Vorschlag: </h4>
                  <a href=" https://www.panoramahotel-schweinfurt.de/">
                    <h5>Panorama Hotel</h5>
                  </a>{" "}
                  Es ist ein Kontingent an 20 Zimmern im Panoramahotel für euch
                  reserviert. <p></p> EZ für 69,00 Euro bzw. DZ für 86,00 Euro.
                  Wahlweise kann am nächsten Morgen ein Frühstücksbuffet für
                  17,00 Euro mit gebucht werden
                  <p></p>
                  <h4> Weitere schöne Unterkünfte: </h4>
                  <a href="https://www.ebracher-hof.com/">
                    <h5>Ebracher Hof</h5>
                  </a>
                  <a href="https://www.hotel-bb.com/de/hotel/schweinfurt-city?utm_source=gmb&utm_medium=referral&utm_content=schweinfurt&utm_campaign=yext">
                    <h5>B&B Hotel</h5>
                  </a>
                  <a href="https://aparthotel-stadtvilla-premium-schweinfurt.hotel-mix.de/">
                    <h5>Panorama Hotel</h5>
                  </a>
                </em>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
    <StyledSection className="findeUns">
      <Container>
        <Row>
          <Col
            md={{ size: 10, offset: 1 }}
            xs={12}
            className="text-center"
          ></Col>

          <Col md={5} xs={12} className="text-center">
            <h1>Finde uns:</h1>
            Sperberstraße 6, 97422 Schweinfurt
          </Col>
          <Col md={7} xs={12} className="">
            <img src={notFound} className="img-fluid, car" />
          </Col>
        </Row>
      </Container>
    </StyledSection>
    <StyledSection>
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }} xs={12} className="text-center">
            <div className="title-block">
              <h2>
                Gibt es eine{" "}
                <span>
                  <em>Geschenkeliste ?</em>
                </span>{" "}
                Was wünscht Ihr euch zu Eurer Hochzeit?
              </h2>
              <div className="divider" />
              <p>
                <em>
                  An Stelle von Geschenken würden wir uns über einen
                  finanziellen Beitrag für unsere nächsten Outdoor Aktivitäten
                  freuen.
                </em>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
    <StyledSection className="findeUns">
      <Container>
        <Row>
          <Col
            md={{ size: 10, offset: 1 }}
            xs={12}
            className="text-center"
          ></Col>
          <Col md={3} xs={12} className="">
            <img
              width={250}
              height={250}
              src={notFound2}
              className="img-fluid, car2
              "
            />
          </Col>
          <Col md={9} xs={12} className="text-center">
            <h1>Gibt es einen Dresscode?</h1>
            <ol>- Casual chic (Kommt in was ihr euch wohlfühlt)</ol>
            <ol>- Badesachen nicht vergessen</ol>
          </Col>
        </Row>
      </Container>
    </StyledSection>
    <StyledSection>
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }} xs={12} className="text-center">
            <div className="title-block">
              <h2>
                Weitere{" "}
                <span>
                  <em>Fragen?</em>
                </span>{" "}
              </h2>
              <div className="divider" />
              <p>
                <em>
                  Bei weiteren Fragen zum Ablauf, für Spiele oder Beiträge der
                  Gäste könnt ihr euch an unsere beiden Trauzeugen wenden:
                  <p></p>
                  <h4> Sophia Austermann: 01578 6911592</h4>
                  <h4> Renate Ernst: 0176 34909439</h4>
                </em>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  </div>
);

export default NotFoundPage;
