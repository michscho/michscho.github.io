import React from 'react';

import Header from '../organisms/Header';

import Home from '../organisms/Hero';
import Couple from '../organisms/Couple';
import Frase from '../organisms/Frase';
import Counter from '../organisms/Counter';
import RSVP from '../organisms/RSVP';

const HomePage = props => (
  <React.Fragment>
    <Home />
    <Header {...props} />
    <Couple />
    <Frase />
    <Counter />
    <RSVP />
  </React.Fragment>
);

export default HomePage;
