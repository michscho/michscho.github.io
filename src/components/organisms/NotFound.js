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
                  <em>Location und Unterkunft</em>
                </span>{" "}
                gibt es?
              </h2>
              <div className="divider" />
              <p>
                <em>
                  <h4> Unterkunft: </h4>
                  <br />
                  Das <b>Hotel Freihof</b> bietet für alle Gäste eine
                  Übernachtungsmöglichkeit. Bitte gebt bis Anfang März dem Hotel
                  Freihof Bescheid, ob ihr vor Ort übernachten möchtet.
                  <br />
                  <a href="https://hotelfreihof.com/hochzeiten-events/">
                    Hotel Freihof{"  "}
                    <a href="https://hotelfreihof.com/hochzeiten-events/">
                      https://hotelfreihof.com/hochzeiten-events/
                    </a>{" "}
                  </a>{" "}
                  <p></p>
                  <h5> Anschrift: </h5>
                  <h6>
                    Hotel Freihof Prichsenstadt Freihofgasse 3 97357
                    Prichsenstadt
                  </h6>
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
            Hotel Freihof, Freihofgasse 3, Prichsenstadt
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
