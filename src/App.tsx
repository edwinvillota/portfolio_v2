import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalCtxProvider } from 'context/GlobalCtx';
import { ThemeCtxProvider } from 'context/ThemeCtx';

import { Home } from 'components/views';

const App: React.FC = () => (
  <>
    <GlobalCtxProvider>
      <ThemeCtxProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeCtxProvider>
    </GlobalCtxProvider>
  </>
);

export default App;
