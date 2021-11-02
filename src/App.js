import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import PcBuild from './components/PcBuild/PcBuild';
import PreBuiltPc from './components/PreBuiltPc/PreBuiltPc';
import Support from './components/Support/Support';

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/build-a-pc" component={ PcBuild }/>
          <Route path="/pre-built-pc" component={ PreBuiltPc }/>
          <Route path="/support" component={ Support }/>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
