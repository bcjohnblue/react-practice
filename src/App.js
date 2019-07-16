import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import TomatoClockMain from './TomatoClock/pages/Main/Main';

const app = props => {
  return (
    <HashRouter basename="/">
      <div className="App">
        {/* <Route path="/test" render={() => comp} /> */}
        <Route path="/tomato-clock" component={TomatoClockMain} />
      </div>
    </HashRouter>
  );
};

export default app;
