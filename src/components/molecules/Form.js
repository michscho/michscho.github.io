import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  Button,
  Input,
  Label,
  FormFeedback,
  UncontrolledAlert,
} from 'reactstrap';
import isEmail from 'validator/lib/isEmail';

import styled from 'styled-components';

const StyledFormErrors = styled.div`
  p {
    display: block;
    width: 100%;
    margin: 0px;
    font-size: 80%;
    color: #dc3545;
  }
`;
const StyledForm = styled.form`
  input,
  textarea {
    border: 2px solid #b6b7b7;
    color: #363b3f;
    background: transparent none repeat scroll 0% 0%;
    padding: 15px 30px;
    margin: 0px 3% 10px 0px;
    resize: none;
    border-radius: 0px;
    height: auto;
  }
  .form-control {
    border-color: #c3a180;
    outline: 0px none;
    box-shadow: none;

    &:valid,
    .is-valid,
    &.is-valid:focus {
      margin-bottom: 0px;
      border-color: #c3a180;
      box-shadow: none;
    }

    &:invalid,
    .is-invalid,
    &.is-invalid:focus {
      margin-bottom: 0px;
      border-color: #a94442;
      box-shadow: none;
    }
  }
`;

const StyledLabel = styled(Label)`
  font-family: 'Oswald', Verdana, Geneva, sans-serif;
  font-size: 23px;
  cursor: pointer;
  font-weight: normal;
  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 14px;
  }
  &:hover {
    color: #c3a180;
  }
  &::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: regular;
    content: '\f111';
    margin-right: 0.3em;
  }
`;

const StyledInput = styled(Input)`
  display: none;

  &:checked + ${StyledLabel} {
    color: #c3a180;
    font-size: 24px;

    p {
      font-weight: normal;
    }
    &::before {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f058';
    }
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

export default class Form extends React.Component {
  state = {
    name: '',
    email: '',
    party: false,
    ceremony: false,
    formErrors: { name: '', email: '', event: 'Wähle mindestens ein Event aus!' },
    nameValid: null,
    emailValid: null,
    eventsValid: false,
    formValid: false,
    visible: true,
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let eventsValid = this.state.eventsValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.length >= 3;
        // fieldValidationErrors.name = nameValid ? '' : ' is too short';
        break;
      case 'email':
        emailValid = isEmail(value);
        // fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'party':
      case 'ceremony':
        eventsValid = this.state.party || this.state.ceremony;
        fieldValidationErrors.event = eventsValid ? '' : 'You need to select at least one';
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid,
        nameValid,
        eventsValid,
      },
      () => {
        this.validateForm();
      },
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.nameValid && this.state.eventsValid,
    });
  }

  render() {
    const FormErrors = ({ formErrors }) => (
      <StyledFormErrors>
        {Object.keys(formErrors).map((fieldName, i) => {
          if (formErrors[fieldName].length > 0) {
            return (
              <UncontrolledAlert color="warning" key={fieldName.concat(i)}>
                {formErrors[fieldName]} {fieldName}
              </UncontrolledAlert>
            );
          }
          return '';
        })}
      </StyledFormErrors>
    );

    return (
      <StyledForm method="post" action="/rsvp">
        <FormErrors formErrors={this.state.formErrors} />
        <Row>
          <Col md={6} className="text-center">
            <StyledInput
              id="checkbox-1"
              type="checkbox"
              name="ceremony"
              value="Ceremony"
              checked={this.state.ceremony}
              onChange={this.handleInputChange}
            />
            <StyledLabel htmlFor="checkbox-1">
            Zeremonie
              <p>
                München 80799 <br />Brauerrei.
              </p>
            </StyledLabel>
          </Col>
          <Col md={6} className="text-center">
            <StyledInput
              id="checkbox-2"
              type="checkbox"
              name="party"
              value="Party"
              checked={this.state.party}
              onChange={this.handleInputChange}
            />
            <StyledLabel htmlFor="checkbox-2">
              Party
              <p>
                München, Kirchstraße <br /> Bierstube.
              </p>
            </StyledLabel>
          </Col>
        </Row>

        <Row className="top-mrg-10">
          <Col md={6}>
            <FormGroup>
              <Input
                type="text"
                name="name"
                placeholder="Dein Name"
                id="name"
                value={this.state.name}
                valid={this.state.nameValid}
                onChange={this.handleInputChange}
              />
              <FormFeedback className="top-mrg-10">Ups! Deine Name ist zu kurz</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Deine Email"
                id="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                valid={this.state.emailValid}
              />
              <FormFeedback className="top-mrg-10">Oh nein! Die Email ist ungültig.</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Input
                type="textarea"
                rows="5"
                name="message"
                placeholder="Schreibe deine Nachricht hier"
                id="message"
              />
            </FormGroup>
          </Col>
        </Row>
        <StyledButton type="submit" color="primary" size="lg" disabled={!this.state.formValid}>
          Ich nehme teil.
        </StyledButton>
      </StyledForm>
    );
  }
}
