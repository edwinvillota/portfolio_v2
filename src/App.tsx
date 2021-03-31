import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Default } from 'styles/themes';
import { GlobalStyle } from 'styles/Global';
import { GlobalCtxProvider } from 'context/GlobalCtx';

import { Home } from 'components/views';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={Default}>
      <GlobalStyle />
      <GlobalCtxProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </GlobalCtxProvider>
    </ThemeProvider>
  </>
);

export default App;
