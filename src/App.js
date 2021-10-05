import React, { Fragment } from 'react';

import Header from './components/Layout/Header';
import Home from './components/pages/Home';

function App() {
  return (
    <Fragment>
      <Header>
        <Home />
      </Header>
    </Fragment>
  );
}

export default App;
