import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import TomatoClock from './projects/TomatoClock/pages/Main/Main';
import Solitaire from './projects/Solitaire/pages/Main/Main.jsx';

const app = props => {
  return (
    <HashRouter basename="/">
      <div className="App">
        {/* <Route path="/test" render={() => comp} /> */}
        <Route path="/tomato-clock" component={TomatoClock} />
        <Route path="/solitaire" component={Solitaire} />
      </div>
    </HashRouter>
  );
};

export default app;
