import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

const StyledSection = styled.section`
  background-size: cover;
  background-attachment: fixed;
  padding: 120px 0px;
`;
const SectionFeatured = () => (
  <StyledSection id="featured-people">
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }} xs={12} className="text-center">
          <div className="title-block">
            <h1>
              Featured{' '}
              <span>
                <em />
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
      <Row>
        <Col sm={6} xs={12}>
          <div className="featured">
            <img
              src="http://via.placeholder.com/323x323"
              className="img-fluid rounded-circle"
              alt="Groom"
            />
            <div className="text">
              <h2>Obi-Wan Kenobi</h2>
              <h4>
                <span>
                  <em>Best Man</em>
                </span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
                faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum.
                Duis auctor in est ac dignissim.
              </p>
            </div>
          </div>
          <div className="clearfix" />
          <div className="featured">
            <img
              src="http://via.placeholder.com/323x323"
              className="img-fluid rounded-circle"
              alt="Groom"
            />
            <div className="text">
              <h2>R2-D2</h2>
              <h4>
                <span>
                  <em>Groomsman</em>
                </span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
                faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum.
                Duis auctor in est ac dignissim.
              </p>
            </div>
          </div>
          <div className="clearfix" />
          <div className="featured">
            <img
              src="http://via.placeholder.com/323x323"
              className="img-fluid rounded-circle"
              alt="Groom"
            />
            <div className="text">
              <h2>Owen Lars</h2>
              <h4>
                <span>
                  <em>Groomsman</em>
                </span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
                faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum.
                Duis auctor in est ac dignissim.
              </p>
            </div>
          </div>
        </Col>
        <div className="col-sm-6 col-xs-12 featured-right">
          <div className="featured">
            <img
              src="http://via.placeholder.com/323x323"
              className="img-fluid rounded-circle"
              alt="Groom"
            />
            <div className="text">
              <h2>Chewbacca</h2>
              <h4>
                <span>
                  <em>Maid of honor</em>
                </span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
                faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum.
                Duis auctor in est ac dignissim.
              </p>
            </div>
          </div>
          <div className="clearfix" />
          <div className="featured">
            <img
              src="http://via.placeholder.com/323x323"
              className="img-fluid rounded-circle"
              alt="Groom"
            />
            <div className="text">
              <h2>Greedo</h2>
              <h4>
                <span>
                  <em>Bridesmaid</em>
                </span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
                faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum.
                Duis auctor in est ac dignissim.
              </p>
            </div>
          </div>
          <div className="clearfix" />
          <div className="featured">
            <img
              src="http://via.placeholder.com/323x323"
              className="img-fluid rounded-circle"
              alt="Groom"
            />
            <div className="text">
              <h2>Bib Fortuna</h2>
              <h4>
                <span>
                  <em>Bridesmaid</em>
                </span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
                faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum.
                Duis auctor in est ac dignissim.
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </StyledSection>
);

export default SectionFeatured;
