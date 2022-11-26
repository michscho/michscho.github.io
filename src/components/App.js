import React from 'react';
import Helmet from 'react-helmet';

import MainTemplate from './templates/MainTemplate';

import globalStyles from './global-styles';

globalStyles();

const App = () => (
  <React.Fragment>
    <Helmet>
      <title>Hochzeit Annika & Robert</title>
    </Helmet>
    <MainTemplate />
  </React.Fragment>
);
export default App;
