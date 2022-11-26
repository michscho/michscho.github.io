import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Sticky from 'react-stickynode';
import { Container, Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap';

const StyledNavbar = styled(Navbar)`
  font-family: 'Oswald', Verdana, Geneva, sans-serif;
  font-size: 20px;
  z-index: 998;
  width: 100%;
  padding: 20px 0px;
  background-color: #fff;
  border: 0px;
`;

const StyledNavBrand = styled(NavLink)`
  &:hover {
    text-decoration: none;
  }
`;
const StyledLink = styled(NavLink)`
  color: #777;
  padding: 10px 6px;
  &.active {
    color: #c3a180 !important;
    background: none;
  }
  &:hover {
    color: #333;
    text-decoration: none;
    background-color: transparent;
  }
  &::after {
    content: '/';
    padding-left: 10px;
    color: rgba(0, 0, 0, 0.2);
  }
`;

const StyledLinkLast = styled(NavLink)`
  color: #777;
  padding: 10px 6px;
  &.active {
    color: #c3a180 !important;
    background: none;
  }
  &:hover {
    color: #333;
    text-decoration: none;
    background-color: transparent;
  }
`;

const Names = styled.ul`
  color: #777;
  list-style: none;
  display: inline;
  font-size: 30px;
  text-transform: none !important;
  padding: 0px;
  li {
    display: inline-block;
    &:hover {
      color: #c3a180;
      text-decoration: none;
      background-color: transparent;
    }
  }
  @media (max-width: 767px) {
    font-size: 19px;
  }
`;

const Circle = styled.li`
  background: #c3a180;
  width: 20px;
  height: 20px;
  font-size: 13px;
  top: -5px;
  text-align: center;
  font-weight: normal;
  line-height: 1.5em;
  border-radius: 100px;
  margin: 0px;
  color: #fff;
  position: relative;
  &:hover {
    color: #333;
    text-decoration: none;
    background-color: transparent;
  }
`;

const StyledSticky = styled(Sticky)`
  height: 50px;
  z-index: 1200;
`;

const NavHeader = styled.header``;

const LogoutButton = styled.a`
  &:not([href]):not([tabindex]) {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 75px;
    height: 30px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: normal;
    line-height: 1;
    border-radius: 25px;
    margin: 0px 5px 0 5px;
    border: 4px solid #62655a;
    background: #62655a;
    bottom: 2px;
    cursor: pointer;

    &:hover {
      color: #fff;
      border: 4px solid #c3a180;
      background: #c3a180;
    }
  }
`;

const StyledNav = styled(Nav)`
  padding: 0px 10px;
  > li a {
    color: #777;
    &:hover {
      color: #333;
      text-decoration: none;
    }
  }
`;

export default class Header extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  authButton = () =>
    (this.props.fakeAuth.isAuthenticated ? (
      <LogoutButton
        onClick={() => {
          this.props.fakeAuth.signout(() => this.props.history.push('/'));
        }}
      >
        Logout
      </LogoutButton>
    ) : (
      <p>You are not logged in.</p>
    ));

  render() {
    return (
      <NavHeader>
        <StyledSticky innerZ="1200">
          <StyledNavbar light expand="md">
            <Container>
              <StyledNavBrand to="/">
                <Names>
                  <li>Annika</li> <Circle>&amp;</Circle> <li>Robert</li>
                </Names>
              </StyledNavBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <StyledNav className="ml-auto">
                  <li>
                    <StyledLink exact activeClassName="active" to="/">
                      Home
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink activeClassName="active" to="/story">
                      Ablauf
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink activeClassName="active" to="/accommodation">
                      Unterkunft
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink activeClassName="active" to="/gallery">
                      Bildergallerie
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLinkLast activeClassName="active" to="/rsvp">
                      Anmeldung
                    </StyledLinkLast>
                  </li>
                </StyledNav>
              </Collapse>
            </Container>
          </StyledNavbar>
        </StyledSticky>
      </NavHeader>
    );
  }
}

Header.propTypes = {
  fakeAuth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
