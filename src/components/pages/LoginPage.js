import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Cryptr from 'cryptr';

import SectionLogin from '../organisms/Login';

export default class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    codeMatch: false,
    remember: false,
  };

  handleCode = (e) => {
    //const cryptr = new Cryptr('hochzeit');

    this.setState({
      codeMatch: true,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleLogin();
    }
  };

  handleLogin = () => {
    this.props.fakeAuth.authenticate(this.state.remember, () => {
      this.setState(() => ({
        redirectToReferrer: this.state.codeMatch,
      }));
    });
  };

  handleRemember = (e) => {
    this.setState({
      remember: e.target.checked,
    });
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <SectionLogin
        handleLogin={this.handleLogin}
        handleCode={this.handleCode}
        handleKeyPress={this.handleKeyPress}
        handleRemember={this.handleRemember}
        codeMatch={this.state.codeMatch}
      />
    );
  }
}

Login.propTypes = {
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  fakeAuth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};
