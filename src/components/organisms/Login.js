import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap';

const StyledSection = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Background = styled.div`
  background-image: url(https://source.unsplash.com/1100x619/?wedding);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  filter: blur(15px);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -10;
`;

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 480px;
  margin: 80px auto;
  padding: 20px 40px 40px;
  text-align: center;
  background: #fff;
  border: 1px solid #ccc;
  .login-form {
    text-align: left;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: #fff;
    border: 1px solid #ccc;
    top: 5px;
    z-index: -2;
    transform: rotateZ(-2deg);
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 3.5px;
    left: 0;
    background: #fff;
    z-index: -1;
    transform: rotateZ(4deg);
    border: 1px solid #ccc;
  }
`;

const Login = styled.div`
  padding: 30px 0 20px 0;
  h5 {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

const StyledLabel = styled.label`
  cursor: pointer;

  &::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: regular;
    content: '\f111';
    margin-right: 0.3em;
  }
`;

const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledLabel} {
    &::before {
      color: #c3a180;

      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f058';
    }
  }
`;

const StyledForm = styled.div`
  input,
  textarea {
    border: 2px solid #b6b7b7;
    color: #363b3f;
    background: transparent none repeat scroll 0% 0%;
    padding: 15px 30px;
    margin: 10px 3% 20px 0px;
    resize: none;
    border-radius: 0px;
    height: auto;
  }
  .form-control:focus {
    border-color: #c3a180;
    outline: 0px none;
    box-shadow: none;
  }
  .has-error input,
  .has-error input:focus,
  .has-error textarea,
  .has-error textarea:focus {
    margin-bottom: 0px;
    border-color: #a94442;
  }
`;

const StyledButton = styled(Button)`
  &:disabled,
  .btn-primary {
    cursor: not-allowed;
    opacity: 0.4;
    background-color: #c3a180;
    border-color: #c3a180;
    &:hover,
    .btn-primary:hover {
      color: #fff;
      background-color: #c3a180;
      border-color: #c3a180;
    }
  }
`;
const SectionLogin = props => (
  <StyledSection>
    <Background />
    <Container className="h-100">
      <Row className="h-100">
        <Col md={{ size: 4, offset: 8 }} xs={4} className="align-self-center text-center">
          <Card>
            <Login>
              <h5>Bitte verwenden Sie den Code Ihrer Einladung, um den Inhalt der Veranstaltung anzuzeigen</h5>
              <StyledForm>
                {/* <FormGroup>
                  <Input type="name" name="name" placeholder="Your Name" id="rsvpName" />
                </FormGroup> */}
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Dein Einladungscode"
                    autoFocus
                    onChange={props.handleCode}
                    onKeyPress={props.handleKeyPress}
                  />
                </FormGroup>
                <StyledButton
                  type="submit"
                  color="primary"
                  size="lg"
                  block
                  onClick={props.handleLogin}
                  disabled={!props.codeMatch}
                >
                  Log in
                </StyledButton>
                <div className="top-mrg-20">
                  <FormGroup>
                    <StyledInput
                      type="checkbox"
                      id="rememberme"
                      name="remember"
                      onChange={props.handleRemember}
                    />
                    <StyledLabel htmlFor="rememberme">Log mich nächstes Mal automatisch ein.</StyledLabel>
                  </FormGroup>
                </div>
              </StyledForm>
            </Login>
          </Card>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

SectionLogin.propTypes = {
  codeMatch: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleCode: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleRemember: PropTypes.func.isRequired,
};
export default SectionLogin;
