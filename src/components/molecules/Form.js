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
import Telegram from 'telegram-send-message';

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
    formErrors: { name: '', email: '' },
    nameValid: null,
    emailValid: null,
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

    switch (fieldName) {
      case 'name':
        nameValid = value.length >= 3;
        break;
      case 'email':
        emailValid = isEmail(value);
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid,
        nameValid,
      },
      () => {
        this.validateForm();
      },
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.nameValid,
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

    function sendTelegramMessage(name, email) {
      if (process.env.API_KEY) {
        Telegram.setRecipient('14624857');
        Telegram.setToken(process.env.API_KEY);
        Telegram.setMessage(`Name: ${name} Email: ${email}`);
        Telegram.send();
        Telegram.setRecipient('258407498');
        Telegram.setMessage(`Name: ${name} Email: ${email}`);
        Telegram.send();
      }
    }

    return (
      <StyledForm>
        <FormErrors formErrors={this.state.formErrors} />

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
              <FormFeedback className="top-mrg-10">Bitte gebe eine gültige Email Adresse an.</FormFeedback>
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
        <StyledButton onClick={() => sendTelegramMessage(this.state.name, this.state.email)} color="primary" size="lg" disabled={!this.state.formValid}>
          Ich nehme teil.
        </StyledButton>
      </StyledForm>
    );
  }
}
